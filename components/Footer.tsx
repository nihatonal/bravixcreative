"use client";

import { usePathname, useRouter } from "next/navigation";
import { handleMenuNavigation } from "@/utils/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { FooterLegalLinks } from "./FooterLegalLinks";
import Logo from "./Logo";
import Newsletters from "./Newsletters";
import ServiceModal from "./ServiceModal";
import SocialMedia from "./SocialMedia";

interface NavItem {
    id: string;
    label: string;
}

type Service = {
    id: string;
    title: string;
};

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("footer");
    const con = useTranslations("contact");
    const nav = useTranslations("nav");
    const ser = useTranslations("services");
    const currentYear = new Date().getFullYear();
    const locale = useLocale();

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string>("");

    const navItems: NavItem[] = [
        { id: "home", label: nav("home") },
        { id: "about", label: nav("about") },
        { id: "services", label: nav("services") },
        { id: "portfolio", label: nav("portfolio") },
        { id: "pricing", label: nav("pricing") },
    ];

    const services: Service[] = [
        { id: "webDev", title: ser("webDev") },
        { id: "ecommerce", title: ser("ecommerce") },
        { id: "uiDesign", title: ser("uiDesign") },
        { id: "seo", title: ser("seo") },
        { id: "maintenance", title: ser("maintenance") },
    ];

    const scrollToSection = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router,
        });
    };

    const openServiceModal = (serviceId: string) => {
        setSelectedService(serviceId);
        setModalOpen(true);
    };

    return (
        <footer className="bg-bvs-dark pt-16 pb-8 px-4 lg:px-20">
            <div className="container mx-auto">
                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4 mb-12">
                    <div>
                        <div className="font-bold mb-4 flex items-center">
                            <Logo className="text-white" spanDesign="text-white" />
                        </div>

                        <p className="text-gray-300 mb-6 leading-8 max-w-sm">
                            {t("title")}
                        </p>

                        <SocialMedia
                            status_link={con("status_link")}
                            iconClassName="text-white hover:bg-white/20 backdrop-blur p-2 rounded-full transition-all hover:scale-105 duration-200"
                        />
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {t("links")}
                        </h3>
                        <div className="space-y-3 flex flex-col items-start">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    aria-label="nav button"
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {t("services")}
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <button
                                        onClick={() => openServiceModal(service.id)}
                                        className="text-left text-gray-300 hover:text-white transition-colors"
                                    >
                                        {service.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {t("legal")}
                        </h3>
                        <FooterLegalLinks
                            privacy={t("privacy")}
                            terms={t("terms")}
                            cookies={t("cookies")}
                        />
                    </div>
                </div>

                <div className="mb-12 flex justify-start xl:justify-end">
                    <div className="w-full xl:max-w-[520px]">
                        <Newsletters title={t("newsletter")} />
                    </div>
                </div>

                <ServiceModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    service={selectedService}
                    locale={locale}
                />

                <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>
                        &copy; {currentYear} Bravix Creative. {t("rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
}