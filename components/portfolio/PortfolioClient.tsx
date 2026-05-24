"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/routing";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioCardProject } from "@/lib/portfolio";
import { useTranslations } from "next-intl";
import ContactSection from "@/components/home/ContactSection";
import { getProjectPath } from "@/lib/project-routes";
type FilterItem = {
  id: string;
  name: string;
};

type PortfolioClientProps = {
  locale: Locale;
  title: string;
  subtitle: string;
  eyebrow: string;
  viewProjectLabel: string;
  filters: FilterItem[];
  projects: PortfolioCardProject[];
};

export default function PortfolioClient({
  locale,
  title,
  subtitle,
  viewProjectLabel,
  filters,
  projects,
}: PortfolioClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const t = useTranslations("portfolio");
  const projects2 = projects.slice(0, -1);
  const filteredProjects = useMemo(() => {
    const items =
      activeFilter === "all"
        ? projects2
        : projects2.filter((project) => project.type === activeFilter);

    return [...items].reverse();
  }, [activeFilter, projects2]);

  const featuredProject = projects[projects.length - 1];

  return (
    <section id="portfolio" className="bg-gray-50 px-2 py-20 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="relative mb-14 overflow-hidden rounded-[36px] border border-bvs-purple/10 bg-gradient-to-br from-white via-primary/20 to-accent/20 px-6 py-8 shadow-[0_20px_70px_rgba(126,105,171,0.10)] md:px-10 md:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-x-clip overflow-y-hidden"
          >
            <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-bvs-lightPurple/30 blur-3xl" />
            <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-bvs-purple/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-bvs-logoX/15 blur-3xl" />
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_420px]">
            <div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-bvs-blue md:text-5xl xl:text-6xl">
                {title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-bvs-mutedText md:text-lg">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-bvs-purple/15 bg-white/80 px-4 py-2 text-sm font-medium text-bvs-mutedText shadow-sm">
                  {t("hero.chips.customWebsites")}
                </span>
                <span className="inline-flex items-center rounded-full border border-bvs-purple/15 bg-white/80 px-4 py-2 text-sm font-medium text-bvs-mutedText shadow-sm">
                  {t("hero.chips.uiUxSystems")}
                </span>
                <span className="inline-flex items-center rounded-full border border-bvs-purple/15 bg-white/80 px-4 py-2 text-sm font-medium text-bvs-mutedText shadow-sm">
                  {t("hero.chips.seoFocused")}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects-grid"
                  className="inline-flex items-center gap-2 rounded-xl bg-bvs-purple px-5 py-3 text-sm font-medium text-white shadow-md transition hover:bg-bvs-accent"
                >
                  {t("hero.cta.explore")}
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-bvs-purple/20 bg-white px-5 py-3 text-sm font-medium text-bvs-purple shadow-sm transition hover:bg-bvs-purple/5"
                >
                  {t("hero.cta.start")}
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                  <p className="text-sm text-bvs-mutedText">
                    {t("hero.stats.delivery")}
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-bvs-blue">
                    15+
                  </p>
                </div>

                <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                  <p className="text-sm text-bvs-mutedText">
                    {t("hero.stats.satisfaction")}
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-bvs-blue">
                    98%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/60 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                  <p className="text-sm text-bvs-mutedText">
                    {t("hero.stats.experience")}
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-bvs-blue">
                    6+
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-3xl bg-bvs-lightPurple/30 blur-2xl md:block" />
              <div className="absolute -bottom-8 -left-6 hidden h-28 w-28 rounded-full bg-bvs-purple/20 blur-2xl md:block" />

              <div className="relative rounded-[28px] border border-white/60 bg-white/90 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-sm">
                {featuredProject ? (
                  <>
                    <Link href={getProjectPath(locale, featuredProject.slug)}>
                      <div className="relative overflow-hidden rounded-[22px] border border-black/5 bg-white">
                        <div className="relative h-60 w-full md:h-[200px]">
                          <Image
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 420px"
                            unoptimized
                          />
                        </div>
                      </div>
                    </Link>

                    <div className="mt-5">
                      <div className="mb-3 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.18em] text-bvs-mutedText">
                            {t("hero.featured")}
                          </p>

                          <h2 className="mt-1 break-words text-xl font-bold text-bvs-blue sm:text-2xl">
                            {featuredProject.title}
                          </h2>
                        </div>

                        <Link
                          href={getProjectPath(locale, featuredProject.slug)}
                          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-bvs-purple/15 bg-white px-4 py-2 text-sm font-medium text-bvs-purple shadow-sm transition hover:bg-bvs-purple/5"
                        >
                          {t("viewProject")}
                          <ExternalLink size={14} />
                        </Link>
                      </div>

                      <p className="line-clamp-3 text-sm leading-6 text-bvs-mutedText">
                        {featuredProject.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {featuredProject.technologies
                          .slice(0, 4)
                          .map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-bvs-lightPurple px-3 py-1 text-xs font-medium text-bvs-purpleDark"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="rounded-[22px] border border-dashed border-bvs-purple/20 bg-white/70 p-8 text-center text-bvs-mutedText">
                    No featured project yet.
                  </div>
                )}
              </div>

              <div className="mt-4 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/60 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wide text-bvs-mutedText">
                    {t("hero.focus")}
                  </p>
                  <p className="mt-2 text-base font-semibold text-bvs-blue">
                    {t("hero.focusText")}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/60 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wide text-bvs-mutedText">
                    {t("hero.delivery")}
                  </p>
                  <p className="mt-2 text-base font-semibold text-bvs-blue">
                    {t("hero.deliveryText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="projects-grid" className="scroll-mt-24">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                aria-label={`filter ${filter.name}`}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-[8px] px-5 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-bvs-purple text-white"
                    : "border border-bvs-purple text-bvs-purple hover:bg-bvs-purple/10"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <Link
                href={getProjectPath(locale, project.slug)}
                key={project.id}
              >
                <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute bottom-0 left-0 bg-bvs-purpleDark px-4 py-1 text-sm text-white">
                      {project.category}
                    </div>
                  </div>

                  <CardContent className="flex flex-grow flex-col p-6">
                    <h2 className="mb-2 text-xl font-semibold text-bvs-blue">
                      {project.title}
                    </h2>

                    <p className="mb-4 line-clamp-3 text-gray-700">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-bvs-lightPurple px-3 py-1 text-xs font-medium text-bvs-purpleDark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={getProjectPath(locale, project.slug)}
                      className="mt-auto flex items-center gap-1 text-sm text-bvs-blue transition-colors hover:opacity-80"
                    >
                      {viewProjectLabel} <ExternalLink size={14} />
                    </Link>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <ContactSection />
      </div>
    </section>
  );
}
