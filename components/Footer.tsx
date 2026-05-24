"use client";

import { useTranslations, useLocale } from "next-intl";
import { FooterLegalLinks } from "./FooterLegalLinks";
import Logo from "./Logo";
import Newsletters from "./Newsletters";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import { getServicePath } from "@/lib/service-routes";
import type { Locale } from "@/i18n/routing";
import type { ServiceSlug } from "@/lib/services";
import { getProjectsPath } from "@/lib/project-routes";
interface NavItem {
  id: string;
  label: string;
  locale: Locale;
}

type Service = {
  id: string;
  slug: ServiceSlug;
  title: string;
};

export default function Footer() {
  const t = useTranslations("footer");
  const con = useTranslations("contact");
  const nav = useTranslations("nav");
  const ser = useTranslations("services");
  const currentYear = new Date().getFullYear();
  const locale = useLocale() as Locale;

  const navItems: NavItem[] = [
    { id: "services", label: nav("services"), locale: locale },
    { id: "portfolio", label: nav("portfolio"), locale: locale },
    { id: "pricing", label: nav("pricing"), locale: locale },
    { id: "contact", label: nav("contact"), locale: locale },
    { id: "blog", label: nav("blog"), locale: locale },
  ];

  const services: Service[] = [
    {
      id: "webDev",
      slug: "web-development",
      title: ser("webDev"),
    },
    {
      id: "ecommerce",
      slug: "ecommerce-development",
      title: ser("ecommerce"),
    },
    {
      id: "uiDesign",
      slug: "ui-ux-design",
      title: ser("uiDesign"),
    },
    {
      id: "seo",
      slug: "seo-optimization",
      title: ser("seo"),
    },
    {
      id: "maintenance",
      slug: "website-maintenance",
      title: ser("maintenance"),
    },
  ];

  return (
    <footer className="bg-bvs-dark pt-16 pb-8 px-4 lg:px-20">
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4 mb-12">
          <div>
            <div className="font-bold mb-4 flex items-center">
              <Logo className="text-white" spanDesign="text-white" />
            </div>

            <p className="text-gray-300 mb-6 leading-8 max-w-sm">
              {t("title")}
            </p>

            <SocialMedia
              status_link={con("status_link")}
              iconClassName="text-white hover:bg-white/20 backdrop-blur p-2 rounded-full transition-all hover:scale-105 duration-200"
            />
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t("links")}
            </h3>
            <div className="space-y-3 flex flex-col items-start">
              {navItems.map((item) =>
                item.id === "blog" ? (
                  <Link
                    href={`/${locale}/blog`}
                    key={item.id}
                    aria-label="nav button"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : item.id === "portfolio" ? (
                  <Link
                    href={getProjectsPath(locale)}
                    key={item.id}
                    aria-label="nav button"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={`/${locale}#${item.id}`}
                    key={item.id}
                    aria-label="nav button"
                    //onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={getServicePath(locale, service.slug)}
                    className="text-left text-gray-300 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {t("legal")}
            </h3>
            <FooterLegalLinks
              privacy={t("privacy")}
              terms={t("terms")}
              cookies={t("cookies")}
            />
          </div>
        </div>

        <div className="mb-12 flex justify-start xl:justify-end">
          <div className="w-full xl:max-w-[520px]">
            <Newsletters title={t("newsletter")} />
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Bravix Creative. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
