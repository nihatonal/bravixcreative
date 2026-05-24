type HandleMenuNavigationProps = {
  id: string;
  pathname: string;
  router: {
    push: (href: string) => void;
  };
  setSelectedSection?: (section: string) => void;
};

const HOME_SECTION_IDS = [
  "home",
  "about",
  "services",
  "portfolio",
  "pricing",
  "contact",
] as const;

export function handleMenuNavigation({
  id,
  pathname,
  router,
  setSelectedSection,
}: HandleMenuNavigationProps) {
  const locale = pathname.split("/")[1];
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isHomeSection = HOME_SECTION_IDS.includes(
    id as (typeof HOME_SECTION_IDS)[number]
  );

  setSelectedSection?.(id);

  if (id === "blog") {
    router.push(`/${locale}/blog`);
    return;
  }

  if (id === "portfolio") {
    router.push(`/${locale}/projects`);
    return;
  }

  if (!isHomeSection) {
    return;
  }

  if (isHomePage) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    return;
  }

  sessionStorage.setItem("pendingScrollSection", id);
  router.push(`/${locale}`);
}