"use client";

import { usePlan } from "@/lib/PlanContext";

interface PricingActionButtonProps {
  label: string;
  planValue: string;
  variant?: "primary" | "secondary" | "dark";
  ariaLabel?: string;
}

export default function PricingActionButton({
  label,
  planValue,
  variant = "primary",
  ariaLabel,
}: PricingActionButtonProps) {
  const { setSelectedPlan } = usePlan();

  const handleClick = () => {
    setSelectedPlan(planValue);

    const element = document.getElementById("contact");
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const variantClass =
    variant === "primary"
      ? "bg-bvs-purple text-white shadow-md hover:bg-bvs-accent hover:shadow-lg"
      : variant === "dark"
      ? "bg-bvs-dark text-white hover:bg-bvs-logoText"
      : "border border-bvs-purple/30 bg-white text-bvs-purple hover:bg-bvs-purple/5";

  return (
    <button
      type="button"
      aria-label={ariaLabel ?? label}
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300 ${variantClass}`}
    >
      {label}
    </button>
  );
}