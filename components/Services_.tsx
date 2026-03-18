"use client";

import { useTranslations } from "next-intl";
import { motion, useInView, Easing } from "framer-motion";
import { useState, useRef } from "react";
import ServiceModal from "./ServiceModal";
import { ReactNode } from "react";
import { useLocale } from "next-intl";

type Service = {
    id: string;
    slug?: string;
    title?: string;
    description?: string;
    cta?: string;
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
};

export default function Services() {
    const t = useTranslations("services");
    const locale = useLocale();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string>("");

    const services: Service[] = [
        {
            id: "webDev",
            title: t("webDev"),
            cta: t("ctaWebDev"),
            description: t("webDevDesc"),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            id: "ecommerce",
            title: t("ecommerce"),
            cta: t("ctaEcommerce"),
            description: t("ecommerceDesc"),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            id: "uiDesign",
            title: t("uiDesign"),
            cta: t("ctaUIdesign"),
            description: t("uiDesignDesc"),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            id: "seo",
            title: t("seo"),
            cta: t("ctaSEO"),
            description: t("seoDesc"),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            id: "maintenance",
            title: t("maintenance"),
            cta: t("ctaMaintenance"),
            description: t("maintenanceDesc"),
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    const openServiceModal = (serviceId: string) => {
        setSelectedService(serviceId);
        setModalOpen(true);
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };
    const easeOut: Easing = [0.42, 0, 0.58, 1];
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, rotateX: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: easeOut, // cubic-bezier tanımı
            }
        }
    };

    return (
        <section id="services" className="py-20 px-2 lg:px-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">{t("subtitle")}</p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                                transition: { duration: 0.3 }
                            }}
                            className="relative bg-white p-6 pb-10 rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-bvs-purple bg-opacity-10 text-bvs-purple mb-5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <button

                                aria-label="service modal"
                                onClick={() => openServiceModal(service.id)}
                                className="absolute bottom-4 right-4 text-bvs-purple hover:underline font-medium inline-flex items-center"
                            >
                                {service.cta}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ServiceModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                service={selectedService}
                locale={locale} />
        </section>
    );
}
