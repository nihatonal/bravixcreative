import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/Project";
import ProjectGalleryClient from "./ProjectGalleryClient";

import { useTranslations } from "next-intl";

interface ProjectDetailsProps {
  project: Project;
  locale: string;
}

function getIntroText(project: Project) {
  return (
    project.seoDescription ||
    project.shortDescription ||
    project.description ||
    `${project.client} için geliştirilen proje detay sayfası.`
  );
}

export default function ProjectDetails({
  project,
  locale,
}: ProjectDetailsProps) {
  const introText = getIntroText(project);
  const portfolioHref = `/${locale}#portfolio`;
  const contactHref = `/${locale}#contact`;
  const t = useTranslations("projectDetail");

  return (
    <main className="pt-24 pb-20 px-2 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href={portfolioHref}
            aria-label="Back to portfolio"
            className="inline-flex items-center justify-center text-bvs-purple hover:underline"
          >
            ← {t("all")}
          </Link>
        </div>

        <header className="mb-12">
          {project.category && (
            <div className="mb-4">
              <span className="inline-flex px-3 py-1 bg-bvs-lightPurple text-bvs-purple text-sm rounded-full">
                {project.category}
              </span>
            </div>
          )}

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 max-w-4xl">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-8 max-w-3xl mb-6">
            {introText}
          </p>

          <div className="flex flex-wrap gap-3 items-center text-sm md:text-base">
            {project.client && (
              <span className="text-gray-600">
                {t("client")}: <strong>{project.client}</strong>
              </span>
            )}

            {project.type && (
              <span className="text-gray-600">
                {t("type")}: <strong>{project.type}</strong>
              </span>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} canlı siteyi aç`}
                className="inline-flex items-center gap-2 px-4 py-2 lg:ml-auto rounded-full bg-bvs-purple text-white hover:bg-bvs-darkPurple transition-all"
              >
                {project.viewLiveSite || "Canlı siteyi görüntüle"}
              </a>
            )}
          </div>
        </header>

        {project.images?.[0] && (
          <section className="relative mb-14 rounded-2xl shadow-md h-64 md:h-[420px] overflow-hidden">
            <Image
              src={project.images[0]}
              alt={`${project.title} kapak görseli`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
          </section>
        )}

        <div className="grid md:grid-cols-3 gap-12">
          <article className="md:col-span-2">
            {project.description && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{t("overview")}</h2>
                <p className="text-gray-700 leading-8">{project.description}</p>
              </section>
            )}

            {project.challenge && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{t("challenge")}</h2>
                <p className="text-gray-700 leading-8">{project.challenge}</p>
              </section>
            )}

            {project.solution && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{t("solution")}</h2>
                <p className="text-gray-700 leading-8">{project.solution}</p>
              </section>
            )}

            {project.adminPanel?.content && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  {project.adminPanel.title || t("adminPanelTitle")}
                </h2>
                <p className="text-gray-700 leading-8">
                  {project.adminPanel.content}
                </p>
              </section>
            )}

            {project.results && project.results.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{t("results")}</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.images?.length > 1 && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{t("images")}</h2>
                <ProjectGalleryClient
                  images={project.images.slice(1)}
                  projectTitle={project.title}
                />
              </section>
            )}

            {project.testimonial && (
              <section className="bg-gray-50 border-l-4 border-bvs-purple p-5 rounded-r-lg mb-10">
                <h2 className="text-2xl font-bold mb-4">{t("clientComment")}</h2>
                <blockquote className="italic text-gray-700 mb-3">
                  &quot;{project.testimonial.content}&quot;
                </blockquote>
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {project.testimonial.company}
                </p>
              </section>
            )}

            {project.faq && project.faq.length > 0 && (
              <section className="mb-12">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{t("faqTitle")}</h2>
                  <p className="text-gray-600 leading-7">
                    {t("faqText")}
                  </p>
                </div>

                <div className="space-y-4">
                  {project.faq.map((item, index) => (
                    <details
                      key={`${item.question}-${index}`}
                      open={index===0}
                      className="group rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all open:shadow-md"
                    >
                      <summary className="list-none cursor-pointer flex items-start justify-between gap-4">
                        <span className="text-base md:text-lg font-semibold text-gray-900 leading-7">
                          {item.question}
                        </span>

                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bvs-lightPurple text-purple transition-transform duration-300 group-open:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>
                      </summary>

                      <div className="overflow-hidden">
                        <p className="pt-4 pr-10 text-gray-700 leading-8">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-2xl bg-bvs-lightPurple/30 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">{t("contactTitle")}</h2>
              <p className="text-gray-700 leading-8 mb-5">{t("contactText")}</p>

              <Link
                href={contactHref}
                aria-label="Contact section"
                className="inline-flex items-center justify-center px-6 py-3 bg-bvs-purple text-white rounded-[10px] hover:bg-bvs-purple/90 transition-colors"
              >
                {t("contactButton")}
              </Link>
            </section>
          </article>

          <aside className="relative">
            <div className="lg:sticky lg:top-16 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              {project.technologies?.length > 0 && (
                <>
                  <h2 className="font-bold text-lg mb-4">
                    {t("technologiesUsed")}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {project.client && (
                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-2">{t("client")}</h3>
                  <p className="text-gray-600">{project.client}</p>
                </div>
              )}

              {project.category && (
                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-2">{t("category")}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              )}

              {project.type && (
                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-2">{t("type")}</h3>
                  <p className="text-gray-600">{project.type}</p>
                </div>
              )}

              {project.industry && (
                <div className="mb-6">
                  <h3 className="font-semibold text-base mb-2">{t("industry")}</h3>
                  <p className="text-gray-600">{project.industry}</p>
                </div>
              )}

              {project.serviceType && (
                <div className="mb-8">
                  <h3 className="font-semibold text-base mb-2">
                    {t("serviceType")}
                  </h3>
                  <p className="text-gray-600">{project.serviceType}</p>
                </div>
              )}

              <div className="rounded-xl bg-gray-50 p-4">
                <h3 className="font-bold text-lg mb-3">{t("title")}</h3>
                <p className="text-gray-600 mb-4">{t("text")}</p>

                <Link
                  href={contactHref}
                  aria-label="Contact section"
                  className="block text-center w-full py-3 bg-bvs-purple text-white rounded-[8px] hover:bg-bvs-purple/90 transition-colors"
                >
                  {t("contactButton")}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}