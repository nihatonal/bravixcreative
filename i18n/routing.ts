import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "tr", "ru"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "tr",
  pathnames: {
    "/contact": {
      en: "/contact-me",
      tr: "/iletisim",
      ru: "/kontakt",
    },
  },
});

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);