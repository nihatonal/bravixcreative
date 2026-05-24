"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";

type ScrollHomeLinkProps = {
  locale: string;
  sectionId: string;
  className?: string;
  children: ReactNode;
};

export default function ScrollHomeLink({
  locale,
  sectionId,
  className,
  children,
}: ScrollHomeLinkProps) {
  const pathname = usePathname();
  const homePath = `/${locale}`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const isHomePage = pathname === homePath;

    if (isHomePage) {
      e.preventDefault();

      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    sessionStorage.setItem("pendingScrollSection", sectionId);
  };

  return (
    <Link href={homePath} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}