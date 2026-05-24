"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioCardProject } from "@/lib/portfolio";
import { getProjectPath } from "@/lib/project-routes";
import type { Locale } from "@/i18n/routing";
type FilterItem = {
  id: string;
  name: string;
};

type PortfolioGridClientProps = {
  locale: Locale;
  title: string;
  subtitle: string;
  eyebrow: string;
  viewProjectLabel: string;
  filters: FilterItem[];
  projects: PortfolioCardProject[];
};

export default function PortfolioGridClient({
  locale,
  title,
  subtitle,
  eyebrow,
  viewProjectLabel,
  filters,
  projects,
}: PortfolioGridClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    const items =
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.type === activeFilter);

    return [...items].reverse();
  }, [activeFilter, projects]);

  return (
    <section id="portfolio" className="bg-gray-50 px-2 py-20 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-1 text-sm font-medium text-bvs-purple shadow-sm backdrop-blur-sm">
            {eyebrow}
          </span>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h1>
          <p className="mx-auto max-w-xl text-gray-600">{subtitle}</p>
        </div>

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
            <Card
              key={project.id}
              className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
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
          ))}
        </div>
      </div>
    </section>
  );
}