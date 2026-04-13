import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogPost from "@/components/blog/BlogPost";
import type { Post } from "@/types/post";
import type { Locale } from "@/utils/generated/blogSlugMapping.generated";
import { setRequestLocale } from "next-intl/server";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bravixcreative.com";
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
  } catch {}

  if (!res.ok) {
    throw new Error(
      json?.error || `API request failed: ${path} | status: ${res.status} | body: ${text}`
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

export async function generateStaticParams() {
  const locales: Locale[] = ["tr", "en", "ru"];

  const results = await Promise.all(
    locales.map(async (locale) => {
      const slugs = await fetchFromApi<{ slug: string }[]>(
        `/api/post-slugs?lang=${locale}`
      );

      return slugs.map((item) => ({
        locale,
        slug: item.slug,
      }));
    })
  );

  return results.flat();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;

  const post = await fetchFromApi<Post | null>(
    `/api/post/${slug}?lang=${locale}`
  ).catch(() => null);

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

  return {
    title: `${post.title} | Blog`,
    description:
      post.excerpt ||
      "Read our latest insights, destination tips, and professional blog content.",
    alternates: {
      canonical,
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
  
  const post = await fetchFromApi<Post | null>(
    `/api/post/${slug}?lang=${locale}`
  ).catch(() => null);

  if (!post) return notFound();

  const popularBlogs = await fetchFromApi<Post[]>(
    `/api/popular-blogs?lang=${locale}`
  ).catch(() => []);

  return (
    <BlogPost
      post={post}
      popularBlogs={popularBlogs}
      locale={locale}
    />
  );
}