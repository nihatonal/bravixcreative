export type Locale = "en" | "tr" | "ru"; // Kendi dil kodların

export const legalPaths: Record<
  "terms" | "privacy" | "cookie",
  Record<Locale, string>
> = {
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
