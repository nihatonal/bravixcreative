import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import { PlanProvider } from "@/lib/PlanContext";
import ParallaxWrapper from "@/lib/ParallaxWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const siteUrl = "https://www.bravixcreative.com";
const locales: Locale[] = ["tr", "en", "ru"];

function isValidLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="canonical" href={`${siteUrl}/${locale}/`} />

        {locales.map((lng) => (
          <link
            key={lng}
            rel="alternate"
            hrefLang={lng}
            href={`${siteUrl}/${lng}/`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PlanProvider>
            <ParallaxWrapper>
              <div
                className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
              >
                <Header />
                {children}
                <Footer />
              </div>
            </ParallaxWrapper>
          </PlanProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}