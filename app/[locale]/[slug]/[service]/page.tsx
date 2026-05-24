import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";

import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import ContactSection from "@/components/home/ContactSection";
import ProjectDetailsWrapper from "@/components/ProjectDetailsWrapper";

import { isValidLocale, locales, type Locale } from "@/i18n/routing";

import { getServicePage } from "@/lib/services";
import { getCaseStudies } from "@/lib/service-data";
import {
  getServiceLanguageAlternates,
  getServicePath,
  resolveServiceSlugFromPath,
  serviceSlugs,
} from "@/lib/service-routes";

import {
  getProjectById,
  getProjectBySlug,
  getAllProjects,
} from "@/lib/projectService";

import type { Project } from "@/types/Project";
import type { Post } from "@/types/post";

import {
  getProjectIdBySlug,
  getProjectLanguageAlternates,
  getProjectPath,
  getProjectsPath,
  isProjectSection,
  projectSections,
} from "@/lib/project-routes";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
    service: string;
  }>;
};

type ApiResponse<T> = {
  ok: boolean;
  data: T;
  error?: string;
};

const siteUrl = "https://bravixcreative.com";

const fetchURL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://bravix-server.vercel.com";

async function fetchFromApi<T>(path: string): Promise<T> {
  const res = await fetch(`${fetchURL}${path}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`API request failed: ${path}`);
  }

  const json: ApiResponse<T> = await res.json();

  if (!json.ok) {
    throw new Error(json.error || `API response not ok: ${path}`);
  }

  return json.data;
}

function getProjectMetaTitle(project: Project) {
  return project.seoTitle?.trim() || project.title?.trim() || "Project";
}

function getProjectMetaDescription(project: Project) {
  return (
    project.seoDescription?.trim() ||
    project.shortDescription?.trim() ||
    project.description?.trim() ||
    "Project detail page."
  );
}

function getProjectOgImage(project: Project) {
  const imagePath = project.coverImage || project.images?.[0];
  return imagePath ? `${siteUrl}${imagePath}` : `${siteUrl}/default-og.jpg`;
}

export async function generateStaticParams() {
  const serviceParams = locales.flatMap((locale) =>
    serviceSlugs.map((service) => {
      const path = getServicePath(locale, service);
      const [, localeParam, slug, serviceParam] = path.split("/");

      return {
        locale: localeParam,
        slug,
        service: serviceParam,
      };
    })
  );

  const allProjects = getAllProjects();

  const projectParams = allProjects.flatMap((project) =>
    locales.flatMap((locale) => {
      const localizedProject = getProjectById(
        project.id.toString(),
        locale
      ) as Project | undefined;

      if (!localizedProject) return [];

      return [
        {
          locale,
          slug: projectSections[locale],
          service: localizedProject.slug,
        },
      ];
    })
  );

  return [...serviceParams, ...projectParams];
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, slug, service } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const typedLocale = locale as Locale;

  const serviceSlug = resolveServiceSlugFromPath(
    typedLocale,
    slug,
    service
  );

  if (serviceSlug) {
    const page = getServicePage(typedLocale, serviceSlug);

    if (!page) {
      return {};
    }

    const canonical = `${siteUrl}${getServicePath(
      typedLocale,
      serviceSlug
    )}`;

    return {
      title: page.meta.title,
      description: page.meta.description,
      alternates: {
        canonical,
        languages: getServiceLanguageAlternates(serviceSlug),
      },
      openGraph: {
        title: page.meta.title,
        description: page.meta.description,
        url: canonical,
        siteName: "Bravix Creative",
        type: "website",
        locale,
      },
      twitter: {
        card: "summary_large_image",
        title: page.meta.title,
        description: page.meta.description,
      },
    };
  }

  if (isProjectSection(typedLocale, slug)) {
    const project = getProjectBySlug(service, locale) as Project | undefined;

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

    const projectId = getProjectIdBySlug(typedLocale, service);

    if (!projectId || projectId !== project.id) {
      return {
        title: "Project Not Found",
        description: "The requested project could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const canonical = `${siteUrl}${getProjectPath(
      typedLocale,
      project.slug
    )}`;

    const metaTitle = getProjectMetaTitle(project);
    const metaDescription = getProjectMetaDescription(project);
    const ogImage = getProjectOgImage(project);

    return {
      title: metaTitle,
      description: metaDescription,
      keywords: project.keywords || [],
      alternates: {
        canonical,
        languages: getProjectLanguageAlternates(project.id),
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

  return {};
}

export default async function Page({ params }: Props) {
  const { locale, slug, service } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;

  const serviceSlug = resolveServiceSlugFromPath(
    typedLocale,
    slug,
    service
  );

  if (serviceSlug) {
    const page = getServicePage(typedLocale, serviceSlug);

    if (!page) {
      notFound();
    }

    const caseStudies = getCaseStudies(typedLocale, serviceSlug);
    const posts = await fetchFromApi<Post[]>(`/api/posts?lang=${locale}`);

    return (
      <>
        <ServiceDetailTemplate
          locale={typedLocale}
          t={page}
          caseStudies={caseStudies}
          relatedPosts={posts}
        />
        <ContactSection />
      </>
    );
  }

  if (isProjectSection(typedLocale, slug)) {
    const project = getProjectBySlug(service, locale) as Project | undefined;

    if (!project) {
      notFound();
    }

    const projectId = getProjectIdBySlug(typedLocale, service);

    if (!projectId || projectId !== project.id) {
      notFound();
    }

    const canonical = `${siteUrl}${getProjectPath(
      typedLocale,
      project.slug
    )}`;

    const metaTitle = getProjectMetaTitle(project);
    const metaDescription = getProjectMetaDescription(project);

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
          item: `${siteUrl}/${locale}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${siteUrl}${getProjectsPath(typedLocale)}`,
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

  notFound();
}