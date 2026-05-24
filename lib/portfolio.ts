import { portfolioData, type Project } from "@/constants/portfolioData";


export type PortfolioCardProject = {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  category: string;
  type: string;
  technologies: string[];
  image: string;
};

export function getProjectsByLocale(locale: string): Project[] {
  return (
    portfolioData[locale as keyof typeof portfolioData] || portfolioData.en
  );
}

export function mapProjectsToCards(
  projects: Project[]
): PortfolioCardProject[] {
  return projects.map((project) => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    description: project.description,
    category: project.category,
    type: project.type,
    technologies: project.technologies ?? [],
    image: project.images?.[0] || "/placeholder.svg",
  }));
}

export function getPortfolioCardProjects(
  locale: string
): PortfolioCardProject[] {
  return mapProjectsToCards(getProjectsByLocale(locale));
}

export function getPortfolioPreviewProjects(
  locale: string,
  limit = 3
): PortfolioCardProject[] {
  return [...getPortfolioCardProjects(locale)].reverse().slice(0, limit);
}
