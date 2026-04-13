"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

interface PortableTextSpan {
  _type: "span";
  text?: string;
}

interface PortableTextBlock {
  _key?: string;
  _type: string;
  style?: string;
  children?: PortableTextSpan[];
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  body: PortableTextBlock[];
}

const TableOfContents = ({ body }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState("");
  const t = useTranslations("blog");

  const headings: Heading[] = useMemo(() => {
    if (!Array.isArray(body)) return [];

    return body
      .filter(
        (block): block is PortableTextBlock =>
          block?._type === "block" &&
          (block.style === "h2" || block.style === "h3") &&
          !!block._key
      )
      .map((block) => {
        const text = (block.children ?? [])
          .map((child) => child.text ?? "")
          .join("")
          .trim();

        return {
          id: `heading-${block._key}`,
          text,
          level: block.style === "h2" ? 2 : 3,
        };
      })
      .filter((heading) => heading.text.length > 0);
  }, [body]);

  useEffect(() => {
    if (!headings.length) return;

    const handleScroll = () => {
      const offset = 140;

      const visibleHeadings = headings
        .map((heading) => {
          const el = document.getElementById(heading.id);
          if (!el) return null;

          return {
            id: heading.id,
            top: el.getBoundingClientRect().top,
          };
        })
        .filter(Boolean) as { id: string; top: number }[];

      if (!visibleHeadings.length) return;

      let currentId = visibleHeadings[0].id;

      for (const item of visibleHeadings) {
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
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {t("planTitle")}
      </h4>

      <ul className="space-y-1.5 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();

                const el = document.getElementById(heading.id);
                if (!el) return;

                const y = el.getBoundingClientRect().top + window.scrollY - 110;

                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });

                setActiveId(heading.id);
              }}
              className={`block border-l-2 py-1 text-sm transition-colors ${
                heading.level === 3 ? "pl-6" : "pl-4"
              } ${
                activeId === heading.id
                  ? "border-primary font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;