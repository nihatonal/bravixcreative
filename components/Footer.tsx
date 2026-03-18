"use client"

import { usePathname, useRouter } from '@/node_modules/next/navigation';
import { handleMenuNavigation } from '@/utils/navigation';
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { FooterLegalLinks } from "./FooterLegalLinks";
import Logo from "./Logo";
import Newsletters from './Newsletters';
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
    const con = useTranslations("contact")
    const nav = useTranslations("nav");
    const ser = useTranslations("services")
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

    const scrollToSection = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router,
        });
    };

    const services: Service[] = [
        {
            id: "webDev",
            title: ser("webDev")
        },
        {
            id: "ecommerce",
            title: ser("ecommerce")
        },
        {
            id: "uiDesign",
            title: ser("uiDesign")
        },
        {
            id: "seo",
            title: ser("seo")
        },
        {
            id: "maintenance",
            title: ser("maintenance")
        }
    ];

    const openServiceModal = (serviceId: string) => {
        setSelectedService(serviceId);
        setModalOpen(true);
    };

    return (
        <footer className="relative bg-bvs-dark pt-16 pb-8 pb-8 px-2 lg:px-20">
            <div className=" container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    {/* Company Info */}
                    <div>
                        <div className=" font-bold mb-4 flex items-center">
                            <Logo className="text-white" spanDesign="text-white" />

                        </div>
                        <p className="text-gray-300 mb-4">{t("title")}</p>
                        <SocialMedia
                            status_link={con("status_link")}
                            iconClassName="text-white hover:bg-white/20 backdrop-blur p-2 rounded-full transition-all hover:scale-105 duration-200" />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">{t("links")}</h3>
                        <div className="space-y-2 flex flex-col items-start">
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

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">{t("services")}</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.id}
                                >  {/* key eklendi */}
                                    <button
                                        onClick={() => openServiceModal(service.id)}
                                        className=" text-left text-gray-300 hover:text-white transition-colors"
                                    >
                                        {service.title}
                                    </button>
                                </li>
                            ))}

                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">{t("legal")}</h3>
                        <FooterLegalLinks />
                    </div>
                    <div className="md:absolute md:bottom-16 lg:bottom-12 xl:bottom-4 right-4">
                        <Newsletters title={t("newsletter")} />
                    </div>

                </div>
                <ServiceModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    service={selectedService}
                    locale={locale} />

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>
                        &copy; {currentYear} Bravix Creative. {t("rights")}
                    </p>
                </div>
            </div>
        </footer >
    );
}