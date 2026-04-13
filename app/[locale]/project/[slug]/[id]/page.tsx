import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { getProjectById, getAllProjects } from "@/lib/projectService";
import ProjectDetailsWrapper from "@/components/ProjectDetailsWrapper";
import type { Project } from "@/types/Project";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
    id: string;
  }>;
};

const siteUrl = "https://www.bravixcreative.com";
const langs = ["tr", "en", "ru"] as const;

export const dynamicParams = false;

function getMetaTitle(project: Project) {
  return project.seoTitle?.trim() || project.title?.trim() || "Project";
}

function getMetaDescription(project: Project) {
  return (
    project.seoDescription?.trim() ||
    project.shortDescription?.trim() ||
    project.description?.trim() ||
    "Project detail page."
  );
}

function getOgImage(project: Project) {
  const imagePath = project.coverImage || project.images?.[0];
  return imagePath ? `${siteUrl}${imagePath}` : `${siteUrl}/default-og.jpg`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const project = getProjectById(id, locale) as Project | undefined;

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `${siteUrl}/${locale}/project/${project.slug}/${id}`;
  const metaTitle = getMetaTitle(project);
  const metaDescription = getMetaDescription(project);
  const ogImage = getOgImage(project);

  const alternatesEntries = langs
    .map((lng) => {
      const localizedProject = getProjectById(id, lng) as Project | undefined;
      if (!localizedProject) return null;

      return [lng, `${siteUrl}/${lng}/project/${localizedProject.slug}/${id}`];
    })
    .filter(Boolean) as [string, string][];

  const alternates = Object.fromEntries(alternatesEntries);

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: project.keywords || [],
    alternates: {
      canonical,
      languages: {
        ...alternates,
        "x-default": alternates.en || canonical,
      },
    },
    robots: project.noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: "Bravix Creative",
      type: "article",
      locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title || metaTitle,
        },
      ],
      publishedTime: project.publishedAt,
      modifiedTime: project.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
      creator: "@bravixcreative",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, id, slug } = await params;
  const project = getProjectById(id, locale) as Project | undefined;

  if (!project) {
    notFound();
  }

  if (project.slug !== slug) {
    notFound();
  }

  const canonical = `${siteUrl}/${locale}/project/${project.slug}/${id}`;
  const metaTitle = getMetaTitle(project);
  const metaDescription = getMetaDescription(project);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: metaTitle,
    description: metaDescription,
    url: canonical,
    image: (project.images || []).map((img) => `${siteUrl}${img}`),
    inLanguage: locale,
    keywords: project.keywords || [],
    genre: project.category || "Project Case Study",
    datePublished: project.publishedAt,
    dateModified: project.updatedAt,
    author: {
      "@type": "Organization",
      name: "Bravix Creative",
      url: siteUrl,
    },
    creator: {
      "@type": "Organization",
      name: "Bravix Creative",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Bravix Creative",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    about: [
      project.client,
      project.category,
      project.type,
      project.industry,
      project.serviceType,
    ].filter(Boolean),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${siteUrl}/${locale}#portfolio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: canonical,
      },
    ],
  };

  const faqJsonLd =
    Array.isArray(project.faq) && project.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: project.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <ProjectDetailsWrapper project={project} locale={locale} />

      <Script
        id={`project-schema-${project.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Script
        id={`project-breadcrumb-schema-${project.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {faqJsonLd && (
        <Script
          id={`project-faq-schema-${project.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      )}
    </>
  );
}

export async function generateStaticParams() {
  const allProjects = getAllProjects();

  return allProjects.flatMap((project) =>
    langs.flatMap((locale) => {
      const localizedProject = getProjectById(
        project.id.toString(),
        locale
      ) as Project | undefined;

      if (!localizedProject) return [];

      return [
        {
          locale,
          slug: localizedProject.slug,
          id: project.id.toString(),
        },
      ];
    })
  );
}