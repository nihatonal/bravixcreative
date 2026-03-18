import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const siteUrl = "https://www.bravixcreative.com";
const locales = ["en", "tr", "ru"];
const now = new Date().toISOString();

const legalPaths = {
  terms: {
    tr: "hizmet-sartlari",
    en: "terms-of-service",
    ru: "usloviya-obsluzhivaniya",
  },
  privacy: {
    tr: "gizlilik-politikasi",
    en: "privacy-policy",
    ru: "politika-konfid",
  },
  cookie: {
    tr: "cerez-politikasi",
    en: "cookie-policy",
    ru: "politika-cookie",
  },
};

// Buraya kendi statik sayfalarını ekleyebilirsin
const staticPaths = {
  home: {
    tr: "",
    en: "",
    ru: "",
  },
  terms: legalPaths.terms,
  privacy: legalPaths.privacy,
  cookie: legalPaths.cookie,
};

// URL sonuna slash eklemek için yardımcı
function withTrailingSlash(url) {
  return url.endsWith("/") ? url : `${url}/`;
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildAlternateLinks(alternates = {}) {
  return Object.entries(alternates)
    .map(
      ([lng, href]) =>
        `    <xhtml:link rel="alternate" hreflang="${escapeXml(
          lng
        )}" href="${escapeXml(href)}" />`
    )
    .join("\n");
}

function buildUrlEntry({ loc, lastmod, alternates, changefreq = "monthly", priority = "0.8" }) {
  const alternateLinks = buildAlternateLinks(alternates);

  return `<url>
  <loc>${escapeXml(loc)}</loc>
  <lastmod>${escapeXml(lastmod)}</lastmod>
${alternateLinks ? `${alternateLinks}\n` : ""}  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
}

async function loadPortfolioModule() {
  const possiblePaths = [
    "../constants/portfolioData.js",
    "../constants/portfolioData.mjs",
    "../constants/portfolioData.ts",
    "../src/constants/portfolioData.js",
    "../src/constants/portfolioData.mjs",
    "../src/constants/portfolioData.ts",
  ];

  for (const relPath of possiblePaths) {
    try {
      const absPath = path.resolve(process.cwd(), "scripts", relPath);
      if (!fs.existsSync(absPath)) continue;

      const mod = await import(pathToFileURL(absPath).href);
      console.log(`Portfolio module loaded: ${relPath}`);
      return mod;
    } catch (err) {
      console.warn(`Portfolio module import failed: ${relPath}`);
      console.warn(err?.message || err);
    }
  }

  throw new Error(
    "portfolioData modülü yüklenemedi. Dosya yolu veya uzantısı yanlış olabilir."
  );
}

async function main() {
  const urls = [];

  // 1) Statik sayfalar
  for (const [key, translations] of Object.entries(staticPaths)) {
    for (const locale of locales) {
      const currentPath = translations[locale];
      const loc = currentPath
        ? withTrailingSlash(`${siteUrl}/${locale}/${currentPath}`)
        : withTrailingSlash(`${siteUrl}/${locale}`);

      const alternates = {};
      for (const lng of locales) {
        const altPath = translations[lng];
        alternates[lng] = altPath
          ? withTrailingSlash(`${siteUrl}/${lng}/${altPath}`)
          : withTrailingSlash(`${siteUrl}/${lng}`);
      }
      alternates["x-default"] = withTrailingSlash(`${siteUrl}/en`);

      urls.push({
        loc,
        lastmod: now,
        alternates,
        changefreq: key === "home" ? "weekly" : "monthly",
        priority: key === "home" ? "1.0" : "0.8",
      });
    }
  }

  // 2) Projeler
  let portfolioModule;
  try {
    portfolioModule = await loadPortfolioModule();
  } catch (err) {
    console.error("Project pages sitemap'e eklenemedi:");
    console.error(err?.message || err);
    portfolioModule = null;
  }

  const getAllProjects = portfolioModule?.getAllProjects;
  const getProjectById = portfolioModule?.getProjectById;

  if (typeof getAllProjects === "function" && typeof getProjectById === "function") {
    const allProjects = getAllProjects();
    console.log(`Total projects found: ${allProjects.length}`);

    for (const project of allProjects) {
      const projectId = String(project.id);

      for (const locale of locales) {
        const localizedProject = getProjectById(projectId, locale) || getProjectById(project.id, locale);
        if (!localizedProject?.slug) continue;

        const alternates = {};
        for (const lng of locales) {
          const altProject = getProjectById(projectId, lng) || getProjectById(project.id, lng);
          if (altProject?.slug) {
            alternates[lng] = withTrailingSlash(
              `${siteUrl}/${lng}/project/${altProject.slug}/${projectId}`
            );
          }
        }

        alternates["x-default"] =
          alternates["en"] ||
          withTrailingSlash(`${siteUrl}/${locale}/project/${localizedProject.slug}/${projectId}`);

        urls.push({
          loc: withTrailingSlash(
            `${siteUrl}/${locale}/project/${localizedProject.slug}/${projectId}`
          ),
          lastmod: now,
          alternates,
          changefreq: "monthly",
          priority: "0.7",
        });
      }
    }
  } else {
    console.warn("getAllProjects veya getProjectById bulunamadı. Project URL'leri eklenmedi.");
  }

  // tekrar eden URL'leri temizle
  const uniqueUrlsMap = new Map();
  for (const item of urls) {
    uniqueUrlsMap.set(item.loc, item);
  }
  const uniqueUrls = [...uniqueUrlsMap.values()];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${uniqueUrls.map(buildUrlEntry).join("\n")}
</urlset>`;

  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
  console.log(`public/sitemap.xml generated (${uniqueUrls.length} URLs)`);
}

main().catch((err) => {
  console.error("Sitemap generation failed:");
  console.error(err);
  process.exit(1);
});