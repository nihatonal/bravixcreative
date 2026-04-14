import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Post } from "@/types/post";
import BlogCard from "@/components/blog/BlogCard";

type BlogPreviewProps = {
  locale: string;
};

type ApiResponse<T> = {
  ok: boolean;
  data: T;
  error?: string;
};

const baseUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://bravix-server.vercel.app";

async function fetchFromApi<T>(path: string): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`API request failed: ${path}`);
  }

  const json: ApiResponse<T> = await res.json();

  if (!json.ok) {
    throw new Error(json.error || `API response not ok: ${path}`);
  }

  return json.data;
}

export default async function BlogPreview({ locale }: BlogPreviewProps) {
  const t = await getTranslations({ locale, namespace: "blogPreview" });

  const latestPosts = await fetchFromApi<Post[]>(
    `/api/posts?lang=${locale}`
  );
  const posts = latestPosts.slice(0, 3);

  if (!posts.length) return null;

  return (
    <section className="bg-gray-50 px-2 pb-20 pt-10 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-1 text-sm font-medium text-bvs-mutedText shadow-sm backdrop-blur-sm">
            {t("eyebrow")}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-xl text-gray-600">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post._id}
              className={`animate-fade-up animation-delay-${(index + 1) * 100}`}
            >
              <BlogCard post={post} variant="default" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}