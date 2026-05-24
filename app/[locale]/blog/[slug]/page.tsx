import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPost from "@/components/blog/BlogPost";
import type { Post } from "@/types/post";
import { blogSlugMapping, blogSlugToGroupMap } from "@/utils/generated/blogSlugMapping.generated";
import type { Locale } from "@/utils/generated/blogSlugMapping.generated";
import { setRequestLocale } from "next-intl/server";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bravixcreative.com";
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://bravix-server.vercel.app";

type PageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

type ApiResponse<T> = {
  ok: boolean;
  data: T;
  error?: string;
};

async function fetchFromApi<T>(path: string): Promise<T> {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    cache: "force-cache",
  });

  const text = await res.text();

  let json: ApiResponse<T> | null = null;

  try {
    json = JSON.parse(text);
  } catch {
    // noop
  }

  if (!res.ok) {
    throw new Error(
      json?.error ||
      `API request failed: ${path} | status: ${res.status} | body: ${text}`
    );
  }

  if (!json) {
    throw new Error(`API response is not valid JSON: ${path} | body: ${text}`);
  }

  if (!json.ok) {
    throw new Error(json.error || `API response not ok: ${path}`);
  }

  return json.data;
}

async function getPost(slug: string, locale: Locale) {
  return fetchFromApi<Post | null>(`/api/post/${slug}?lang=${locale}`).catch(
    () => null
  );
}

async function getPopularBlogs(locale: Locale) {
  return fetchFromApi<Post[]>(`/api/popular-blogs?lang=${locale}`).catch(
    () => []
  );
}

export async function generateStaticParams() {
  const params: Array<{ locale: Locale; slug: string }> = [];

  for (const translations of Object.values(blogSlugMapping)) {
    for (const [locale, slug] of Object.entries(translations)) {
      if (slug && (locale === "tr" || locale === "en" || locale === "ru")) {
        params.push({
          locale: locale as Locale,
          slug,
        });
      }
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;

  const post = await getPost(slug, locale);

  if (!post) {
    return {
      title: "Blog Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `${SITE_URL}/${locale}/blog/${post.slug}`;

  // 🔥 slug → group bul
  const group = blogSlugToGroupMap[slug];

  // 🔥 group → tüm dil slug’ları
  const translations = blogSlugMapping[group] || {};

  const languages: Record<string, string> = {};

  for (const [lang, translatedSlug] of Object.entries(translations)) {
    if (!translatedSlug) continue;

    languages[lang] = `${SITE_URL}/${lang}/blog/${translatedSlug}`;
  }

  return {
    title: `${post.title} | Blog`,
    description:
      post.excerpt ||
      "Read our latest insights, destination tips, and professional blog content.",

    alternates: {
      canonical, // ✅ self canonical
      languages, // ✅ hreflang
    },

    openGraph: {
      title: `${post.title} | Blog`,
      description:
        post.excerpt ||
        "Read our latest insights, destination tips, and professional blog content.",
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
    },

    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Blog`,
      description:
        post.excerpt ||
        "Read our latest insights, destination tips, and professional blog content.",
    },
  };
}
export default async function BlogDetailPage({ params }: PageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const [post, popularBlogs] = await Promise.all([
    getPost(slug, locale),
    getPopularBlogs(locale),
  ]);

  if (!post) return notFound();

  return <BlogPost post={post} popularBlogs={popularBlogs} locale={locale} />;
}