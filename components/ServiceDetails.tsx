"use client";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/node_modules/next/navigation";
import { handleMenuNavigation } from "@/utils/navigation";
import { motion } from "framer-motion";

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
            onClick={() => handleMenuClick("services")} className="text-bvs-purple hover:underline">
            {/* {t("portfolio.backToPortfolio")} */} Services
          </button>
        </div>
      </div>
    );
  }

  {/* Section Component */ }
  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="container mx-auto mb-20">
      <h2 className="text-3xl font-bold text-bvs-dark border-l-4 border-bvs-purple pl-4 mb-10">
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <main className="pt-24 pb-32 px-4 lg:px-24 bg-bvs-light">
      {/* Hero Section */}
      <section className="container mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
          {service.heroImageUrl && (
            <motion.img
              src={service.heroImageUrl}
              alt={`${service.title} hero`}
              className="rounded-2xl shadow-xl object-cover w-full h-auto max-h-[420px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          )}
        </div>
      </section>

      {/* Process Section */}
      <Section title={t("process")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.process?.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-bvs-logoText mb-2">
                {`${t("step")} ${idx + 1}`}
              </h3>
              <p className="text-bvs-lightColor">{step}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Technologies Section */}
      <Section title={t("technologies")}>
        <div className="flex flex-wrap gap-4">
          {service.technologies?.map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="px-4 py-2 bg-bvs-purple text-white rounded-full font-medium text-sm tracking-wide"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section title={t("benefits")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {service.benefits?.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="p-4 bg-bvs-gray text-bvs-dark rounded-xl shadow hover:shadow-md text-sm font-medium"
            >
              {benefit}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section title={t("useCases")}>
        <div className="flex flex-wrap gap-2">
          {service.useCases?.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.03 }}
              className="px-3 py-1 bg-bvs-purple text-white rounded-full text-xs font-medium shadow-sm hover:shadow-md"
            >
              {useCase}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Ideal For Section */}
      <Section title={t("idealFor")}>
        <ul className="list-disc list-inside space-y-2 text-bvs-darkColorL">
          {service.idealFor?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Pricing Model Section */}
      <Section title={t("pricingModel")}>
        <p className="text-bvs-darkColorL">{service.pricingModel}</p>
      </Section>

      {/* Common Mistakes Section */}
      <Section title={t("commonMistakes")}>
        <ul className="list-disc list-inside space-y-2 text-bvs-darkColorL">
          {service.commonMistakes?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Performance Metrics Section */}
      <Section title={t("performanceMetrics")}>
        <ul className="list-disc list-inside space-y-2 text-bvs-darkColorL">
          {service.performanceMetrics?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* FAQ Section */}
      <Section title={t("faq")}>
        <div className="space-y-6">
          {service.faq?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl"
            >
              <h3 className="font-semibold text-bvs-dark">{item.question}</h3>
              <p className="text-bvs-lightColor mt-2">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );


}

