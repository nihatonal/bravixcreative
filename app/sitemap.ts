import type { MetadataRoute } from "next";
import { getAllProjects, getProjectById } from "@/lib/projectService";

export const dynamic = "force-static";

const siteUrl = "https://www.bravixcreative.com";
const locales = ["en", "tr", "ru"] as const;

const staticPages = [
  {
    key: "home",
    paths: {
      en: "",
      tr: "",
      ru: "",
    },
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    key: "terms",
    paths: {
      en: "terms-of-service",
      tr: "hizmet-sartlari",
      ru: "usloviya-obsluzhivaniya",
    },
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    key: "privacy",
    paths: {
      en: "privacy-policy",
      tr: "gizlilik-politikasi",
      ru: "politika-konfid",
    },
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    key: "cookie",
    paths: {
      en: "cookie-policy",
      tr: "cerez-politikasi",
      ru: "politika-cookie",
    },
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },

  // Buraya diğer statik sayfalarını da ekle
  // örnek:
  // {
  //   key: "contact",
  //   paths: {
  //     en: "contact-me",
  //     tr: "iletisim",
  //     ru: "kontakt",
  //   },
  //   priority: 0.8,
  //   changeFrequency: "monthly" as const,
  // },
];

function buildUrl(locale: string, path: string) {
  return path ? `${siteUrl}/${locale}/${path}/` : `${siteUrl}/${locale}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [];

  // 1) Statik sayfalar
  for (const page of staticPages) {
    for (const locale of locales) {
      urls.push({
        url: buildUrl(locale, page.paths[locale]),
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: buildUrl("en", page.paths.en),
            tr: buildUrl("tr", page.paths.tr),
            ru: buildUrl("ru", page.paths.ru),
            "x-default": buildUrl("en", page.paths.en),
          },
        },
      });
    }
  }

  // 2) Proje sayfaları
  const allProjects = getAllProjects();

  for (const project of allProjects) {
    const projectId = String(project.id);

    for (const locale of locales) {
      const localizedProject = getProjectById(projectId, locale);

      if (!localizedProject) continue;

      const enProject = getProjectById(projectId, "en");
      const trProject = getProjectById(projectId, "tr");
      const ruProject = getProjectById(projectId, "ru");

      urls.push({
        url: `${siteUrl}/${locale}/project/${localizedProject.slug}/${projectId}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            ...(enProject
              ? {
                  en: `${siteUrl}/en/project/${enProject.slug}/${projectId}/`,
                }
              : {}),
            ...(trProject
              ? {
                  tr: `${siteUrl}/tr/project/${trProject.slug}/${projectId}/`,
                }
              : {}),
            ...(ruProject
              ? {
                  ru: `${siteUrl}/ru/project/${ruProject.slug}/${projectId}/`,
                }
              : {}),
            ...(enProject
              ? {
                  "x-default": `${siteUrl}/en/project/${enProject.slug}/${projectId}/`,
                }
              : {}),
          },
        },
      });
    }
  }

  return urls;
}
