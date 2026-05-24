import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import TermsOfService from "@/components/legal/TermsOfService";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import CookiePolicy from "@/components/legal/CookiePolicy";
import PortfolioClient from "@/components/portfolio/PortfolioClient";

import { slugMap } from "@/utils/slugMap";
import { getPortfolioCardProjects } from "@/lib/portfolio";
import { isValidLocale, locales, type Locale } from "@/i18n/routing";
import {
  getProjectPath,
  getProjectsPath,
  isProjectSection,
  projectSections,
} from "@/lib/project-routes";

type ParamsType = {
  locale: string;
  slug: string;
};

const siteUrl = "https://bravixcreative.com";

const legalRouteMap: Record<string, keyof typeof slugMap> = {};

Object.entries(slugMap).forEach(([canonical, langs]) => {
  Object.entries(langs).forEach(([locale, slug]) => {
    legalRouteMap[`${locale}/${slug}`] = canonical as keyof typeof slugMap;
  });
});

export async function generateStaticParams() {
  const params: ParamsType[] = [];

  for (const key of Object.keys(legalRouteMap)) {
    const [locale, slug] = key.split("/");
    if (locale && slug) params.push({ locale, slug });
  }

  for (const locale of locales) {
    params.push({
      locale,
      slug: projectSections[locale],
    });
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ParamsType>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) return {};

  const typedLocale = locale as Locale;

  if (isProjectSection(typedLocale, slug)) {
    const t = await getTranslations({
      locale,
      namespace: "metadata.projects",
    });

    const canonical = `${siteUrl}${getProjectsPath(typedLocale)}`;

    return {
      title: t("title"),
      description: t("description"),
      alternates: {
        canonical,
        languages: {
          en: `${siteUrl}${getProjectsPath("en")}`,
          tr: `${siteUrl}${getProjectsPath("tr")}`,
          ru: `${siteUrl}${getProjectsPath("ru")}`,
          "x-default": `${siteUrl}${getProjectsPath("en")}`,
        },
      },
      openGraph: {
        title: t("title"),
        description: t("description"),
        url: canonical,
        type: "website",
        siteName: "Bravix Creative",
        images: [`${siteUrl}/og/default.jpg`],
      },
      twitter: {
        card: "summary_large_image",
        title: t("title"),
        description: t("description"),
        images: [`${siteUrl}/og/default.jpg`],
      },
    };
  }

  const pageKey = legalRouteMap[`${locale}/${slug}`];

  if (!pageKey) return {};

  const t = await getTranslations({ locale, namespace: pageKey });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<ParamsType>;
}) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) notFound();

  const typedLocale = locale as Locale;

  if (isProjectSection(typedLocale, slug)) {
    const t = await getTranslations({ locale, namespace: "portfolio" });
    const projects = getPortfolioCardProjects(locale);

    const filters = [
      { id: "all", name: t("all") },
      { id: "web-design", name: t("web-design") },
      { id: "ui-ux", name: t("ui-ux") },
      { id: "web-development", name: t("web-development") },
      { id: "web-application", name: t("web-application") },
    ];

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: t("title"),
      description: t("subtitle"),
      url: `${siteUrl}${getProjectsPath(typedLocale)}`,
      inLanguage: locale,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "CreativeWork",
          position: index + 1,
          name: project.title,
          description: project.description,
          url: `${siteUrl}${getProjectPath(typedLocale, project.slug)}`,
          image: `${siteUrl}${project.image}`,
        })),
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <PortfolioClient
          locale={locale}
          title={t("title")}
          subtitle={t("subtitle")}
          eyebrow={t("eyebrow")}
          viewProjectLabel={t("viewProject")}
          filters={filters}
          projects={projects}
        />
      </>
    );
  }

  const pageKey = legalRouteMap[`${locale}/${slug}`];

  if (!pageKey) notFound();

  switch (pageKey) {
    case "terms-of-service":
      return <TermsOfService />;
    case "privacy-policy":
      return <PrivacyPolicy />;
    case "cookie-policy":
      return <CookiePolicy />;
    default:
      notFound();
  }
}