import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_SANITY_API_VERSION || "2024-01-01";
const token = process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN;

if (!projectId || !dataset) {
  throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID ve NEXT_PUBLIC_SANITY_DATASET tanımlı olmalı.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const QUERY = `
  *[
    _type == "blog_bravix" &&
    published == true &&
    defined(slug.current) &&
    defined(translationGroup)
  ]{
    translationGroup,
    lang,
    "slug": slug.current,
    title
  }
`;

function sortObjectKeys(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}

async function main() {
  const items = await client.fetch(QUERY);

  const blogSlugMapping = {};
  const blogSlugToGroupMap = {};

  for (const item of items) {
    const translationGroup = item?.translationGroup;
    const lang = item?.lang;
    const slug = item?.slug;

    if (!translationGroup || !lang || !slug) continue;

    if (!blogSlugMapping[translationGroup]) {
      blogSlugMapping[translationGroup] = {};
    }

    blogSlugMapping[translationGroup][lang] = slug;
    blogSlugToGroupMap[slug] = translationGroup;
  }

  const sortedBlogSlugMapping = sortObjectKeys(blogSlugMapping);
  const sortedBlogSlugToGroupMap = sortObjectKeys(blogSlugToGroupMap);

  const outputDir = path.join(rootDir, "utils", "generated");
  await fs.mkdir(outputDir, { recursive: true });

  const tsContent = `/* eslint-disable */
// Bu dosya otomatik üretilmiştir.
// Elle düzenleme yapma.
// Script: npm run generate:blog-slug-mapping

export type Locale = "tr" | "en" | "ru";

export const blogSlugMapping: Record<string, Partial<Record<Locale, string>>> = ${JSON.stringify(
    sortedBlogSlugMapping,
    null,
    2
  )};

export const blogSlugToGroupMap: Record<string, string> = ${JSON.stringify(
    sortedBlogSlugToGroupMap,
    null,
    2
  )};
`;

  const jsonContent = JSON.stringify(
    {
      blogSlugMapping: sortedBlogSlugMapping,
      blogSlugToGroupMap: sortedBlogSlugToGroupMap,
    },
    null,
    2
  );

  await fs.writeFile(
    path.join(outputDir, "blogSlugMapping.generated.ts"),
    tsContent,
    "utf8"
  );

  await fs.writeFile(
    path.join(outputDir, "blogSlugMapping.generated.json"),
    jsonContent,
    "utf8"
  );

  console.log("Blog slug mapping üretildi:");
  console.log(path.join(outputDir, "blogSlugMapping.generated.ts"));
  console.log(path.join(outputDir, "blogSlugMapping.generated.json"));
  console.log(`Toplam kayıt: ${items.length}`);
  console.log(`Toplam grup: ${Object.keys(sortedBlogSlugMapping).length}`);
}

main().catch((error) => {
  console.error("generateBlogSlugMapping error:", error);
  process.exit(1);
});