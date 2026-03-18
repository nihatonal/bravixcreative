"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { portfolioData, Project } from "../constants/portfolioData";
import { Card, CardContent } from "./ui/card";
import Image from "@/node_modules/next/image";

export default function Portfolio() {
    const locale = useLocale();
    const t = useTranslations("portfolio");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const [activeFilter, setActiveFilter] = useState("all");
    const [parsedProjects, setParsedProjects] = useState<Project[]>([]);

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

    useEffect(() => {
        setParsedProjects(currentProjects);
    }, [currentProjects]);

    const filteredProjects =
        activeFilter === "all"
            ? parsedProjects
            : parsedProjects.filter((project) => project.type === activeFilter);

    return (
        <section id="portfolio" className="py-20 px-2 lg:px-20 bg-gray-50">
            <div className="container mx-auto px-4" ref={ref}>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="flex flex-wrap justify-center mb-10 gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {filters.map((filter) => (
                        <button
                            aria-label="filter button"
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-5 py-2 rounded-[8px] text-sm font-medium transition-colors ${activeFilter === filter.id
                                ? "bg-bvs-purple text-white"
                                : "border border-bvs-purple text-bvs-purple hover:bg-bvs-purple/20"
                                }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2,
                            },
                        },
                        hidden: {},
                    }}
                >
                    {filteredProjects.slice().reverse().map((project) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                        >
                            <div className="relative overflow-hidden h-48">
                                <Image
                                    width={800} height={600}
                                    src={project.images?.[0] || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 bg-bvs-purple text-white px-4 py-1 text-sm">
                                    {project.category}
                                </div>
                            </div>

                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-semibold mb-2 text-bvs-blue">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-bvs-lightPurple/20 hover:bg-bvs-lightPurple/30 transitions text-bvs-purple px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    aria-label="project link"
                                    href={`/${locale}/project/${project.slug}/${project.id}`}
                                    className="flex items-center text-bvs-purple hover:text-bvs-lightPurple transition-colors gap-1 text-sm mt-auto"
                                >
                                    {t("viewProject")} <ExternalLink size={14} />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
