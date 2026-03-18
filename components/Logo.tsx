import { cn } from "@/lib/utils";
import Image from "@/node_modules/next/image";
import { usePathname, useRouter } from "@/node_modules/next/navigation";
import { handleMenuNavigation } from "@/utils/navigation";

import React from "react";
import logo from '../assets/webp/bravix.png'
const Logo = ({
    className,
    spanDesign,
}: {
    className?: string;
    spanDesign?: string;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const scrollToHome = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router
        });
    };
    return (
        <div className="flex text-bvs-logoText">
            <div className="group relative grid grid-cols-[1fr_2fr]">
                <Image
                    src={logo}
                    alt="bravix logo"
                    width={46}
                    height={46}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover ml-auto"
                    priority
                    fetchPriority="high"
                />
                <button
                    aria-label="logo_button"
                    className={cn(
                        "flex flex-col text-2xl leading-none text-bvs-logoText font-black tracking-wider uppercase hoverEffect group font-sans relative overflow-hidden shine-effect",
                        className
                    )}
                    onClick={() => scrollToHome("home")}
                >
                    BRAVIX
                    <span
                        className={cn(
                            "lowercase text-sm font-medium hoverEffect",
                            spanDesign
                        )}
                    >
                        creative
                    </span>
                </button>
            </div>

        </div>
    );
};

export default Logo;    