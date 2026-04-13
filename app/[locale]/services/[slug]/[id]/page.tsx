import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServices, getServiceById } from "@/lib/serviceUtil";
import ServiceDetailsWrapper from "@/components/ServiceDetailsWrapper";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string; id: string }>;
};


const siteUrl = "https://bravixcreative.com";
const langs = ["tr", "en", "ru"] as const;

function isValidLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export async function generateStaticParams(): Promise<
  Array<{ locale: string; slug: string; id: string }>
> {
  const services = getAllServices();
  const paths: Array<{ locale: string; slug: string; id: string }> = [];

  services.forEach((service) => {
    langs.forEach((lng) => {
      paths.push({
        locale: lng,
        slug: service.slug,
        id: String(service.id),
      });
    });
  });

  return paths;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, id } = await params;

  if (!isValidLocale(locale)) {
    return { title: "Not Found" };
  }

  const service = getServiceById(id, locale);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const canonical = `${siteUrl}/${locale}/services/${service.slug}/${id}/`;

  const alternatesEntries = langs
    .map((lng) => {
      const svc = getServiceById(id, lng);
      if (!svc) return null;
      return [lng, `${siteUrl}/${lng}/services/${svc.slug}/${id}/`] as const;
    })
    .filter(Boolean) as readonly (readonly [string, string])[];

  const alternates = Object.fromEntries(alternatesEntries);

  return {
    title: service.meta?.title ?? `${service.title} | Bravix Creative`,
    description: service.meta?.description ?? service.description,
    alternates: {
      canonical,
      languages: {
        ...alternates,
        "x-default": alternates["en"] ?? canonical,
      },
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, id, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const service = getServiceById(id, locale);

  if (!service) {
    notFound();
  }

  if (service.slug !== slug) {
    notFound();
  }

  return <ServiceDetailsWrapper service={service} />;
}