import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomePageClient from "./HomePageClient";

export async function generateStaticParams() {
  return ['en', 'tr', 'ru'].map((locale) => ({ locale }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  const baseUrl = "https://www.bravixcreative.com";

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}`,
      type: "website",
      images: [`${baseUrl}/og/default.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${baseUrl}/og/default.jpg`],
    },
  };
}


export default function HomePage() {
  return <HomePageClient />;
}
