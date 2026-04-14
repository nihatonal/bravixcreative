import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ExternalLink } from "lucide-react";
import { portfolioData, Project } from "@/constants/portfolioData";
import { Card, CardContent } from "@/components/ui/card";

type PortfolioPreviewProps = {
    locale: string;
};

export default async function PortfolioPreview({
    locale,
}: PortfolioPreviewProps) {
    const t = await getTranslations({ locale, namespace: "portfolio" });

    const projects: Project[] =
        portfolioData[locale as keyof typeof portfolioData] ||
        portfolioData.en;

    const selectedProjects = [...projects].reverse().slice(0, 3);

    if (!selectedProjects.length) return null;

    return (
        <section id="portfolio" className="bg-gray-50 px-2 py-20 lg:px-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-1 text-sm font-medium text-bvs-purple shadow-sm backdrop-blur-sm">
                        {t("eyebrow")}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        {t("title")}
                    </h2>
                    <p className="mx-auto max-w-xl text-gray-600">{t("subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {selectedProjects.map((project) => (
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

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-bvs-lightPurple px-3 py-1 text-xs font-medium text-bvs-purpleDark"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={`/${locale}/projects/${project.slug}/${project.id}`}
                                    className="mt-auto flex items-center gap-1 text-sm text-bvs-blue transition-colors hover:opacity-80"
                                >
                                    {t("viewProject")} <ExternalLink size={14} />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href={`/${locale}/projects`}
                        className="inline-flex rounded-full border border-bvs-purple px-5 py-2 text-sm font-medium text-bvs-mutedText transition hover:bg-bvs-purple/10"
                    >
                        {t("viewAllProjects")}
                    </Link>
                </div>
            </div>
        </section>
    );
}