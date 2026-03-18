import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import TermsOfService from "@/components/legal/TermsOfService";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import CookiePolicy from "@/components/legal/CookiePolicy";
import { slugMap } from "@/utils/slugMap";

type ParamsType = { locale: string; slug: string };

const routeMap: Record<string, keyof typeof slugMap> = {};

Object.entries(slugMap).forEach(([canonical, langs]) => {
  Object.entries(langs).forEach(([locale, slug]) => {
    routeMap[`${locale}/${slug}`] = canonical as keyof typeof slugMap;
  });
});

export async function generateStaticParams() {
  const slugs = [];

  for (const key of Object.keys(routeMap)) {
    const [locale, slug] = key.split("/");
    if (locale && slug) slugs.push({ locale, slug });
  }

  return slugs;
}

export async function generateMetadata({ params }: { params: Promise<ParamsType> }) {
  try {
    const { locale, slug } = await params;
    const pageKey = routeMap[`${locale}/${slug}`];
    if (!pageKey) return notFound();

    const t = await getTranslations({ locale, namespace: pageKey });

    return {
      title: t("meta.title"),
      description: t("meta.description"),
    };
  } catch (error) {
    console.error("generateMetadata error:", error);
    throw error;  // Hatanın görünmesi için
  }
}

export default async function LegalPage({ params }: { params: Promise<ParamsType> }) {
  try {
    const { locale, slug } = await params;

    const pageKey = routeMap[`${locale}/${slug}`];
    if (!pageKey) {
      notFound();
      return null;
    }

    switch (pageKey) {
      case "terms-of-service":
        return <TermsOfService />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "cookie-policy":
        return <CookiePolicy />;
      default:
        notFound();
        return null;
    }
  } catch (error) {
    console.error("LegalPage error:", error);
    throw error;
  }
}
