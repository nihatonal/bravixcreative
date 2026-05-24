import type { Locale } from "@/i18n/routing";

export type ServiceSlug =
  | "web-development"
  | "ecommerce-development"
  | "ui-ux-design"
  | "seo-optimization"
  | "website-maintenance";

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceCardItem = {
  title: string;
  text: string;
};

export type RelatedInsights = {
  eyebrow: string;
  title: string;
  description?: string;
  slugs: string[];
};

export type ServicePageContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustStrip: string[];
  whatWeBuild: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceCardItem[];
  };
  whoItsFor?: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  benefits?: {
    eyebrow: string;
    title: string;
    description?: string;
    items: ServiceCardItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: {
      step: string;
      title: string;
      text: string;
    }[];
  };
  selectedWork?: {
    eyebrow: string;
    title: string;
    description: string;
    portfolioCta: string;
  };
  whyBravix: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  relatedInsights?: RelatedInsights;
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
};

export type ServicePagesBySlug = Partial<
  Record<ServiceSlug, ServicePageContent>
>;

export type ServicePagesByLocale = Record<Locale, ServicePagesBySlug>;
