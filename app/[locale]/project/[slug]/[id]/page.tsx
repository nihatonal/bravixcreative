import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectById, getAllProjects } from '@/lib/projectService';
import ProjectDetailsWrapper from '@/components/ProjectDetailsWrapper';
import Script from 'next/script';

type Props = {
  params: Promise<{ locale: string; slug: string; id: string }>;
};

const siteUrl = 'https://www.bravixcreative.com';
const langs = ['tr', 'en', 'ru'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const project = getProjectById(id, locale);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const canonical = `${siteUrl}/${locale}/project/${project.slug}/${id}`;

  const alternatesEntries = langs
    .map((lng) => {
      const proj = getProjectById(id, lng);
      if (!proj) return null;
      return [lng, `${siteUrl}/${lng}/project/${proj.slug}/${id}`];
    })
    .filter(Boolean) as [string, string][];

  const alternates = Object.fromEntries(alternatesEntries);

  const ogImage = project.images?.[0]
    ? `${siteUrl}${project.images[0]}`
    : `${siteUrl}/default-og.jpg`;

  return {
    title: project.seoTitle ?? `${project.seoTitle} | Bravix Creative`,
    description: project.seoDescription ?? project.description,
    keywords: project.keywords ?? [],
    alternates: {
      canonical,
      languages: {
        ...alternates,
        'x-default': alternates['en'] ?? canonical,
      },
    },
    openGraph: {
      title: project.seoTitle ?? `${project.seoTitle} | Bravix Creative`,
      description: project.seoDescription ?? project.description,
      url: canonical,
      siteName: 'Bravix Creative',
      type: 'article',
      locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle ?? `${project.seoTitle} | Bravix Creative`,
      description: project.seoDescription ?? project.description,
      images: [ogImage],
      creator: '@bravixcreative',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, id, slug } = await params;
  const project = getProjectById(id, locale);

  if (!project) {
    return notFound();
  }

  if (project.slug !== slug) {
    redirect(`/${locale}/project/${project.slug}/${id}`);
  }

  const canonical = `${siteUrl}/${locale}/project/${project.slug}/${id}`;

  return (
    <>
      <ProjectDetailsWrapper project={project} />

      <Script
        id={`schema-${project.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.seoTitle,
            description: project.description,
            url: canonical,
            image: project.images.map(
              (img) => `https://www.bravixcreative.com${img}`
            ),
            creator: {
              '@type': 'Organization',
              name: 'Bravix Creative',
              url: 'https://www.bravixcreative.com',
            },
            inLanguage: locale,
          }),
        }}
      />
    </>
  );
}

export async function generateStaticParams() {
  const allProjects = getAllProjects();
  const paths: Array<{ locale: string; slug: string; id: string }> = [];

  allProjects.forEach((project) => {
    langs.forEach((locale) => {
      const localizedProject = getProjectById(project.id.toString(), locale);

      if (localizedProject) {
        paths.push({
          locale,
          slug: localizedProject.slug,
          id: project.id.toString(),
        });
      }
    });
  });

  return paths;
}