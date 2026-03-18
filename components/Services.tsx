"use client";
import { ReactNode } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useInView, Easing } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code, ShoppingBag, LayoutDashboard, Search, Settings } from "lucide-react";
import { ServiceData, Service } from "../constants/serviceData";


export default function Services() {
    const locale = useLocale();
    const t = useTranslations("services");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const [parsedServices, setParsedServices] = useState<Service[]>([]);





    const currentProjects = useMemo<Service[]>(
        () => ServiceData[locale] || ServiceData["en"],
        [locale]
    );

    useEffect(() => {
        const serviceIconMap: Record<string, ReactNode> = {
            "2001": (
                <Code className="h-8 w-8" />
            ),
            "2002": (
                <ShoppingBag className="h-8 w-8" />
            ),
            "2003": (
                <LayoutDashboard className="h-8 w-8" />
            ),
            "2004": (
                <Search className="h-8 w-8" />
            ),
            "2005": (
                <Settings className="h-8 w-8" />
            )
        };
        const enrichedServices = currentProjects.map((service) => ({
            ...service,
            icon: serviceIconMap[service.id], // ID'ye göre icon eşle
        }));
        setParsedServices(enrichedServices);
    }, [currentProjects]);

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
        <section id="services" className="py-20 px-2 lg:px-20 bg-gray-50">
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

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {parsedServices.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            whileHover={{
                                // scale: 1.03,
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

                            <Link

                                aria-label="project link"
                                href={`/${locale}/services/${service.slug}/${service.id}`}
                                className="absolute bottom-4 right-4 
                                text-bvs-purple hover:underline font-medium inline-flex items-center gap-2"
                            >
                                {service.cta}
                                <ExternalLink className="w-4 h-4 " />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
