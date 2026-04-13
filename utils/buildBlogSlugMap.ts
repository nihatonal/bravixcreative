export type Locale = "tr" | "en" | "ru";

export type BlogTranslationItem = {
  lang: Locale;
  slug: string;
  title?: string;
};

export type BlogSlugMap = Partial<Record<Locale, string>>;

export function buildBlogSlugMap(
  items: BlogTranslationItem[] = []
): BlogSlugMap {
  return items.reduce<BlogSlugMap>((acc, item) => {
    if (item.lang && item.slug) {
      acc[item.lang] = item.slug;
    }
    return acc;
  }, {});
}