"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { useTranslations } from "next-intl";
import { serviceDetailsData } from "@/constants/serviceDetailsData ";

type ServiceModalProps = {
    isOpen: boolean;
    onClose: () => void;
    service: string;
    locale: string;
};

export default function ServiceModal({ isOpen, onClose, service, locale }: ServiceModalProps) {
    const t = useTranslations("services");

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    const serviceDetails = serviceDetailsData[locale]?.[service];
    if (!isOpen || !serviceDetails) return null;

    console.log(serviceDetails)

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="bg-white rounded-xl shadow-xl w-full max-w-2xl z-10 relative overflow-hidden"
                >
                    <div className="h-2 bg-gradient-to-r from-bvs-purple to-bvs-light-purple" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-4">{serviceDetails.title}</h3>
                        <p className="text-gray-600 mb-6">{serviceDetails.description}</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Process */}
                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-bvs-purple">{t("process")}</h4>
                                <ul className="space-y-2">
                                    {serviceDetails.process?.map((step, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-bvs-light-purple text-bvs-purple text-xs font-semibold mr-3 mt-1">
                                                {index + 1}
                                            </span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="font-semibold text-lg mb-3 text-bvs-purple">{t("technologies")}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {serviceDetails.technologies?.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={onClose}
                                aria-label="close modal"
                                className="px-6 py-2 bg-bvs-purple text-white rounded-lg hover:bg-bvs-purple/90 transition-colors"
                            >
                                {t("closeModal")}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
