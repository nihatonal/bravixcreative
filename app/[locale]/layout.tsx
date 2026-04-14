import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { PlanProvider } from "@/lib/PlanContext";

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
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PlanProvider>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </PlanProvider>
    </NextIntlClientProvider>
  );
}