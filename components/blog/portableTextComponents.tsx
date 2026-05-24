
import type { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import CodeBlock from "./CodeBlock";

function isExternalUrl(href: string) {
  return /^https?:\/\//i.test(href);
}

function getHeadingId(value: { _key?: string } | undefined, fallback: string) {
  return value?._key ? `heading-${value._key}` : fallback;
}

type PortableImageValue = {
  alt?: string;
  [key: string]: unknown;
};

type CodeBlockValue = {
  language?: string;
  code?: string;
};

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="my-4 text-[17px] md:text-[18px] leading-8 text-foreground/90">
        {children}
      </p>
    ),

    h2: ({ value, children }) => {
      const id = getHeadingId(value, "heading-h2");

      return (
        <h2
          id={id}
          className="mt-14 mb-5 scroll-mt-28 text-3xl font-semibold tracking-tight text-foreground"
        >
          {children}
        </h2>
      );
    },

    h3: ({ value, children }) => {
      const id = getHeadingId(value, "heading-h3");

      return (
        <h3
          id={id}
          className="mt-10 mb-4 scroll-mt-28 text-2xl font-semibold tracking-tight text-foreground"
        >
          {children}
        </h3>
      );
    },

    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-2xl border-l-4 border-primary bg-muted/40 px-6 py-4 italic text-foreground/90">
        {children}
      </blockquote>
    ),
  },

  types: {
    image: ({ value }) => {
      const imageValue = value as PortableImageValue;
      const imgUrl = urlFor(imageValue).width(1200).height(700).url();

      return (
        <figure className="my-6 overflow-hidden rounded-3xl">
          <Image
            src={imgUrl}
            alt={imageValue?.alt || "Blog image"}
            width={1200}
            height={700}
            unoptimized
            className="w-full rounded-3xl object-cover shadow-lg"
          />
          {imageValue?.alt ? (
            <figcaption className="pl-3 mt-3 text-sm text-muted-foreground">
              {imageValue.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },

    codeBlock: ({ value }) => {
      return <CodeBlock value={value as CodeBlockValue} />;
    },
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-6 list-disc space-y-3 pl-6 text-[17px] leading-8 text-foreground/90">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-3 pl-6 text-[17px] leading-8 text-foreground/90">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded-md bg-muted px-2 py-1 font-mono text-sm text-[#e66b19]">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const external = isExternalUrl(href);

      if (!external) {
        return (
          <Link
            href={href}
            className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          {children}
        </a>
      );
    },
  },
};