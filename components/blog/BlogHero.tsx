import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/post";
import { Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface BlogHeroProps {
  post: Post;
}

const BlogHero = ({ post }: BlogHeroProps) => {
  const t = useTranslations("blog");
  const imageUrl = post.image ? urlFor(post.image).width(1920).height(1080).url() : "";

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "75vh" }}>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="editorial-container relative flex h-full items-end pb-16 pt-40">
        <div className="max-w-3xl animate-fade-up">
          <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            {post.category?.title ?? "General"}
          </span>

          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {"B&C"}
              </div>

              <div>
                <p className="text-sm font-medium text-primary-foreground">
                  {post.author?.name ?? "Bravix"}
                </p>
                {/* <p className="text-xs text-primary-foreground/60">{post.author.role}</p> */}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-primary-foreground/70">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readingTime} {t("read")}</span>
            </div>

            <Link
              href={`/${post.lang ?? "en"}/blog/${post.slug}`}
              className="group ml-auto flex items-center gap-2 rounded-full bg-primary-foreground/10 px-6 py-3 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              {t("readArticle")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;