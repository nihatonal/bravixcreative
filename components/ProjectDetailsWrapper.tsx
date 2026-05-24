import type { Project } from "@/types/Project";
import ProjectDetails from "./ProjectDetails";
import type { Locale } from "@/i18n/routing";
export default function ProjectDetailsWrapper({
    project,
    locale,
}: {
    project: Project;
    locale: Locale;
}) {
    return <ProjectDetails project={project} locale={locale} />;
}