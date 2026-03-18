"use client";

import Head from "next/head";
import { useTranslations } from "next-intl";
import Container from "../Container";

interface Section {
    heading: string;
    text: string;
}

export default function CookiePolicy() {
    const t = useTranslations("cookie-policy");

    // Bu satırı değiştiriyoruz:
    const sectionKeys = ["0", "1", "2", "3", "4", "5"];
    const sections: Section[] = sectionKeys.map((key) => ({
        heading: t(`sections.${key}.heading`),
        text: t(`sections.${key}.text`),
    }));

    return (
        <>
            <Head>
                <title>{t("meta.title")}</title>
                <meta name="description" content={t("meta.description")} />
            </Head>
            <Container className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

                    {sections.map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
                            <p className="text-gray-700 whitespace-pre-line">{section.text}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}
