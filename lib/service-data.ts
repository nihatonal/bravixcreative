import type { Locale } from "../i18n/routing";

export type CaseStudy = {
  title: string;
  href: string;
  serviceType: string;
  industry: string;
  summary: string;
  image: string;
};

export type ServiceSlug =
  | "web-development"
  | "ecommerce-development"
  | "ui-ux-design"
  | "seo-optimization"
  | "website-maintenance";

const caseStudiesByLocaleAndService: Record<
  Locale,
  Partial<Record<ServiceSlug, CaseStudy[]>>
> = {
  en: {
    "web-development": [
      {
        title: "TA-Travel Website",
        href: "/en/projects/ta-travel-web-site/1007/",
        serviceType: "Corporate Website Development",
        image: "/images/projects/ta-travel_home.webp",
        industry: "Tourism",
        summary:
          "Modern tourism platform with admin panel, multilingual structure, and scalable architecture.",
      },
      {
        title: "Apartment Hotel Website",
        href: "/en/projects/apartment-hotel-website-and-admin-panel/1001/",
        serviceType: "Hotel Website Development",
        image: "/images/projects/monihomes_story.webp",
        industry: "Hospitality",
        summary:
          "A conversion-focused hospitality website supported by a practical admin experience.",
      },
      {
        title: "Fast Food Restaurant Website",
        href: "/en/projects/fast-food-restaurant-website/1006/",
        serviceType: "Restaurant Website Development",
        image: "/images/projects/quickbite.webp",
        industry: "Food & Beverage",
        summary:
          "Fast, mobile-oriented website experience tailored for modern restaurant brands.",
      },
    ],

    "ecommerce-development": [
      {
        title: "Fast Food Restaurant Website",
        href: "/en/projects/fast-food-restaurant-website/1006/",
        serviceType: "E-commerce / Ordering Experience",
        image: "/images/projects/quickbite.webp",
        industry: "Food & Beverage",
        summary:
          "A streamlined ordering-focused experience designed for modern restaurant brands.",
      },
    ],

    "ui-ux-design": [
      {
        title: "Apartment Hotel Website",
        href: "/en/projects/apartment-hotel-website-and-admin-panel/1001/",
        serviceType: "UI/UX Design",
        image: "/images/projects/monihomes_story.webp",
        industry: "Hospitality",
        summary:
          "User-focused hospitality interface designed to improve clarity, trust, and booking flow.",
      },
    ],

    "seo-optimization": [],

    "website-maintenance": [],
  },

  tr: {
    "web-development": [
      {
        title: "TA-Travel Website",
        href: "/tr/projects/ta-travel-web-sitesi/1007/",
        serviceType: "Kurumsal Web Sitesi Geliştirme",
        image: "/images/projects/ta-travel_home.webp",
        industry: "Turizm",
        summary:
          "Yönetim paneli, çok dilli yapı ve ölçeklenebilir mimari ile geliştirilen modern turizm platformu.",
      },
      {
        title: "Apartment Hotel Website",
        href: "/tr/projects/apart-otel-web-sitesi-ve-yonetici-paneli/1001/",
        serviceType: "Otel Web Sitesi Geliştirme",
        image: "/images/projects/monihomes_story.webp",
        industry: "Konaklama",
        summary:
          "Dönüşüm odaklı yapı ve pratik yönetim deneyimi sunan modern otel web sitesi.",
      },
      {
        title: "Fast Food Restaurant Website",
        href: "/tr/projects/fast-food-restoran-web-sitesi/1006/",
        serviceType: "Restoran Web Sitesi Geliştirme",
        image: "/images/projects/quickbite.webp",
        industry: "Yeme İçme",
        summary:
          "Modern restoran markaları için tasarlanmış hızlı ve mobil odaklı web deneyimi.",
      },
    ],

    "ecommerce-development": [
      {
        title: "Fast Food Restaurant Website",
        href: "/tr/projects/fast-food-restoran-web-sitesi/1006/",
        serviceType: "E-ticaret / Sipariş Deneyimi",
        image: "/images/projects/quickbite.webp",
        industry: "Yeme İçme",
        summary:
          "Sipariş akışına odaklanan modern ve dönüşüm odaklı bir dijital deneyim.",
      },
    ],

    "ui-ux-design": [
      {
        title: "Apartment Hotel Website",
        href: "/tr/projects/apart-otel-web-sitesi-ve-yonetici-paneli/1001/",
        serviceType: "UI/UX Tasarımı",
        image: "/images/projects/monihomes_story.webp",
        industry: "Konaklama",
        summary:
          "Rezervasyon akışını sadeleştiren ve güven oluşturan kullanıcı odaklı arayüz tasarımı.",
      },
    ],

    "seo-optimization": [],

    "website-maintenance": [],
  },

  ru: {
    "web-development": [
      {
        title: "TA-Travel Website",
        href: "/ru/projects/ta-travel-vebsayt/1007/",
        serviceType: "Разработка корпоративного сайта",
        image: "/images/projects/ta-travel_home.webp",
        industry: "Туризм",
        summary:
          "Современная туристическая платформа с админ-панелью, мультиязычной структурой и масштабируемой архитектурой.",
      },
      {
        title: "Apartment Hotel Website",
        href: "/ru/projects/veb-sayt-apart-otelya-i-administrativnaya-panel/1001/",
        serviceType: "Разработка сайта для отеля",
        image: "/images/projects/monihomes_story.webp",
        industry: "Гостиничный бизнес",
        summary:
          "Сайт для гостиничного бизнеса с упором на конверсию и удобную административную часть.",
      },
      {
        title: "Fast Food Restaurant Website",
        href: "/ru/projects/sayt-fastfud-restorana/1006/",
        serviceType: "Разработка сайта для ресторана",
        image: "/images/projects/quickbite.webp",
        industry: "Еда и напитки",
        summary:
          "Быстрый и mobile-first сайт, адаптированный под современные ресторанные бренды.",
      },
    ],

    "ecommerce-development": [
      {
        title: "Fast Food Restaurant Website",
        href: "/ru/projects/sayt-fastfud-restorana/1006/",
        serviceType: "E-commerce / Ordering Experience",
        image: "/images/projects/quickbite.webp",
        industry: "Еда и напитки",
        summary:
          "Цифровой опыт, ориентированный на быстрый заказ и удобство на мобильных устройствах.",
      },
    ],

    "ui-ux-design": [
      {
        title: "Apartment Hotel Website",
        href: "/ru/projects/veb-sayt-apart-otelya-i-administrativnaya-panel/1001/",
        serviceType: "UI/UX Design",
        image: "/images/projects/monihomes_story.webp",
        industry: "Гостиничный бизнес",
        summary:
          "Пользовательский интерфейс, спроектированный для ясности, доверия и лучшей конверсии.",
      },
    ],

    "seo-optimization": [],

    "website-maintenance": [],
  },
};

export function getCaseStudies(
  locale: Locale,
  slug: ServiceSlug
): CaseStudy[] {
  return caseStudiesByLocaleAndService[locale]?.[slug] ?? [];
}