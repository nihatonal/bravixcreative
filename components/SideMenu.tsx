import React, { FC, useState } from 'react'
// import Logo from './Logo';
import { X } from "lucide-react";
import { usePathname, useRouter } from '@/node_modules/next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks/index';
import { useTranslations } from "next-intl";
import Logo from './Logo';
import { handleMenuNavigation } from '@/utils/navigation';
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    const router = useRouter();
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
    const t = useTranslations("nav");

    const [selectedSection, setSelectedSection] = useState("home")
    const navItems = [
        { id: "home", label: t("home") },
        { id: "about", label: t("about") },
        { id: "services", label: t("services") },
        { id: "portfolio", label: t("portfolio") },
        { id: "pricing", label: t("pricing") },
        { id: "contact", label: t("contact") },
    ];

    const handleMenuClick = (id: string) => {
        handleMenuNavigation({
            id,
            pathname,
            router,
            setSelectedSection,
        });
    };


    return <div
        className={`fixed inset-y-0 h-screen left-0 z-50 w-full 
    bg-black/50 text-white/80 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"}
    hoverEffect`}
    >
        <div ref={sidebarRef} className='min-w-72 max-w-96 bg-[#144857] h-screen p-10
    border-r border-r-bvs-lightGreen flex flex-col gap-6 
    '>
            <div className='flex items-center justify-between gap-5'>
                <Logo />
                <button onClick={onClose}
                    aria-label="close modal"
                    className="hover:text-bvs-lightGreen hoverEffect">
                    <X />
                </button>
            </div>
            <div className='flex flex-col space-y-3.5 font-semibold tracking-wide text-stone-50'>
                {navItems?.map((item) => (
                    <button key={item?.id}
                        aria-label="nav button"
                        onClick={() => {
                            onClose()
                            handleMenuClick(item.id)
                        }}
                        className={`hover:text-bvs-lightPurple hoverEffect 
            ${selectedSection === item?.id && "text-bvs-lightPurple"}`}
                    >
                        {item?.label}
                    </button>
                ))}
            </div>
            <SocialMedia iconClassName="text-white hover:bg-white/20 backdrop-blur p-2 rounded-full transition-all hover:scale-105 duration-200" />
        </div>
    </div>

}

export default SideMenu