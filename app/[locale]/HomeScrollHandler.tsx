"use client";

import { useEffect } from "react";

export default function HomeScrollHandler() {
  useEffect(() => {
    const pendingSection = sessionStorage.getItem("pendingScrollSection");

    if (!pendingSection) return;

    const el = document.getElementById(pendingSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      sessionStorage.removeItem("pendingScrollSection");
    }
  }, []);

  return null;
}