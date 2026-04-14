"use client";

import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import MessageSquare from "lucide-react/dist/esm/icons/message-square";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { handleMenuNavigation } from "@/utils/navigation";

type GAEventParams = Record<string, string | number | boolean>;

type WindowWithGtag = Window & {
  gtag?: (
    command: "event",
    eventName: string,
    params?: GAEventParams
  ) => void;
};

const sendGAEvent = (eventName: string, params: GAEventParams) => {
  if (typeof window === "undefined") return;

  const gtag = (window as WindowWithGtag).gtag;
  if (!gtag) return;

  gtag("event", eventName, params);
};

export default function HeroButtons() {
  const t = useTranslations("hero");
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    handleMenuNavigation({
      id: sectionId,
      pathname,
      router,
    });
  };

  const handleClick = (buttonName: string, sectionId: string) => {
    sendGAEvent("click_hero_button", { button_name: buttonName });
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