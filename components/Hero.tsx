"use client";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useRef } from "react";

import Image from "next/image";
import hero_image from "../public/images/stylish_realistic_web_designer_office__2.webp";
import { handleMenuNavigation } from "@/utils/navigation";
import { usePathname, useRouter } from "@/node_modules/next/navigation";
import HeroButtons from "./HeroButtons";

const Parallax = dynamic(
    () => import("react-scroll-parallax").then((mod) => mod.Parallax),
    { ssr: false }
);

export default function Hero(): JSX.Element {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("hero");
    const ref = useRef(null);

    const scrollToSection = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router
        });
    };

    return (
        <div>
            <div
                id="home"
                className="relative  min-h-screen flex flex-col justify-start pt-32 lg:pt-44 px-4"
            >
                <div className="max-w-screen-xl mx-auto grid grid-areas-mobile lg:grid-areas-desktop grid-cols-1 lg:grid-cols-2 items-center gap-20">
                    {/* Text */}
                    <div
                        ref={ref}
                        className="grid-in-text space-y-6 min-h-[320px]"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-bvs-blue">
                            {t("title.part1")}{" "}
                            <span className="gradient-text">{t("title.part2")} </span>
                            {t("title.part3")}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 lg:mb-8 max-w-xl">
                            {t("description")}
                        </p>

                        <HeroButtons scrollToSection={scrollToSection} t={t} />
                    </div>
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-0 right-[-4rem] w-80 h-80 bg-bvs-lightPurple rounded-full filter blur-3xl opacity-20"></div>
                        <div className="absolute bottom-0 left-[-4rem] w-72 h-72 bg-bvs-purple rounded-full filter blur-2xl opacity-20"></div>
                    </div>

                    {/* Image */}
                    <div className="hidden lg:block grid-in-image ml-auto">
                        <Parallax speed={-10}>
                            <div className="relative w-full max-w-lg">
                                <div className="absolute -top-4 -left-4 w-72 h-72 bg-bvs-purple rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
                                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-bvs-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>

                                <div className="bg-white rounded-2xl shadow-xl p-4">
                                    <div className="rounded-xl bg-gray-50 flex flex-col items-center overflow-hidden aspect-[5/3] w-full relative min-h-[180px] md:min-h-[300px]">
                                        <Image
                                            src={hero_image}
                                            alt="Illustration of code editor interface"
                                            width={800}
                                            height={600}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover rounded-xl"
                                            priority
                                            fetchPriority="high"
                                            placeholder="blur"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-32 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-10 h-16 border-2 border-bvs-accent/80 rounded-full flex justify-center mb-1">
                        <div className="w-1 h-3 bg-bvs-accent/80 rounded-full mt-2 animate-scroll"></div>
                    </div>
                    <span className="text-sm text-[#58758D]">{t("scroll")}</span>
                </div>
            </div>
        </div>
    );
}
