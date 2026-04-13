import type { Locale } from "@/utils/buildBlogSlugMap";

export type BlogPostForMapping = {
  slug: string;
  locale: Locale;
  translationGroup: string;
};

export type BlogGroupSlugMapping = Record<
  string,
  Partial<Record<Locale, string>>
>;

export type BlogSlugToGroupMap = Record<string, string>;

export function buildBlogMappings(posts: BlogPostForMapping[]) {
  const blogGroupSlugMapping: BlogGroupSlugMapping = {};
  const blogSlugToGroupMap: BlogSlugToGroupMap = {};

  for (const post of posts) {
    const { slug, locale, translationGroup } = post;

    if (!slug || !locale || !translationGroup) continue;

    if (!blogGroupSlugMapping[translationGroup]) {
      blogGroupSlugMapping[translationGroup] = {};
    }

    blogGroupSlugMapping[translationGroup][locale] = slug;
    blogSlugToGroupMap[slug] = translationGroup;
  }

  return {
    blogGroupSlugMapping,
    blogSlugToGroupMap,
  };
}