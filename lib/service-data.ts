import type { Locale } from "../i18n/routing";

export type CaseStudy = {
  title: string;
  href: string;
  serviceType: string;
  industry: string;
  summary: string;
};

export function getCaseStudies(locale: Locale): CaseStudy[] {
  const base = {
    en: {
      taTravel: "/en/projects/ta-travel-web-site/1007/",
      hotel: "/en/projects/apartment-hotel-website-and-admin-panel/1001/",
      restaurant: "/en/projects/fast-food-restaurant-website/1006/",
    },
    tr: {
      taTravel: "/tr/projects/ta-travel-web-sitesi/1007/",
      hotel: "/tr/projects/apart-otel-web-sitesi-ve-yonetici-paneli/1001/",
      restaurant: "/tr/projects/fast-food-restoran-web-sitesi/1006/",
    },
    ru: {
      taTravel: "/ru/projects/ta-travel-vebsayt/1007/",
      hotel: "/ru/projects/veb-sayt-apart-otelya-i-administrativnaya-panel/1001/",
      restaurant: "/ru/projects/sayt-fastfud-restorana/1006/",
    },
  }[locale];

  if (locale === "tr") {
    return [
      {
        title: "TA-Travel Website",
        href: base.taTravel,
        serviceType: "Kurumsal Web Sitesi Geliştirme",
        industry: "Turizm",
        summary:
          "Yönetim paneli, çok dilli yapı ve ölçeklenebilir mimari ile geliştirilen modern turizm platformu.",
      },
      {
        title: "Apartment Hotel Website",
        href: base.hotel,
        serviceType: "Otel Web Sitesi Geliştirme",
        industry: "Konaklama",
        summary:
          "Dönüşüm odaklı yapı ve pratik yönetim deneyimi sunan modern otel web sitesi.",
      },
      {
        title: "Fast Food Restaurant Website",
        href: base.restaurant,
        serviceType: "Restoran Web Sitesi Geliştirme",
        industry: "Yeme İçme",
        summary:
          "Modern restoran markaları için tasarlanmış hızlı ve mobil odaklı web deneyimi.",
      },
    ];
  }

  if (locale === "ru") {
    return [
      {
        title: "TA-Travel Website",
        href: base.taTravel,
        serviceType: "Разработка корпоративного сайта",
        industry: "Туризм",
        summary:
          "Современная туристическая платформа с админ-панелью, мультиязычной структурой и масштабируемой архитектурой.",
      },
      {
        title: "Apartment Hotel Website",
        href: base.hotel,
        serviceType: "Разработка сайта для отеля",
        industry: "Гостиничный бизнес",
        summary:
          "Сайт для гостиничного бизнеса с упором на конверсию и удобную административную часть.",
      },
      {
        title: "Fast Food Restaurant Website",
        href: base.restaurant,
        serviceType: "Разработка сайта для ресторана",
        industry: "Еда и напитки",
        summary:
          "Быстрый и mobile-first сайт, адаптированный под современные ресторанные бренды.",
      },
    ];
  }

  return [
    {
      title: "TA-Travel Website",
      href: base.taTravel,
      serviceType: "Corporate Website Development",
      industry: "Tourism",
      summary:
        "Modern tourism platform with admin panel, multilingual structure, and scalable architecture.",
    },
    {
      title: "Apartment Hotel Website",
      href: base.hotel,
      serviceType: "Hotel Website Development",
      industry: "Hospitality",
      summary:
        "A conversion-focused hospitality website supported by a practical admin experience.",
    },
    {
      title: "Fast Food Restaurant Website",
      href: base.restaurant,
      serviceType: "Restaurant Website Development",
      industry: "Food & Beverage",
      summary:
        "Fast, mobile-oriented website experience tailored for modern restaurant brands.",
    },
  ];
}
