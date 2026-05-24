"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";


export default function HeroButtons() {
  const t = useTranslations("hero");
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (buttonName: string, sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:flex">
      <button
        aria-label="portfolio button"
        onClick={() => handleClick("portfolio", "portfolio")}
        className="flex items-center justify-center gap-2 rounded-[8px] bg-bvs-primary px-4 py-2 text-white hover:bg-bvs-purple"
      >
        {t("cta_1")}
        <ArrowRight className="h-4 w-4" />
      </button>

      <button
        aria-label="contact button"
        onClick={() => handleClick("contact", "contact")}
        className="group flex items-center justify-center gap-2 rounded-[8px] border-2 border-bvs-purple px-4 py-2 text-bvs-dark hover:border-bvs-accent"
      >
        {t("cta_2")}
        <MessageSquare className="h-4 w-4 group-hover:text-accent" />
      </button>
    </div>
  );
}