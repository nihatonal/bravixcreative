import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://bravixcreative.com";
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
const projectSections = {
  en: "projects",
  tr: "projeler",
  ru: "proekty",
};

const staticPaths = {
  home: {
    tr: "",
    en: "",
    ru: "",
  },
  blog: {
    tr: "blog",
    en: "blog",
    ru: "blog",
  },
   projects: {
    tr: "projeler",
    en: "projects",
    ru: "proekty",
  },
  terms: legalPaths.terms,
  privacy: legalPaths.privacy,
  cookie: legalPaths.cookie,
};

const serviceRoutes = {
  "web-development": {
    en: { section: "services", slug: "web-development" },
    tr: { section: "hizmetler", slug: "web-gelistirme" },
    ru: { section: "uslugi", slug: "razrabotka-saytov" },
  },
  "ecommerce-development": {
    en: { section: "services", slug: "ecommerce-development" },
    tr: { section: "hizmetler", slug: "eticaret-gelistirme" },
    ru: { section: "uslugi", slug: "razrabotka-internet-magazinov" },
  },
  "ui-ux-design": {
    en: { section: "services", slug: "ui-ux-design" },
    tr: { section: "hizmetler", slug: "ui-ux-tasarimi" },
    ru: { section: "uslugi", slug: "ui-ux-dizayn" },
  },
  "seo-optimization": {
    en: { section: "services", slug: "seo-optimization" },
    tr: { section: "hizmetler", slug: "seo-optimizasyonu" },
    ru: { section: "uslugi", slug: "seo-optimizatsiya" },
  },
  "website-maintenance": {
    en: { section: "services", slug: "website-maintenance" },
    tr: { section: "hizmetler", slug: "website-bakimi" },
    ru: { section: "uslugi", slug: "podderzhka-sayta" },
  },
};

function getServiceUrl(locale, serviceKey) {
  const route = serviceRoutes[serviceKey]?.[locale];

  if (!route) return null;

  return withTrailingSlash(
    `${siteUrl}/${locale}/${route.section}/${route.slug}`,
  );
}

function getProjectUrl(locale, slug) {
  return withTrailingSlash(
    `${siteUrl}/${locale}/${projectSections[locale]}/${slug}`,
  );
}

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
          lng,
        )}" href="${escapeXml(href)}" />`,
    )
    .join("\n");
}

function buildUrlEntry({
  loc,
  lastmod,
  alternates,
  changefreq = "monthly",
  priority = "0.8",
}) {
  const alternateLinks = buildAlternateLinks(alternates);

  return `<url>
  <loc>${escapeXml(loc)}</loc>
  <lastmod>${escapeXml(lastmod)}</lastmod>
${alternateLinks ? `${alternateLinks}\n` : ""}  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`;
}

function loadJson(possiblePaths, label) {
  for (const absPath of possiblePaths) {
    if (!fs.existsSync(absPath)) continue;

    try {
      const raw = fs.readFileSync(absPath, "utf8");
      const parsed = JSON.parse(raw);
      console.log(`${label} loaded: ${absPath}`);
      return parsed;
    } catch (err) {
      console.warn(`${label} okunamadı: ${absPath}`);
      console.warn(err?.message || err);
    }
  }

  console.warn(`${label} bulunamadı.`);
  return null;
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
      alternates["x-default"] = alternates.en;

      urls.push({
        loc,
        lastmod: now,
        alternates,
        changefreq: key === "home" ? "weekly" : "monthly",
        priority: key === "home" ? "1.0" : key === "blog" ? "0.9" : "0.8",
      });
    }
  }

  // 2) Service detail sayfaları
  for (const serviceKey of Object.keys(serviceRoutes)) {
    const alternates = {};

    for (const lng of locales) {
      const serviceUrl = getServiceUrl(lng, serviceKey);

      if (serviceUrl) {
        alternates[lng] = serviceUrl;
      }
    }

    alternates["x-default"] = alternates.en;

    for (const locale of locales) {
      const loc = getServiceUrl(locale, serviceKey);

      if (!loc) continue;

      urls.push({
        loc,
        lastmod: now,
        alternates,
        changefreq: "monthly",
        priority: "0.8",
      });
    }
  }

  // 3) Project detail sayfaları
  const projectSlugMapping = loadJson(
    [
      path.resolve(process.cwd(), "utils/projectSlugMapping.json"),
      path.resolve(process.cwd(), "src/utils/projectSlugMapping.json"),
    ],
    "Project mapping JSON",
  );

  if (projectSlugMapping) {
    const projectEntries = Object.entries(projectSlugMapping);
    console.log(`Total projects found: ${projectEntries.length}`);

    for (const [, translations] of projectEntries) {
      const alternates = {};

      for (const lng of locales) {
        const slug = translations?.[lng];

        if (slug) {
          alternates[lng] = getProjectUrl(lng, slug);
        }
      }

      alternates["x-default"] = alternates.en;

      for (const locale of locales) {
        const slug = translations?.[locale];

        if (!slug) continue;

        urls.push({
          loc: getProjectUrl(locale, slug),
          lastmod: now,
          alternates,
          changefreq: "monthly",
          priority: "0.7",
        });
      }
    }
  } else {
    console.warn("Project URL'leri eklenmedi.");
  }

  // 4) Blog detail sayfaları
  const blogMappingData = loadJson(
    [
      path.resolve(
        process.cwd(),
        "utils/generated/blogSlugMapping.generated.json",
      ),
      path.resolve(
        process.cwd(),
        "src/utils/generated/blogSlugMapping.generated.json",
      ),
    ],
    "Blog mapping JSON",
  );

  const blogSlugMapping = blogMappingData?.blogSlugMapping || {};
  const blogGroups = Object.entries(blogSlugMapping);

  console.log(`Total blog translation groups found: ${blogGroups.length}`);

  for (const [, translations] of blogGroups) {
    const alternates = {};

    for (const lng of locales) {
      const slug = translations?.[lng];
      if (slug) {
        alternates[lng] = withTrailingSlash(`${siteUrl}/${lng}/blog/${slug}`);
      }
    }

    alternates["x-default"] =
      alternates["en"] || alternates["tr"] || alternates["ru"];

    for (const locale of locales) {
      const slug = translations?.[locale];
      if (!slug) continue;

      urls.push({
        loc: withTrailingSlash(`${siteUrl}/${locale}/blog/${slug}`),
        lastmod: now,
        alternates,
        changefreq: "weekly",
        priority: "0.8",
      });
    }
  }

  // duplicate temizle
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
