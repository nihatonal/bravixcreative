import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { portableTextComponents } from "./portableTextComponents";
import { urlFor } from "@/sanity/lib/image";
import BlogCard from "./BlogCard";
import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import { useTranslations } from "next-intl";
const SITE_URL = "https://www.bravixcreative.com";
import BlogViewTracker from "@/components/BlogViewTracker";
import type { Post } from "@/types/post";

function formatDate(date: string, locale = "tr-TR") {
    return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}

type Props = {
    post: Post;
    popularBlogs: Post[];
    locale: string;
};


export default function BlogPost({
    post,
    popularBlogs,
    locale,
}: Props) {
    const imageUrl = post.image
        ? urlFor(post.image).width(1400).height(800).url()
        : null;

    const canonicalUrl = `${SITE_URL}/${locale}/blog/${post.slug}`;

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt || post.title,
        image: imageUrl ? [imageUrl] : [],
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
            "@type": "Person",
            name: post.author?.name || "Bravix",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
        },
        publisher: {
            "@type": "Organization",
            name: "Bravix",
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.png`,
            },
        },
    };

    const dateLocale =
        post.lang === "en" ? "en-US" : post.lang === "ru" ? "ru-RU" : "tr-TR";


    const t = useTranslations("blog");
    const nav = useTranslations("nav");
    const navItems = [
        { id: "home", label: nav("home") },
        { id: "blog", label: nav("blog") },
    ];

    return (
        <main className="mt-10 bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <ReadingProgress />
            <section className="bg-gradient-to-b from-muted/40 to-background">
                <div className="container mx-auto px-4 py-12 md:py-16">
                    <div className="container mx-auto max-w-7xl">
                        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            <Link href={`/${locale}`} className="transition-colors hover:text-foreground">
                                {navItems[0].label}
                            </Link>
                            <span>/</span>
                            <Link href={`/${locale}/blog`} className="transition-colors hover:text-foreground">
                                {navItems[1].label}
                            </Link>
                            <span>/</span>
                            <span className="text-foreground">{post.title}</span>
                        </nav>

                        <div className="max-w-7xl">
                            {post.category ? (
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                                        {post.category.title}
                                    </span>
                                </div>
                            ) : null}

                            <h1 className="max-w-7xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.1]">
                                {post.title}
                            </h1>

                            {post.excerpt ? (
                                <p className="mt-5 max-w-7xl text-lg leading-8 text-muted-foreground">
                                    {post.excerpt}
                                </p>
                            ) : null}

                            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <span>{formatDate(post.publishedAt, dateLocale)}</span>
                                {post.author?.name ? <span>• {post.author.name}</span> : null}
                                {post.readingTime ? <span>• {post.readingTime} {t("read")}</span> : null}
                                {typeof post.views === "number" ? (
                                    <span>• {<BlogViewTracker
                                        slug={post.slug}
                                        initialViews={post.views || 0}
                                    />} {t("views")}</span>
                                ) : null}
                            </div>
                        </div>

                        {imageUrl && (
                            <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-xl">
                                <Image
                                    src={imageUrl}
                                    alt={post.image?.alt || post.title}
                                    width={1400}
                                    height={800}
                                    priority
                                    className="h-auto w-full object-cover"
                                    unoptimized
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 md:pb-10">
                <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[minmax(0,1fr)_256px]">
                    <article className="min-w-0">
                        <div className="px-6 py-8 md:px-10 md:py-10">
                            <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-28">
                                <PortableText value={post.body ?? []} components={portableTextComponents} />
                            </div>
                        </div>

                        <div className="reading-container border-t border-border pt-8">
                            <div className="flex flex-wrap gap-2">
                                {post.tags?.map((tag) => (
                                    <span
                                        key={tag.slug || tag.title}
                                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                                    >
                                        {tag.title}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {popularBlogs.length > 0 && (
                            <section className="mt-20">
                                <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">
                                    {t("related")}
                                </h2>
                                <div className="grid gap-8 md:grid-cols-2">
                                    {popularBlogs.map((relatedPost) => (
                                        <BlogCard
                                            key={relatedPost._id}
                                            post={relatedPost}
                                            variant="default"
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>

                    <aside >
                        <nav className="sticky top-24 self-start">
                            <TableOfContents body={post.body ?? []} />
                        </nav>
                    </aside>
                </div>
            </section>
        </main>
    );
}