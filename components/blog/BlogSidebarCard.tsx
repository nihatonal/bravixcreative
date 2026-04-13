import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";


type BlogImage = {
    alt?: string;
    asset?: {
        _ref?: string;
        _type?: string;
    };
    _type?: string;
};

type BlogCardPost = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    excerpt?: string;
    readingTime?: number;
    views?: number;
    image?: BlogImage;
    categories?: {
        title?: string;
        slug?: string;
    }[];
};

function formatDate(date: string, locale = "tr-TR") {
    return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}

type Props = {
    title: string;
    posts: BlogCardPost[];
    locale: string;
    lang?: "tr" | "en" | "ru";
};

export default function BlogSidebarCard({
    title,
    posts,
    locale,
    lang = "tr",
}: Props) {
    const dateLocale =
        lang === "en" ? "en-US" : lang === "ru" ? "ru-RU" : "tr-TR";

    return (
        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold tracking-tight text-foreground">
                {title}
            </h2>

            <div className="space-y-5">
                {posts.map((post) => {
                    const imageUrl = post.image
                        ? urlFor(post.image).width(400).height(260).url()
                        : null;

                    return (
                        <article key={post._id} className="group">
                            <Link href={`/${locale}/blog/${post.slug}`} className="block">
                                <div className="flex gap-4">
                                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-muted">
                                        {imageUrl && (
                                            <Image
                                                src={imageUrl}
                                                alt={post.image?.alt || post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                unoptimized
                                            />
                                        )}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-foreground transition-colors group-hover:text-primary">
                                            {post.title}
                                        </h3>

                                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                            <span>{formatDate(post.publishedAt, dateLocale)}</span>
                                            {post.readingTime ? <span>• {post.readingTime} dk</span> : null}
                                            {typeof post.views === "number" ? (
                                                <span>• {post.views} görüntülenme</span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}