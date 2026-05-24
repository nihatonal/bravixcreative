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
  "high-converting-website": {
    "en": "how-to-design-a-high-converting-website-2026"
  },
  "landing-page-mistakes": {
    "en": "landing-page-mistakes-2026-seo-conversion-guide",
    "tr": "landing-page-hatalari-2026-seo-donusum-rehberi",
    "ru": "landing-page-oshibki-2026-seo-konversiya"
  },
  "modern-website-2026": {
    "en": "modern-website-2026-business-importance",
    "ru": "sovremennye-sayty-2026-biznes-rost",
    "tr": "modern-web-siteleri-2026-onemi"
  },
  "nextjs-16-seo": {
    "tr": "nextjs-seo-rehberi-2026-performans-ve-siralama",
    "ru": "nextjs-seo-rukovodstvo-2026-proizvoditelnost-i-pozicii",
    "en": "the-2026-nextjs-seo-guide-ai-search-optimization"
  },
  "online-siparis-sitesi": {
    "ru": "kak-sdelat-sayt-restorana-s-onlayn-zakazami-2026",
    "tr": "online-siparis-alan-restoran-web-sitesi-nasil-yapilir-2026",
    "en": "how-to-build-restaurant-website-online-orders-2026"
  }
};

export const blogSlugToGroupMap: Record<string, string> = {
  "building-design-systems-that-scale": "Design Systems",
  "how-to-build-restaurant-website-online-orders-2026": "online-siparis-sitesi",
  "how-to-design-a-high-converting-website-2026": "high-converting-website",
  "kak-sdelat-sayt-restorana-s-onlayn-zakazami-2026": "online-siparis-sitesi",
  "landing-page-hatalari-2026-seo-donusum-rehberi": "landing-page-mistakes",
  "landing-page-mistakes-2026-seo-conversion-guide": "landing-page-mistakes",
  "landing-page-oshibki-2026-seo-konversiya": "landing-page-mistakes",
  "masshtabiruemye-design-sistemy-component-architecture": "Design Systems",
  "modern-web-siteleri-2026-onemi": "modern-website-2026",
  "modern-website-2026-business-importance": "modern-website-2026",
  "nextjs-seo-rehberi-2026-performans-ve-siralama": "nextjs-16-seo",
  "nextjs-seo-rukovodstvo-2026-proizvoditelnost-i-pozicii": "nextjs-16-seo",
  "olceklenebilir-design-system-olusturma": "Design Systems",
  "online-siparis-alan-restoran-web-sitesi-nasil-yapilir-2026": "online-siparis-sitesi",
  "sovremennye-sayty-2026-biznes-rost": "modern-website-2026",
  "the-2026-nextjs-seo-guide-ai-search-optimization": "nextjs-16-seo"
};
