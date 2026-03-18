import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

interface HeroButtonsProps {
    scrollToSection: (sectionId: string) => void;
    t: (key: string) => string;
}

type GAEventParams = {
    [key: string]: string | number | boolean;
};

const sendGAEvent = (eventName: string, params: GAEventParams) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, params);
    }
};

const HeroButtons: React.FC<HeroButtonsProps> = ({ scrollToSection, t }) => {
    const handleClick = (buttonName: string, sectionId: string) => {
        sendGAEvent("click_hero_button", { button_name: buttonName });
        scrollToSection(sectionId);
    };

    return (
        <div className="grid grid-cols-2 lg:flex gap-4 pt-6">
            <button
                aria-label="portfolio button"
                onClick={() => handleClick("portfolio", "portfolio")}
                className="flex items-center justify-center gap-2 bg-bvs-accent hover:bg-bvs-purple py-2 px-4 text-white rounded-[8px]"
            >
                {t("cta_1")}
                <ArrowRight className="w-4 h-4" />
            </button>

            <button
                aria-label="contact button"
                onClick={() => handleClick("contact", "contact")}
                className="flex items-center justify-center gap-2 btn-outline py-2 px-4 text-bvs-accent border border-1 border-bvs-accent hover:bg-bvs-purple hover:text-white rounded-[8px]"
            >
                {t("cta_2")}
                <MessageSquare className="w-4 h-4" />
            </button>
        </div>
    );
};

export default HeroButtons;
