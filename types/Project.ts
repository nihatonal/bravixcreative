export interface ProjectTestimonial {
  content: string;
  author: string;
  company?: string;
}

export interface ProjectAdminPanel {
  title?: string;
  content: string;
}

export interface ProjectFaqItem {
  question: string;
  answer: string;
}

export interface ProjectSeo {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Project {
  id: string;
  slug: string;

  // UI
  title: string;
  shortDescription?: string;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];

  // Business / classification
  client: string;
  type: string;
  category: string;
  industry?: string;
  serviceType?: string;

  // Core content
  description: string;
  challenge?: string;
  solution?: string;
  process?: string;
  results?: string[];

  // Conversion / trust
  testimonial?: ProjectTestimonial;
  adminPanel?: ProjectAdminPanel;
  faq?: ProjectFaqItem[];

  // Media / links
  images: string[];
  coverImage?: string;
  liveUrl?: string;
  viewLiveSite?: string;

  // Tech
  technologies: string[];

  // Optional SEO enhancements
  noindex?: boolean;
  publishedAt?: string;
  updatedAt?: string;
}