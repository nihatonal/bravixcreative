"use client";

import dynamic from "next/dynamic";
import type { Project } from "@/types/Project"; // veya birebir Project tipi

const ProjectDetailsClient = dynamic(() => import("./ProjectDetailsClient"), {
    loading: () => <p className="text-center py-20">Loading project details...</p>,
    ssr: false,
});

export default function ProjectDetailsWrapper({ project }: { project: Project }) {
    return <ProjectDetailsClient project={project} />;
}
