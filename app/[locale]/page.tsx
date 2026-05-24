import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services_";
import BlogPreview from "@/components/home/BlogPreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import HomeScrollHandler from "./HomeScrollHandler";
import CTABanner from "@/components/CTABanner";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import ContactSection from "@/components/home/ContactSection";

export async function generateStaticParams() {
  return ["en", "tr", "ru"].map((locale) => ({ locale }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  const baseUrl = "https://bravixcreative.com";

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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HomeScrollHandler />
      <Hero />
      <About />
      {await Services()}
      {await PortfolioPreview({ locale })}
      {await BlogPreview({ locale })}
      {await Pricing()}
      <CTABanner />
      <Skills />
      {await Testimonials()}
      <ContactSection />
    </>
  );
}