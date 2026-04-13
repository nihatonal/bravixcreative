import type { Project } from "@/types/Project";
import ProjectDetails from "./ProjectDetails";

export default function ProjectDetailsWrapper({
    project,
    locale,
}: {
    project: Project;
    locale: string;
}) {
    return <ProjectDetails project={project} locale={locale} />;
}