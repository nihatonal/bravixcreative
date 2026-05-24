"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const t = useTranslations("blog");

  useEffect(() => {
    if (!items.length) return;

    const handleScroll = () => {
      const offset = 140;

      const visibleItems = items
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;

          return {
            id: item.id,
            top: el.getBoundingClientRect().top,
          };
        })
        .filter(Boolean) as { id: string; top: number }[];

      if (!visibleItems.length) return;

      let currentId = visibleItems[0].id;

      for (const item of visibleItems) {
        if (item.top <= offset) {
          currentId = item.id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <nav>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {t("planTitle")}
      </h4>

      <ul className="space-y-1.5 border-l border-border">
        {items
          .filter((item) => item.level === 2)
          .map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();

                  const el = document.getElementById(item.id);
                  if (!el) return;

                  const y =
                    el.getBoundingClientRect().top + window.scrollY - 110;

                  window.scrollTo({
                    top: y,
                    behavior: "smooth",
                  });

                  setActiveId(item.id);
                }}
                className={`block border-l-2 py-1 text-sm transition-colors ${
                  item.level === 3 ? "pl-6" : "pl-4"
                } ${
                  activeId === item.id
                    ? "border-primary font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
