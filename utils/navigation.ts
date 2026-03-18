import { smoothScrollTo } from "./scroll";

interface HandleMenuNavigationProps {
  id: string;
  pathname: string;
  router: any; // useRouter hook'undan alınan router instance
  setSelectedSection?: (id: string) => void;
  allowedPaths?: string[];
  forceScroll?: boolean;
}

export const handleMenuNavigation = ({
  id,
  pathname,
  router,
  setSelectedSection,
  allowedPaths = [],
  forceScroll = false,
}: HandleMenuNavigationProps) => {
  const locale = pathname.split("/")[1];
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isAllowedPage =
    isHomePage || allowedPaths.includes(pathname) || forceScroll;

  setSelectedSection?.(id);

  if (isAllowedPage) {
    const section = document.getElementById(id);
    if (section) {
      smoothScrollTo(section.offsetTop, 800);
    }
  } else {
    router.push(`/${locale}`);
    sessionStorage.setItem("scrollTo", id);
  }
};
