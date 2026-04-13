'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import type { Post } from '@/types/post';


type BlogHeaderProps = {
  posts: Post[];
};

const BlogHeader = ({ posts }: BlogHeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (query.trim().length <= 1) return [];

    const lowerQuery = query.toLowerCase();

    return posts.filter((p) => {
      const titleMatch = p.title.toLowerCase().includes(lowerQuery);
      const excerptMatch = p.excerpt?.toLowerCase().includes(lowerQuery);
      const tagsMatch = p.tags?.some((t) =>
        t.title?.toLowerCase().includes(lowerQuery)
      );

      return titleMatch || excerptMatch || tagsMatch;
    });
  }, [query, posts]);

  return (
    <header className="fixed top-18 -right-4 md:right-2 min-w-72 z-[99]">
      <nav className="editorial-container flex h-16 items-center justify-end">

        <div className="flex items-center gap-6">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors bg-secondary hover:text-foreground"
            aria-label="Toggle search"
            type="button"
          >
            {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="border-t border-border bg-background">
          <div className="editorial-container py-4">
            <input
              type="search"
              placeholder="Search articles, topics, tags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="newsletter-input"
              autoFocus
            />

            {results.length > 0 && (
              <div className="mt-3 space-y-2">
                {results.slice(0, 5).map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setQuery('');
                    }}
                    className="block rounded-md p-3 transition-colors hover:bg-secondary"
                  >
                    <p className="font-serif text-lg font-semibold text-foreground">
                      {post.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {post.excerpt?.slice(0, 100) || 'No description'}...
                    </p>
                  </Link>
                ))}
              </div>
            )}

            {query.length > 1 && results.length === 0 && (
              <p className="mt-3 text-sm text-muted-foreground">
                No articles found for &quot;{query}&quot;
              </p>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;