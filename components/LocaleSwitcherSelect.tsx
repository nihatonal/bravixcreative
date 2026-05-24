"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname } from "next/navigation";

import { slugMap } from "@/utils/slugMap";
import { projectSlugMapping } from "@/utils/projectSlugMapping";
import {
  blogSlugMapping,
  blogSlugToGroupMap,
  type Locale,
} from "@/utils/generated/blogSlugMapping.generated";

import {
  getServicePath,
  resolveServiceSlugFromPath,
} from "@/lib/service-routes";

import {
  getProjectIdBySlug,
  getProjectPath,
  getProjectsPath,
  isProjectSection,
} from "@/lib/project-routes";

type Props = {
  defaultValue: Locale;
  label: string;
};

const locales: Locale[] = ["tr", "en", "ru"];

export default function LocaleSwitcherSelect({
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    const targetLocale = nextLocale as Locale;
    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = (segments[0] as Locale) || "tr";

    let newPathname = pathname;

    // Blog detail
    if (segments[1] === "blog" && segments[2]) {
      const currentSlug = segments[2];
      const translationGroup = blogSlugToGroupMap[currentSlug];

      const mappedSlug = translationGroup
        ? blogSlugMapping[translationGroup]?.[targetLocale]
        : undefined;

      newPathname = mappedSlug
        ? `/${targetLocale}/blog/${mappedSlug}`
        : `/${targetLocale}/blog/${currentSlug}`;
    }

    // Projects listing
    else if (
      segments[1] &&
      isProjectSection(currentLocale, segments[1]) &&
      !segments[2]
    ) {
      newPathname = getProjectsPath(targetLocale);
    }

    // Project detail
    else if (
      segments[1] &&
      segments[2] &&
      isProjectSection(currentLocale, segments[1])
    ) {
      const currentProjectSlug = segments[2];
      const projectId = getProjectIdBySlug(currentLocale, currentProjectSlug);

      const mappedSlug = projectId
        ? projectSlugMapping[projectId as keyof typeof projectSlugMapping]?.[
            targetLocale
          ]
        : undefined;

      newPathname = mappedSlug
        ? getProjectPath(targetLocale, mappedSlug)
        : getProjectsPath(targetLocale);
    }

    // Service detail
    else if (segments[1] && segments[2]) {
      const section = segments[1];
      const servicePublicSlug = segments[2];

      const serviceSlug = resolveServiceSlugFromPath(
        currentLocale,
        section,
        servicePublicSlug
      );

      if (serviceSlug) {
        newPathname = getServicePath(targetLocale, serviceSlug);
      } else {
        segments[0] = targetLocale;
        newPathname = `/${segments.join("/")}`;
      }
    }

    // Legal/static pages
    else if (segments[1]) {
      const currentSlug = segments[1];

      const foundEntry = Object.entries(slugMap).find(
        ([, value]) => value[currentLocale] === currentSlug
      );

      if (foundEntry) {
        const newSlug = foundEntry[1][targetLocale];
        newPathname = `/${targetLocale}/${newSlug}`;
      } else {
        segments[0] = targetLocale;
        newPathname = `/${segments.join("/")}`;
      }
    }

    // Home
    else {
      newPathname = `/${targetLocale}`;
    }

    router.replace(newPathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className="w-[60px] h-8 px-3 pl-1 border-none bg-transparent focus:ring-0 focus:ring-offset-0 text-bvs-mutedText"
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent className="bg-[#d4cde4] border border-1 border-purple z-[9999]">
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale} className="cursor-pointer">
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}