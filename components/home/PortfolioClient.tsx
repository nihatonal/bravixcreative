"use client";

import { useTranslations, useLocale } from "next-intl";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { portfolioData, Project } from "../../constants/portfolioData";
import { Card, CardContent } from "../ui/card";

export default function Portfolio() {
  const locale = useLocale();
  const t = useTranslations("portfolio");

  const [activeFilter, setActiveFilter] = useState("all");

  const filters = useMemo(
    () => [
      { id: "all", name: t("all") },
      { id: "web-design", name: t("web-design") },
      { id: "ui-ux", name: t("ui-ux") },
      { id: "web-development", name: t("web-development") },
      { id: "web-application", name: t("web-application") },
    ],
    [t]
  );

  const currentProjects = useMemo<Project[]>(
    () => portfolioData[locale] || portfolioData["en"],
    [locale]
  );

  const filteredProjects = useMemo(() => {
    const projects =
      activeFilter === "all"
        ? currentProjects
        : currentProjects.filter((project) => project.type === activeFilter);

    return [...projects].reverse();
  }, [activeFilter, currentProjects]);

  return (
    <section id="portfolio" className="bg-gray-50 px-2 py-20 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-1 text-sm font-medium text-bvs-mutedText shadow-sm backdrop-blur-sm">
            {t("eyebrow")}
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              aria-label="filter button"
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-[8px] px-5 py-2 text-sm font-medium transition-colors ${activeFilter === filter.id
                  ? "bg-bvs-purple text-white"
                  : "border border-bvs-purple text-bvs-mutedText hover:bg-bvs-purple/10"
                }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.images?.[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 bg-bvs-purpleDark px-4 py-1 text-sm text-white">
                  {project.category}
                </div>
              </div>

              <CardContent className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-bvs-blue">
                  {project.title}
                </h3>

                <p className="mb-4 line-clamp-3 text-gray-700">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-bvs-lightPurple px-3 py-1 text-xs font-medium text-bvs-purpleDark transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  aria-label="project link"
                  href={`/${locale}/projects/${project.slug}/${project.id}`}
                  className="mt-auto flex items-center gap-1 text-sm text-bvs-blue transition-colors hover:opacity-80"
                >
                  {t("viewProject")} <ExternalLink size={14} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}