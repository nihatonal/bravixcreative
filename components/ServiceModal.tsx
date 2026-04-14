"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { useTranslations } from "next-intl";
import { serviceDetailsData } from "@/constants/serviceDetailsData";

type ServiceModalProps = {
    isOpen: boolean;
    onClose: () => void;
    service: string;
    locale: string;
};

const ANIMATION_DURATION = 250;

export default function ServiceModal({ isOpen, onClose, service, locale }: ServiceModalProps) {
    const t = useTranslations("services");

    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const serviceDetails = serviceDetailsData[locale]?.[service];

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setIsClosing(false);
        } else if (isMounted) {
            setIsClosing(true);

            const timeout = window.setTimeout(() => {
                setIsMounted(false);
                setIsClosing(false);
            }, ANIMATION_DURATION);

            return () => window.clearTimeout(timeout);
        }
    }, [isOpen, isMounted]);

    useEffect(() => {
        if (!isMounted) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isMounted, onClose]);

    if (!isMounted || !serviceDetails) return null;

    const isActive = !isClosing;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-hidden={!isActive}
        >
            {/* Backdrop */}
            <button
                type="button"
                aria-label="Close modal backdrop"
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />

            {/* Modal */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-modal-title"
                className={`relative z-10 w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 ease-out ${isActive
                    ? "scale-100 opacity-100 translate-y-0"
                    : "scale-95 opacity-0 translate-y-2"
                    }`}
            >
                <div className="h-2 bg-gradient-to-r from-bvs-purple to-bvs-lightPurple" />

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
                                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-bvs-lightPurple text-bvs-purple text-xs font-semibold mr-3 mt-1">
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
            </div>
        </div>
    );
}
