import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import en from "@/messages/en.json";
import tr from "@/messages/tr.json";
import ru from "@/messages/ru.json";

export const locales = ["en", "tr", "ru"] as const;
const dictionaries = {
  en,
  tr,
  ru,
};
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "tr", "ru"],

  // Used when no locale matches
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

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
