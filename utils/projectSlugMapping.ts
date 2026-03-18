// utils/projectSlugMapping.ts

export type Locale = 'tr' | 'en' | 'ru';

export const projectSlugMapping: Record<string, Record<Locale, string>> = {
  "1001": {
    tr: "apart-otel-web-sitesi-ve-yonetici-paneli",
    en: "apart-hotel-website-and-admin-panel",
    ru: "veb-sayt-apart-otelya-i-administrativnaya-panel",
  },
  "1002": {
    tr: "bag-yatirim-web-sitesi",
    en: "vineyard-investment-website",
    ru: "veb-sayt-investiciy-v-vinodelni",
  },
  "1003": {
    tr: "the-glass-hut-kabin-tanitim-sitesi",
    en: "the-glass-hut-cabin-website",
    ru: "the-glass-hut-sayt-dlya-steklyannogo-domika",
  },
  "1004": {
    tr: "mindfulness-uygulama-tanitim-sitesi",
    en: "mindfulness-app-landing-page",
    ru: "celevaya-stranica-prilozheniya-dlya-meditacii",
  },
  "1005": {
    tr: "yaratici-akis-paneli-arayuzu",
    en: "creator-flow-dashboard-ui",
    ru: "panel-upravleniya-creator-flow-ui",
  },
  "1006": {
    tr: "fast-food-restoran-web-sitesi",
    en: "fast-food-restaurant",
    ru: "sayt-fastfud-restorana",
  },
  "1007": {
    tr: "ta-travel-web-sitesi",
    en: "ta-travel-web-site",
    ru: "ta-travel-vebsayt",
  },
};
