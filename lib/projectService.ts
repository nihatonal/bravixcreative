import { portfolioData } from "@/constants/portfolioData";
import type { Project } from "@/constants/portfolioData";

export function getProjectById(
  id: string,
  locale: string
): Project | undefined {
  const projects = portfolioData[locale] || portfolioData["en"];
  return projects.find((project) => project.id === id);
}
export function getAllProjects(): Project[] {
  const projectsMap = new Map<string, Project>();

  Object.keys(portfolioData).forEach((locale) => {
    portfolioData[locale].forEach((project) => {
      if (!projectsMap.has(project.id)) {
        projectsMap.set(project.id, project);
      }
    });
  });

  return Array.from(projectsMap.values());
}
