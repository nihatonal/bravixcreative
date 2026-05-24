"use client";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[900px]" />,
});

export default function ContactSection() {
  return <Contact />;
}