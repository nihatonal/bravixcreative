import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import type { Locale } from "@/utils/buildBlogSlugMap";

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;

  return (
    <div className="flex items-center hover:text-bvs-accent">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <LocaleSwitcherSelect
        defaultValue={locale}
        label="Select a locale"
      />
    </div>
  );
}