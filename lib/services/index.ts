import type { Locale } from "@/i18n/routing";
import { enServices } from "./en";
import { trServices } from "./tr";
import { ruServices } from "./ru";
import type {
  ServicePageContent,
  ServicePagesByLocale,
  ServiceSlug,
} from "./types";

export * from "./types";

export const servicePages: ServicePagesByLocale = {
  en: enServices,
  tr: trServices,
  ru: ruServices,
};

export function getServicePage(
  locale: Locale,
  slug: ServiceSlug
): ServicePageContent | null {
  return servicePages[locale]?.[slug] ?? null;
}