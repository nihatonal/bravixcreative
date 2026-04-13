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

    // /tr/blog/slug
    if (segments[1] === "blog" && segments[2]) {
      const currentSlug = segments[2];
      const translationGroup = blogSlugToGroupMap[currentSlug];
      const mappedSlug =
        translationGroup
          ? blogSlugMapping[translationGroup]?.[targetLocale]
          : undefined;

      newPathname = mappedSlug
        ? `/${targetLocale}/blog/${mappedSlug}`
        : `/${targetLocale}/blog/${currentSlug}`;
    }

    // /tr/project/slug/id
    else if (segments[1] === "project" && segments[2] && segments[3]) {
      const currentSlug = segments[2];
      const id = segments[3];

      const mappedSlug =
        projectSlugMapping[id as keyof typeof projectSlugMapping]?.[targetLocale];

      newPathname = mappedSlug
        ? `/${targetLocale}/project/${mappedSlug}/${id}`
        : `/${targetLocale}/project/${currentSlug}/${id}`;
    }

    // /tr/some-page
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

    // /tr
    else {
      newPathname = `/${targetLocale}`;
    }

    router.replace(newPathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
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