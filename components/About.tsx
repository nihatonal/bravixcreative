'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import Container from "./Container";
import Image from "@/node_modules/next/image";
import about_image from "../public/images/stylish_realistic_web_designer_office_3.webp"
export default function AboutMe() {
    const t = useTranslations("about");
    const ref = useRef<HTMLHeadingElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    type Statistic = {
        value: number;
        label: string;
    };

    const statistics: Statistic[] = [
        { value: 6, label: t("statistics.experience") },
        { value: 15, label: t("statistics.projects") },
        { value: 98, label: t("statistics.clients") }
    ];

    return (

        <section id="about" className="py-20 bg-gray-50">
            <Container>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2
                            ref={ref}
                            className="text-3xl md:text-4xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {t("title")}
                        </motion.h2>
                        <motion.p className="text-gray-600 max-w-xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {t("role")}
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4  bg-bvs-lightPurple/20 rounded-xl -rotate-6"></div>
                                <div className="absolute -inset-4 bg-bvs-purple/20 rounded-xl rotate-3"></div>
                                <Image
                                    width={800} height={600}
                                    src={about_image}
                                    alt="Nihat Onal - Web Designer"
                                    className="relative object-cover z-10 w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <p className="text-gray-600 mb-6">{t("paragraph1")}</p>
                            <p className="text-gray-600 mb-10">{t("paragraph2")}</p>
                            <p className="text-gray-600 mb-10">{t("paragraph3")}</p>
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                                {statistics.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-4 rounded-lg shadow"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    >
                                        <span className="text-3xl font-bold text-bvs-purple block mb-1">
                                            {stat.value}+
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>

    );
}
