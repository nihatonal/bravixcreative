import { notFound } from "next/navigation";
import WebDevelopmentPage from "@/components/services/WebDevelopmentPage";
import { getDictionary, isValidLocale, locales, type Locale } from "@/i18n/routing";
import { getCaseStudies } from "@/lib/service-data";

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

export async function generateStaticParams() {
    return locales.map((locale) => ({
        locale,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;

    if (!isValidLocale(locale)) {
        return {};
    }

    const dict = getDictionary(locale);
    const t = dict.webDevelopment;

    const path = `/${locale}/services/web-development`;
    const baseUrl = "https://www.bravixcreative.com";

    return {
        title: t.meta.title,
        description: t.meta.description,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                en: `${baseUrl}/en/services/web-development`,
                tr: `${baseUrl}/tr/services/web-development`,
                ru: `${baseUrl}/ru/services/web-development`,
                "x-default": `${baseUrl}/en/services/web-development`,
            },
        },
        openGraph: {
            title: t.meta.title,
            description: t.meta.description,
            url: `${baseUrl}${path}`,
            siteName: "Bravix Creative",
            type: "website",
            locale,
        },
    };
}

export default async function Page({ params }: Props) {
    const { locale } = await params;

    if (!isValidLocale(locale)) {
        notFound();
    }

    const dict = getDictionary(locale as Locale);
    const t = dict.webDevelopment;
    const caseStudies = getCaseStudies(locale as Locale);

    return (
        <WebDevelopmentPage
            locale={locale as Locale}
            t={t}
            caseStudies={caseStudies}
        />
    );
}