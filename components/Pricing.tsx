"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, ShieldCheck, Clock3 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePlan } from "@/lib/PlanContext";
import { pricingFeatures } from "@/constants/pricingFeatures";

interface RawPlan {
  key: "basic" | "pro" | "premium";
  highlighted: boolean;
}

type SupportedLocale = keyof typeof pricingFeatures;

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const locale = useLocale() as SupportedLocale;
  const t = useTranslations("pricing");
  const { setSelectedPlan } = usePlan();

  const rawPlans: RawPlan[] = [
    { key: "basic", highlighted: false },
    { key: "pro", highlighted: true },
    { key: "premium", highlighted: false },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  const handleClick = (planLabel: string) => {
    setSelectedPlan(planLabel);
    scrollToSection("contact");
  };

  const trustItems = [
    {
      icon: ShieldCheck,
      label:
        locale === "tr"
          ? "Gizli ücret yok"
          : locale === "ru"
            ? "Без скрытых платежей"
            : "No hidden fees",
    },
    {
      icon: Sparkles,
      label:
        locale === "tr"
          ? "Özel tasarım yaklaşımı"
          : locale === "ru"
            ? "Индивидуальный подход"
            : "Custom design approach",
    },
    {
      icon: Clock3,
      label:
        locale === "tr"
          ? "Tek seferlik ödeme"
          : locale === "ru"
            ? "Разовая оплата"
            : "One-time payment",
    },
  ];

  const helperText = {
    oneTime:
      locale === "tr"
        ? "Tek seferlik ödeme"
        : locale === "ru"
          ? "Разовая оплата"
          : "One-time payment",
    noHidden:
      locale === "tr"
        ? "Gizli ücret yok"
        : locale === "ru"
          ? "Без скрытых платежей"
          : "No hidden fees",
    customTitle:
      locale === "tr"
        ? "Özel kapsam mı gerekiyor?"
        : locale === "ru"
          ? "Нужен индивидуальный объём работ?"
          : "Need a custom scope?",
    customButton:
      locale === "tr"
        ? "Özel teklif al"
        : locale === "ru"
          ? "Получить индивидуальное предложение"
          : "Get custom quote",
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 px-2 lg:px-20 bg-gradient-to-b from-white via-bvs-gray/60 to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[8%] top-16 h-40 w-40 rounded-full bg-bvs-lightPurple/15 blur-3xl" />
        <div className="absolute right-[10%] top-28 h-52 w-52 rounded-full bg-bvs-logoX/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-bvs-purple/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 backdrop-blur-sm px-4 py-1 text-sm font-medium text-bvs-purple mb-4 shadow-sm">
            {locale === "tr"
              ? "Şeffaf fiyatlandırma"
              : locale === "ru"
                ? "Прозрачные тарифы"
                : "Transparent pricing"}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bvs-darkColorL">
            {t("title")}
          </h2>

          <p className="text-bvs-lightColor max-w-2xl mx-auto leading-7">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-bvs-purple/10 bg-white/80 px-4 py-2 text-sm text-bvs-lightColor shadow-sm backdrop-blur-sm"
              >
                <Icon size={16} className="text-bvs-purple" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {rawPlans.map((plan) => {
            const name = t(`${plan.key}.title`);
            const price = t(`${plan.key}.price`);
            const description = t(`${plan.key}.description`);
            const features = pricingFeatures[locale]?.[plan.key] || [];
            const cta = t(`${plan.key}.cta`);

            return (
              <motion.div
                key={plan.key}
                variants={itemVariants}
                className={`relative rounded-[24px] overflow-hidden h-full ${
                  plan.highlighted
                    ? "border-2 border-bvs-purple shadow-[0_22px_60px_rgba(126,105,171,0.18)] md:-translate-y-3 bg-white"
                    : "border border-black/5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] bg-white/95"
                }`}
              >
                {plan.highlighted && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bvs-primary via-bvs-accent to-bvs-primary" />
                    <div className="absolute top-5 right-5 z-10">
                      <span className="inline-flex items-center rounded-full bg-bvs-purple px-3 py-1 text-xs font-semibold text-white shadow-md">
                        {t("popular")}
                      </span>
                    </div>
                  </>
                )}

                <div
                  className={`h-full p-6 md:p-8 flex flex-col ${
                    plan.highlighted
                      ? "bg-gradient-to-b from-white to-bvs-lightPurple/5"
                      : "bg-white"
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-bvs-darkColorL mb-2">
                      {name}
                    </h3>

                    <p className="text-bvs-lightColor text-sm leading-6 min-h-[48px]">
                      {description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-bvs-darkColorL">
                        {price}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-bvs-logoX/15 px-3 py-1 text-xs font-medium text-bvs-darkColorL">
                        {helperText.oneTime}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-bvs-purple/10 px-3 py-1 text-xs font-medium text-bvs-purple">
                        {helperText.noHidden}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 mb-8 flex-grow">
                    {features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            plan.highlighted
                              ? "bg-bvs-purple/12 text-bvs-purple"
                              : "bg-bvs-gray text-bvs-darkColorL"
                          }`}
                        >
                          <Check size={15} />
                        </div>
                        <span className="text-[15px] leading-6 text-bvs-lightColor">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    aria-label={`${name} ${cta}`}
                    className={`mt-auto w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-bvs-purple text-white hover:bg-bvs-accent shadow-md hover:shadow-lg"
                        : "bg-white border border-bvs-purple/30 text-bvs-purple hover:bg-bvs-purple/5"
                    }`}
                    onClick={() => handleClick(`${name} ${price}`)}
                  >
                    {cta}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12"
        >
          <div className="rounded-[24px] border border-bvs-purple/10 bg-white/80 backdrop-blur-sm shadow-sm px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-bvs-darkColorL mb-1">
                {helperText.customTitle}
              </h3>
              <p className="text-bvs-lightColor">
                {t("custom")}
              </p>
            </div>

            <button
              aria-label={helperText.customButton}
              onClick={() => handleClick("Custom Quote")}
              className="inline-flex items-center justify-center rounded-xl bg-bvs-dark text-white px-6 py-3 font-medium hover:bg-bvs-logoText transition-colors"
            >
              {helperText.customButton}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}