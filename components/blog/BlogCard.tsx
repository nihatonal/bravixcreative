import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { Post } from "@/types/post";
import { urlFor } from "@/sanity/lib/image";

interface BlogCardProps {
  post: Post;
  index?: number;
  variant?: "default" | "large" | "compact";
}

const BlogCard = ({ post, index = 0, variant }: BlogCardProps) => {
  const resolvedVariant = variant ?? (index === 0 ? "large" : "compact");

  const imageUrl = post.image
    ? urlFor(post.image)
        .width(resolvedVariant === "large" ? 1200 : 400)
        .height(resolvedVariant === "large" ? 800 : 300)
        .url()
    : "";

  const category = post.category?.title || "Uncategorized";
  const authorName = post.author?.name || "Unknown author";
  const readingTime = post.readingTime || 0;
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "No date";

  if (resolvedVariant === "compact") {
    return (
      //href={`/${post.lang ?? "en"}/blog/${post.slug}`}
      <Link href={`/${post.lang ?? "en"}/blog/${post.slug}`} className="group flex gap-4">
        <div className="image-zoom h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.image?.alt || post.title}
              width={64}
              height={64}
              unoptimized
              className="h-full w-full rounded-md object-cover"
            />
          ) : (
            <div className="h-full w-full rounded-md bg-muted" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="line-clamp-2 font-serif text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {readingTime} min read
          </p>
        </div>
      </Link>
    );
  }

  if (resolvedVariant === "large") {
    return (
      <Link href={`/${post.lang ?? "en"}/blog/${post.slug}`} className="group block">
        <article className="card-elevated overflow-hidden rounded-lg bg-card">
          <div className="image-zoom aspect-[16/10] overflow-hidden">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={post.image?.alt || post.title}
                width={1200}
                height={800}
                unoptimized
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-muted" />
            )}
          </div>

          <div className="p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {category}
            </span>

            <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-card-foreground transition-colors group-hover:text-primary md:text-3xl">
              {post.title}
            </h2>

            {post.excerpt && (
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            )}

            <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{authorName}</span>
              <span>·</span>
              <span>{publishedDate}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readingTime} min
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/${post.lang ?? "en"}/blog/${post.slug}`} className="group block">
      <article className="card-elevated overflow-hidden rounded-lg bg-card">
        <div className="image-zoom aspect-[16/10] overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.image?.alt || post.title}
              width={800}
              height={500}
              unoptimized
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-muted" />
          )}
        </div>

        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {category}
          </span>

          <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-card-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
          )}

          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{authorName}</span>
            <span>·</span>
            <span>{publishedDate}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readingTime} min
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;