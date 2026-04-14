"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { handleMenuNavigation } from "@/utils/navigation";

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  cta: string;
  icon?: ReactNode;
  process?: string[];
  technologies?: string[];
  detailedDescription?: string;
  benefits?: string[];
  useCases?: string[];
  faq?: { question: string; answer: string }[];
  relatedProjects?: { title: string; url: string }[];
  blogPosts?: { title: string; url: string }[];
  idealFor?: string[];
  pricingModel?: string;
  commonMistakes?: string[];
  performanceMetrics?: string[];
  heroImageUrl?: string;
  keywords?: string[];
  meta?: {
    title: string;
    description: string;
  };
}

interface ServiceDetailsClientProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsClientProps) {
  const t = useTranslations("services");
  const pathname = usePathname();
  const router = useRouter();

  const handleMenuClick = (id: string) => {
    handleMenuNavigation({
      id,
      pathname,
      router,
    });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <button
            aria-label="service button"
            onClick={() => handleMenuClick("services")}
            className="text-bvs-purple hover:underline"
          >
            Services
          </button>
        </div>
      </div>
    );
  }

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <section className="container mx-auto mb-20">
      <h2 className="text-3xl font-bold text-bvs-dark border-l-4 border-bvs-purple pl-4 mb-10">
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <main className="pt-24 pb-32 px-4 lg:px-24 bg-bvs-light">
      <section className="container mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-bvs-dark mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg lg:text-xl text-bvs-lightColor mb-6">
              {service.detailedDescription}
            </p>
            <a
              href="#cta"
              className="inline-block px-6 py-3 bg-bvs-logoX text-bvs-darkColorL font-semibold rounded-lg shadow hover:bg-yellow-400"
            >
              {service.cta}
            </a>
          </div>

          {service.heroImageUrl && (
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={service.heroImageUrl}
                alt={`${service.title} hero`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          )}
        </div>
      </section>

      <Section title={t("process")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.process?.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-bvs-logoText mb-2">
                {`${t("step")} ${idx + 1}`}
              </h3>
              <p className="text-bvs-lightColor">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t("technologies")}>
        <div className="flex flex-wrap gap-4">
          {service.technologies?.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-bvs-purple text-white rounded-full font-medium text-sm tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section title={t("benefits")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {service.benefits?.map((benefit, idx) => (
            <div
              key={idx}
              className="p-4 bg-bvs-gray text-bvs-dark rounded-xl shadow hover:shadow-md text-sm font-medium"
            >
              {benefit}
            </div>
          ))}
        </div>
      </Section>

      <Section title={t("useCases")}>
        <div className="flex flex-wrap gap-2">
          {service.useCases?.map((useCase, idx) => (
            <div
              key={idx}
              className="px-3 py-1 bg-bvs-purple text-white rounded-full text-xs font-medium shadow-sm hover:shadow-md"
            >
              {useCase}
            </div>
          ))}
        </div>
      </Section>

      <Section title={t("idealFor")}>
        <ul className="list-disc list-inside space-y-2 text-bvs-darkColorL">
          {service.idealFor?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title={t("pricingModel")}>
        <p className="text-bvs-darkColorL">{service.pricingModel}</p>
      </Section>

      <Section title={t("commonMistakes")}>
        <ul className="list-disc list-inside space-y-2 text-bvs-darkColorL">
          {service.commonMistakes?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title={t("performanceMetrics")}>
        <ul className="list-disc list-inside space-y-2 text-bvs-darkColorL">
          {service.performanceMetrics?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title={t("faq")}>
        <div className="space-y-6">
          {service.faq?.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl"
            >
              <h3 className="font-semibold text-bvs-dark">{item.question}</h3>
              <p className="text-bvs-lightColor mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}