// components/LayoutShell.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideLayout = pathname.includes("/not-found"); // veya başka özel sayfa path'leri

    return (
        <div className="antialiased">
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}
        </div>
    );
}
