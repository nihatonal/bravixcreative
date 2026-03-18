"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useParams } from "next/navigation";
import { slugMap } from "@/utils/slugMap";
import { projectSlugMapping } from "@/utils/projectSlugMapping";

type Locale = "tr" | "en" | "ru";

type Props = {
  defaultValue: string;
  label: string;
};

const locales: Locale[] = ["tr", "en", "ru"];

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    const currentLocale =
      ((Array.isArray(params.locale) ? params.locale[0] : params.locale) as Locale) || "tr";
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    let newPathname = `/${nextLocale}`;

    if (id && slug) {
      const projectData =
        projectSlugMapping[id as keyof typeof projectSlugMapping];
      const mappedSlug = projectData
        ? projectData[nextLocale as Locale]
        : null;

      if (mappedSlug) {
        newPathname = `/${nextLocale}/project/${mappedSlug}/${id}`;
      } else {
        console.warn(
          `Slug mapping not found for ID: ${id} and Locale: ${nextLocale}`
        );
        newPathname = `/${nextLocale}/project/${slug}/${id}`;
      }
    } else if (slug) {
      const foundEntry = Object.entries(slugMap).find(
        ([, value]) => value[currentLocale as Locale] === slug
      );

      if (foundEntry) {
        const newSlug = foundEntry[1][nextLocale as Locale];
        newPathname = `/${nextLocale}/${newSlug}`;
      } else {
        newPathname = `/${nextLocale}/${slug}`;
      }
    }

    router.replace(newPathname);
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className="w-[60px] h-8 px-3 pl-1 border-none bg-transparent focus:ring-0 focus:ring-offset-0"
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