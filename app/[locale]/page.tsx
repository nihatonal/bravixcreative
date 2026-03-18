import type { Metadata, ResolvingMetadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomePageClient from "./HomePageClient";

export async function generateStaticParams() {
  return ['en', 'tr', 'ru'].map((locale) => ({ locale }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  const baseUrl = "https://www.bravixcreative.com";
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}`,
      type: "website",
      images: [`${baseUrl}/preview.jpg`, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${baseUrl}/preview.jpg`],
    },
  };
}


export default function HomePage() {
  return <HomePageClient />;
}
