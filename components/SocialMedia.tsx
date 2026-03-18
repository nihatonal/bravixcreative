import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from '@/node_modules/next/link';
import { Linkedin, Instagram, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0.5 94.187 511 323.626"
        fill="currentColor"
        {...props}
    >
        <path d="M206.729 238.87s48.358-3.59 48.358-60.297c0-56.711-39.563-84.387-89.678-84.387H.5v316.909h164.909s100.671 3.18 100.671-93.537c0 .001 4.389-78.688-59.351-78.688zm-53.19-88.357h11.87s22.416 0 22.416 32.973c0 32.969-13.183 37.749-28.136 37.749H73.161v-70.722h80.378zm7.21 204.257H73.161v-84.69h92.248s33.41-.438 33.41 43.522c0 37.068-24.954 40.888-38.07 41.168zm239.593-179.953c-121.873 0-121.765 121.766-121.765 121.766s-8.362 121.141 121.765 121.141c0 0 108.438 6.195 108.438-84.271h-55.768s1.86 34.068-50.81 34.068c0 0-55.777 3.738-55.777-55.135H510.64c0-.001 17.968-137.569-110.298-137.569zm-54.53 95.263s6.81-48.846 55.769-48.846c48.949 0 48.336 48.846 48.336 48.846H345.812zm117.096-118.199H332.159v-39.025h130.749v39.025z" />
    </svg>
);

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
    status_link?: string;
}


const socialLink = [
    {
        title: "Whatsapp",
        href: "https://wa.me/79099316670",
        icon: <FaWhatsapp className={"h-6 w-6"} />,
        status: true
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/bravixcreative",
        icon: <Instagram size={24} />,
        status: true
    }
    ,
    {
        title: "Behance",
        href: "https://www.behance.net/nihatnal",
        icon: <BehanceIcon width={24} height={24} />,
        status: false
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/nihat-onal-82a4412a0",
        icon: <Linkedin size={24} />,
        status: false
    },
    {
        title: "GitHub",
        href: "https://github.com/nihatonal",
        icon: <Github size={24} />,
        status: false
    }
];

const SocialMedia = ({ className, iconClassName, tooltipClassName, status_link }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5 mx-auto", className)}>
                {socialLink?.filter((el) => el.status === true).map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <Link
                                aria-label="social link"
                                key={item?.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item?.href}
                                className={cn(
                                    "p-2 border rounded-full transition",
                                    iconClassName
                                )}
                            >
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                            className={cn(
                                "bg-white text-dvs-darkColor font-semibold",
                                tooltipClassName
                            )}
                        >
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
                {socialLink?.filter((el) => el.status === false).map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <button
                                aria-label="social link"
                                key={item?.title}
                                rel="noopener noreferrer"
                                className={cn(
                                    "p-2 border rounded-full transition",
                                    iconClassName
                                )}
                                onClick={() => alert(status_link)}
                            >
                                {item?.icon}
                            </button>
                        </TooltipTrigger>
                        <TooltipContent
                            className={cn(
                                "bg-white text-dvs-darkColor font-semibold",
                                tooltipClassName
                            )}
                        >
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialMedia;