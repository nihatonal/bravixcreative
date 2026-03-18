// app/[locale]/HomePageClient.tsx
"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"), { ssr: false });
const Services = dynamic(() => import("@/components/Services_"), { ssr: false });
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: false });
const ScrollToSection = dynamic(() => import("@/components/ScrollToSection"), { ssr: false });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: false });
const CTABanner = dynamic(() => import("@/components/CTABanner"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"))
export default function HomePageClient() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <ScrollToSection />
            <Pricing />
            <CTABanner />
            <Skills />
            <Testimonials />
            <Contact />
        </>
    );
}
