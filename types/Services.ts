import { ReactNode } from "react";
export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  cta: string;
  icon?: ReactNode;
  process?: string[];
  technologies?: string[];
  detailedDescription?: string;
  benefits?: string[];
  useCases?: string[];
  faq?: { question: string; answer: string }[];
  relatedProjects?: { title: string; url: string }[];
  blogPosts?: { title: string; url: string }[];
  idealFor?: string[];
  pricingModel?: string;
  commonMistakes?: string[];
  performanceMetrics?: string[];
  heroImageUrl?: string;
  keywords?: string[];
  meta?: {
    title: string;
    description: string;
  };
}
