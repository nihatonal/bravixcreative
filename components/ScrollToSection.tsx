"use client";

import { useEffect } from "react";

export default function ScrollToSection() {
    useEffect(() => {
        const scrollToId = sessionStorage.getItem('scrollTo');
        if (scrollToId) {
            const section = document.getElementById(scrollToId);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                    sessionStorage.removeItem('scrollTo');
                }, 300);
            }
        }
    }, []);

    return null; // Görsel olarak bir şey render etmiyoruz
}
