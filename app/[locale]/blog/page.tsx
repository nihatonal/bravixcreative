import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import type { Post } from '@/types/post';
import {setRequestLocale} from 'next-intl/server';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type ApiResponse<T> = {
  ok: boolean;
  data: T;
  error?: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://bravix-server.vercel.app';

async function fetchFromApi<T>(path: string): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    cache: 'force-cache',
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

export async function generateMetadata(
  { params }: PageProps,
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.blog' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: {
        tr: `${baseUrl}/tr/blog`,
        en: `${baseUrl}/en/blog`,
        ru: `${baseUrl}/ru/blog`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/blog`,
      type: 'website',
      images: [`${baseUrl}/og/blog.jpg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/og/blog.jpg`],
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'blog' });

  const [posts, featured, latest, popular] = await Promise.all([
    (await fetchFromApi<Post[]>(`/api/posts?lang=${locale}`)),
    fetchFromApi<Post[]>(`/api/featured-blogs?lang=${locale}`),
    fetchFromApi<Post[]>(`/api/latest-blogs?lang=${locale}`),
    fetchFromApi<Post[]>(`/api/popular-blogs?lang=${locale}`),
  ]);



  const categoryList: string[] = Array.from(
    new Set(
      posts
        .map((post: Post) => post.category?.title)
        .filter((title: string | undefined): title is string => !!title)
    )
  );

  const tagList: string[] = Array.from(
    new Set(
      posts
        .flatMap((post: Post) => post.tags ?? [])
        .map((tag: { title?: string }) => tag.title)
        .filter((title: string | undefined): title is string => !!title)
    )
  );

  if (posts.length === 0) {
    return (
      <div className="h-[480px] flex items-center justify-center">
        Blog yok
      </div>
    );
  }

  return (
    <main className="relative mx-auto pt-16">
      <BlogHeader posts={posts} />
      {featured[0] ? <BlogHero post={featured[0]} /> : null}
      <section className="editorial-container py-16 md:py-24">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="flex-1 min-w-0">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                {t('latestArticles')}
              </h2>
              <div className="ml-6 h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {latest[0] && (
                <div className="md:col-span-2 animate-fade-up">
                  <BlogCard post={latest[0]} index={0} />
                </div>
              )}

              {latest.slice(1).map((post: Post, i: number) => (
                <div
                  key={post._id}
                  className={`animate-fade-up animation-delay-${(i + 1) * 100}`}
                >
                  <BlogCard post={post} variant="default" />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex-shrink-0 lg:w-80 xl:w-96">
            <BlogSidebar
              popular={popular}
              latest={latest}
              categories={categoryList}
              tags={tagList}
            />
          </div>
        </div>
      </section>
    </main >
  );
}