'use client'
import { useState } from "react";
import BlogCard from "./BlogCard";
import { Send } from "lucide-react";
import { Post } from "@/types/post";
import { useTranslations } from "next-intl";

type BlogSidebarProps = {
  popular: Post[];
  latest: Post[];
  categories: string[];
  tags: string[];
};
const BlogSidebar = ({ popular, latest, categories, tags }: BlogSidebarProps) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const t = useTranslations("blog");
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <aside className="space-y-10">
      {/* Newsletter */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="font-serif text-xl font-bold text-card-foreground">{t("cta_title")}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {t("cta_text")}
        </p>
        {subscribed ? (
          <p className="mt-4 text-sm font-medium text-primary">Thank you for subscribing ✓</p>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Send className="h-3.5 w-3.5" />
              {t("cta_button")}
            </button>
          </form>
        )}
      </div>

      {/* Popular Posts */}
      <div>
        <h3 className="font-serif text-lg font-bold text-foreground mb-4">{t("popular")}</h3>
        <div className="space-y-4">
          {popular.map((post) => (
            <BlogCard key={post._id} post={post} variant="compact" />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-serif text-lg font-bold text-foreground mb-4">{t("categories")}</h3>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              className="block w-full text-left rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-serif text-lg font-bold text-foreground mb-4">{t("topics")}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Latest */}
      <div>
        <h3 className="font-serif text-lg font-bold text-foreground mb-4">{t("latest")}</h3>
        <div className="space-y-4">
          {latest.slice(0, 3).map((post) => (
            <BlogCard key={post._id} post={post} variant="compact" />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
