import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
};

export default async function Services() {
  const locale = await getLocale();
  const t = await getTranslations("services");

  const services: Service[] = [
    {
      id: "webDev",
      slug: "web-development",
      title: t("webDev"),
      cta: t("ctaWebDev"),
      description: t("webDevDesc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "ecommerce",
      slug: "ecommerce-development",
      title: t("ecommerce"),
      cta: t("ctaEcommerce"),
      description: t("ecommerceDesc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: "uiDesign",
      slug: "ui-ux-design",
      title: t("uiDesign"),
      cta: t("ctaUIdesign"),
      description: t("uiDesignDesc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "seo",
      slug: "seo-optimization",
      title: t("seo"),
      cta: t("ctaSEO"),
      description: t("seoDesc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: "maintenance",
      slug: "website-maintenance",
      title: t("maintenance"),
      cta: t("ctaMaintenance"),
      description: t("maintenanceDesc"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="px-2 py-20 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-1 text-sm font-medium text-bvs-mutedText shadow-sm backdrop-blur-sm">
            {t("eyebrow")}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
          <p className="mx-auto max-w-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 pb-10 shadow-sm transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-bvs-purple bg-opacity-10 text-bvs-purple">
                {service.icon}
              </div>

              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>

              <p className="mb-6 min-h-[72px] text-gray-600">
                {service.description}
              </p>

              <Link
                href={`/${locale}/services/${service.slug}`}
                className="absolute bottom-4 right-4 inline-flex items-center font-medium text-bvs-mutedText hover:underline"
              >
                {service.cta}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}