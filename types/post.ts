import type { Locale } from "@/utils/generated/blogSlugMapping.generated";
import type { TypedObject } from "@portabletext/types";
export type Post = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  readingTime?: number;
  views?: number;
  isLatest?: boolean;
  featured?: boolean;
  body?: TypedObject[];
  image?: {
    alt?: string;
    asset?: {
      _ref?: string;
    };
  };
  lang: Locale;
  translationGroup?: string;
  author?: {
    name?: string;
  };
  category?: {
    title?: string;
    slug?: string;
  };
  tags?: {
    title?: string;
    slug?: string;
  }[];
};