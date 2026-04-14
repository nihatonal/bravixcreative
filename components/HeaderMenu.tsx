"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { handleMenuNavigation } from "@/utils/navigation";
import Link from "next/link";

const HeaderMenu = () => {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("nav");
    const [selectedSection, setSelectedSection] = useState("home");

    const locale = pathname.split("/")[1];

    const navItems = [
        { id: "home", label: t("home") },
        { id: "about", label: t("about") },
        { id: "services", label: t("services") },
        { id: "portfolio", label: t("portfolio") },
        { id: "pricing", label: t("pricing") },
        { id: "contact", label: t("contact") },
        { id: "blog", label: t("blog") },
    ];

    useEffect(() => {
        if (pathname === `/${locale}/blog` || pathname === `/${locale}/blog/`) {
            setSelectedSection("blog");
        } else if (pathname === `/${locale}/projects` || pathname === `/${locale}/blog/`) {
            setSelectedSection("portfolio");
        }
        else if (pathname === `/${locale}` || pathname === `/${locale}/`) {
            setSelectedSection("home");
        }
    }, [pathname, locale]);

    const handleMenuClick = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router,
            setSelectedSection,
        });
    };

    return (
        <div className="hidden md:inline-flex w-1/3 items-center justify-center gap-3 lg:gap-7 text-sm capitalize font-semibold text-gray-800/80">
            {navItems.map((item) => {
                const isBlog = item.id === "blog";
                const isPortfolio = item.id === "portfolio"
                const isActive =
                    isBlog
                        ? pathname === `/${locale}/blog` || pathname === `/${locale}/blog/`

                        : isPortfolio
                            ? pathname === `/${locale}/projects` || pathname === `/${locale}/projects/`
                            : selectedSection === item.id;

                if (isBlog) {
                    return (
                        <Link
                            href={`/${locale}/blog`}
                            key={item.id}
                            aria-label="nav button"
                            className={`whitespace-nowrap hoverEffect relative group ${isActive ? "" : ""
                                }`}
                        >
                            {item.label}
                            <span
                                className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-bvs-purple group-hover:w-1/2 hoverEffect group-hover:left-0 ${isActive ? "w-1/2" : ""
                                    }`}
                            />
                            <span
                                className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-bvs-purple group-hover:w-1/2 hoverEffect group-hover:right-0 ${isActive ? "w-1/2" : ""
                                    }`}
                            />
                        </Link>
                    );
                }
                if (isPortfolio) {
                    return (
                        <Link
                            href={`/${locale}/projects`}
                            key={item.id}
                            aria-label="nav button"
                            className={`whitespace-nowrap hoverEffect relative group ${isActive ? "" : ""
                                }`}
                        >
                            {item.label}
                            <span
                                className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-bvs-purple group-hover:w-1/2 hoverEffect group-hover:left-0 ${isActive ? "w-1/2" : ""
                                    }`}
                            />
                            <span
                                className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-bvs-purple group-hover:w-1/2 hoverEffect group-hover:right-0 ${isActive ? "w-1/2" : ""
                                    }`}
                            />
                        </Link>
                    );
                }

                return (
                    <button
                        key={item.id}
                        aria-label="nav button"
                        onClick={() => handleMenuClick(item.id)}
                        className={`whitespace-nowrap hoverEffect relative group ${isActive ? "text-bvs-dark" : ""
                            }`}
                    >
                        {item.label}
                        <span
                            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-bvs-purple group-hover:w-1/2 hoverEffect group-hover:left-0 ${isActive ? "w-1/2" : ""
                                }`}
                        />
                        <span
                            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-bvs-purple group-hover:w-1/2 hoverEffect group-hover:right-0 ${isActive ? "w-1/2" : ""
                                }`}
                        />
                    </button>
                );
            })}
        </div>
    );
};

export default HeaderMenu;