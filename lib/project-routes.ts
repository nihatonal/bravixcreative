import type { Locale } from "@/i18n/routing";
import { projectSlugMapping } from "@/utils/projectSlugMapping";

export const projectSections: Record<Locale, string> = {
  en: "projects",
  tr: "projeler",
  ru: "proekty",
};

export function getProjectsPath(locale: Locale): string {
  return `/${locale}/${projectSections[locale]}/`;
}

export function getProjectPath(locale: Locale, slug: string): string {
  return `/${locale}/${projectSections[locale]}/${slug}/`;
}

export function isProjectSection(locale: Locale, section: string): boolean {
  return projectSections[locale] === section;
}

export function getProjectIdBySlug(locale: Locale, slug: string): string | null {
  for (const [id, translations] of Object.entries(projectSlugMapping)) {
    if (translations[locale] === slug) {
      return id;
    }
  }

  return null;
}

export function getProjectLanguageAlternates(projectId: string) {
  const siteUrl = "https://bravixcreative.com";

  const alternates: Record<string, string> = {};

  for (const locale of ["en", "tr", "ru"] as Locale[]) {
    const slug =
      projectSlugMapping[projectId as keyof typeof projectSlugMapping]?.[
        locale
      ];

    if (slug) {
      alternates[locale] = `${siteUrl}${getProjectPath(locale, slug)}`;
    }
  }

  alternates["x-default"] = alternates.en;

  return alternates;
}