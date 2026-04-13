/* eslint-disable */
// Bu dosya otomatik üretilmiştir.
// Elle düzenleme yapma.
// Script: npm run generate:blog-slug-mapping

export type Locale = "tr" | "en" | "ru";

export const blogSlugMapping: Record<string, Partial<Record<Locale, string>>> = {
  "Design Systems": {
    "ru": "masshtabiruemye-design-sistemy-component-architecture",
    "en": "building-design-systems-that-scale",
    "tr": "olceklenebilir-design-system-olusturma"
  },
  "modern-website-2026": {
    "en": "modern-website-2026-business-importance",
    "ru": "sovremennye-sayty-2026-biznes-rost",
    "tr": "modern-web-siteleri-2026-onemi"
  }
};

export const blogSlugToGroupMap: Record<string, string> = {
  "building-design-systems-that-scale": "Design Systems",
  "masshtabiruemye-design-sistemy-component-architecture": "Design Systems",
  "modern-web-siteleri-2026-onemi": "modern-website-2026",
  "modern-website-2026-business-importance": "modern-website-2026",
  "olceklenebilir-design-system-olusturma": "Design Systems",
  "sovremennye-sayty-2026-biznes-rost": "modern-website-2026"
};
