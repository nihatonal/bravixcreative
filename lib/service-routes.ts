import type { Locale } from "@/i18n/routing";
import type { ServiceSlug } from "@/lib/services";

type LocalizedServiceRoute = {
  section: string;
  slug: string;
};

export const serviceSlugs: ServiceSlug[] = [
  "web-development",
  "ecommerce-development",
  "ui-ux-design",
  "seo-optimization",
  "website-maintenance",
];

export const serviceRoutes: Record<ServiceSlug, Record<Locale, LocalizedServiceRoute>> = {
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

export function getServicePath(locale: Locale, service: ServiceSlug): string {
  const route = serviceRoutes[service][locale];
  return `/${locale}/${route.section}/${route.slug}/`;
}

export function resolveServiceSlugFromPath(
  locale: Locale,
  section: string,
  publicSlug: string
): ServiceSlug | null {
  const normalizedSection = section.replace(/^\/|\/$/g, "");
  const normalizedSlug = publicSlug.replace(/^\/|\/$/g, "");

  for (const service of serviceSlugs) {
    const route = serviceRoutes[service][locale];

    if (
      route.section === normalizedSection &&
      route.slug === normalizedSlug
    ) {
      return service;
    }
  }

  return null;
}

export function getServiceLanguageAlternates(service: ServiceSlug) {
  const baseUrl = "https://bravixcreative.com";

  return {
    en: `${baseUrl}${getServicePath("en", service)}`,
    tr: `${baseUrl}${getServicePath("tr", service)}`,
    ru: `${baseUrl}${getServicePath("ru", service)}`,
    "x-default": `${baseUrl}${getServicePath("en", service)}`,
  };
}