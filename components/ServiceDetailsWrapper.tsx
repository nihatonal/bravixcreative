"use client";

import dynamic from "next/dynamic";
import type { Service } from "@/types/Services"; // veya birebir Project tipi
const ServiceDetails = dynamic(() => import("./ServiceDetails"), {
    loading: () => <p className="text-center py-20">Loading service details...</p>,
    ssr: false,
});

export default function ServiceDetailsWrapper({ service }: { service: Service }) {
    return <ServiceDetails service={service} />;
}