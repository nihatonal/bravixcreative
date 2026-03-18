// components/ProjectDetailsClient.tsx (Client Component)
"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Expand } from "lucide-react";
import FullscreenImageModal from "./FullscreenImageModal";
import Image from "@/node_modules/next/image";
import { handleMenuNavigation } from "@/utils/navigation";
import { usePathname, useRouter } from "@/node_modules/next/navigation";

interface Testimonial {
    content: string;
    author: string;
    company: string;
}
interface AdminPanel {
    content: string;
    title: string;
}
interface Project {
    id: string;
    title: string;
    viewLiveSite?: string;
    liveUrl?: string;
    client: string;
    type: string;
    category: string;
    description: string;
    challenge?: string;
    solution?: string;
    technologies: string[];
    results?: string[];
    testimonial?: Testimonial;
    adminPanel?: AdminPanel;
    images: string[];
}
interface ProjectDetailsClientProps {
    project: Project;
}

export default function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
    const t = useTranslations("projectDetail");
    const pathname = usePathname();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const router = useRouter();

    const handleBackToPortfolio = () => {
        if (location.pathname === "/") {
            const section = document.getElementById("portfolio");
            if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/");
            sessionStorage.setItem("scrollTo", "portfolio");
        }
    };

    const handleMenuClick = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router,
        });
    };

    useEffect(() => {
        if (project?.title) {
            document.title = project.title;
        }
    }, [project?.title]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                    <button
                        aria-label="portfolio button"
                        onClick={() => handleMenuClick("portfolio")} className="text-bvs-purple hover:underline">
                        {t("portfolio.backToPortfolio")}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="pt-24 pb-20  px-2 lg:px-20 ">
            <div className="container mx-auto px-4">
                <button aria-label="home page button" onClick={handleBackToPortfolio} className="inline-flex items-center text-bvs-purple hover:underline mb-8">
                    <ArrowLeft size={18} className="mr-1" />
                    {t("all")}
                </button>

                <div className="mb-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-3"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-3 items-center"
                    >
                        <span className="px-3 py-1 bg-bvs-lightPurple text-bvs-gray text-sm rounded-full">
                            {project.category}
                        </span>

                        <span className="text-gray-500">
                            {t("client")}: {project.client}
                        </span>

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                aria-label="project link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-base gap-2 px-4 py-1 lg:ml-auto text-sm rounded-full bg-bvs-purple text-white hover:bg-bvs-darkPurple transition-all"
                            >
                                <ExternalLink size={16} />
                                {project.viewLiveSite}
                            </a>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative mb-12 rounded-xl shadow-md h-56 lg:h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
                    <Image width={1200} height={400} quality={100} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover" src={project.images[0]} alt={project.title} />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-2"
                    >
                        <h2 className="text-2xl font-bold mb-4">{t("overview")}</h2>
                        <p className="text-gray-700 mb-8">{project.description}</p>

                        <h3 className="text-xl font-bold mb-3">{t("challenge")}</h3>
                        <p className="text-gray-700 mb-8">{project.challenge}</p>

                        <h3 className="text-xl font-bold mb-3">{t("solution")}</h3>
                        <p className="text-gray-700 mb-8">{project.solution}</p>

                        {project.adminPanel && (
                            <>
                                <h3 className="text-xl font-bold mb-3">{t("adminPanelTitle")}</h3>
                                <p className="text-gray-700 mb-8">{project.adminPanel.content}</p>
                            </>
                        )}

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {project.images.slice(1).map((image: string, index: number) => (
                                <div
                                    key={index}
                                    className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <Image width={800} height={600}
                                        src={image}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 right-2 bg-black/60 p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                                        <Expand size={20} className="text-white" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <FullscreenImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />

                        <h3 className="text-xl font-bold mb-3">{t("results")}</h3>
                        {project.results && (
                            <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-1">
                                {project.results.map((result: string, index: number) => (
                                    <li key={index}>{result}</li>
                                ))}
                            </ul>
                        )}

                        {project.testimonial && (
                            <div className="bg-gray-50 border-l-4 border-bvs-purple p-5 rounded-r-lg mb-8">
                                <p className="italic text-gray-700 mb-3">&quot;{project.testimonial.content}&quot;</p>
                                <p className="font-semibold">{project.testimonial.author}</p>
                                <p className="text-sm text-gray-600">{project.testimonial.company}</p>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative"
                    >
                        <div className="lg:sticky lg:top-16 bg-white rounded-xl shadow-sm p-6">
                            <h3 className="font-bold text-lg mb-4">{t("technologiesUsed")}</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map((tech: string, index: number) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <h3 className="font-bold text-lg mb-4">{t("contactTitle")}</h3>
                            <p className="text-gray-600 mb-4">{t("contactText")}</p>
                            <button
                                aria-label="contact button"
                                onClick={() => handleMenuClick("contact")}
                                className="block text-center w-full py-3 bg-bvs-purple text-white rounded-[8px] hover:bg-bvs-purple/90 transition-colors"
                            >
                                {t("contactButton")}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
