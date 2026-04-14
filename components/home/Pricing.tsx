import { Check, Sparkles, ShieldCheck, Clock3 } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { pricingFeatures } from "@/constants/pricingFeatures";
import PricingActionButton from "./PricingActionButton";

interface RawPlan {
  key: "basic" | "pro" | "premium";
  highlighted: boolean;
}

type SupportedLocale = keyof typeof pricingFeatures;

const localeText = {
  en: {
    eyebrow: "Transparent pricing",
    noHiddenFees: "No hidden fees",
    customDesign: "Custom design approach",
    oneTimePayment: "One-time payment",
    customTitle: "Need a custom scope?",
    customButton: "Get custom quote",
    customPlanValue: "Custom Quote",
  },
  tr: {
    eyebrow: "Şeffaf fiyatlandırma",
    noHiddenFees: "Gizli ücret yok",
    customDesign: "Özel tasarım yaklaşımı",
    oneTimePayment: "Tek seferlik ödeme",
    customTitle: "Özel kapsam mı gerekiyor?",
    customButton: "Özel teklif al",
    customPlanValue: "Özel Teklif",
  },
  ru: {
    eyebrow: "Прозрачные тарифы",
    noHiddenFees: "Без скрытых платежей",
    customDesign: "Индивидуальный подход",
    oneTimePayment: "Разовая оплата",
    customTitle: "Нужен индивидуальный объём работ?",
    customButton: "Получить индивидуальное предложение",
    customPlanValue: "Индивидуальное предложение",
  },
} as const;

export default async function Pricing() {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("pricing");

  const copy = localeText[locale] ?? localeText.en;

  const rawPlans: RawPlan[] = [
    { key: "basic", highlighted: false },
    { key: "pro", highlighted: true },
    { key: "premium", highlighted: false },
  ];

  const trustItems = [
    {
      icon: ShieldCheck,
      label: copy.noHiddenFees,
    },
    {
      icon: Sparkles,
      label: copy.customDesign,
    },
    {
      icon: Clock3,
      label: copy.oneTimePayment,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-white via-bvs-gray/60 to-white px-2 py-20 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[8%] top-16 h-40 w-40 rounded-full bg-bvs-lightPurple/15 blur-3xl" />
        <div className="absolute right-[10%] top-28 h-52 w-52 rounded-full bg-bvs-logoX/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-bvs-purple/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-8 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-1 text-sm font-medium text-bvs-mutedText shadow-sm backdrop-blur-sm">
            {copy.eyebrow}
          </span>

          <h2 className="mb-4 text-3xl font-bold text-bvs-darkColorL md:text-4xl">
            {t("title")}
          </h2>

          <p className="mx-auto max-w-2xl leading-7 text-bvs-mutedText">
            {t("subtitle")}
          </p>
        </div>

        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-2 text-sm text-bvs-mutedText shadow-sm backdrop-blur-sm"
              >
                <Icon size={16} className="text-bvs-purple" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {rawPlans.map((plan) => {
            const name = t(`${plan.key}.title`);
            const price = t(`${plan.key}.price`);
            const description = t(`${plan.key}.description`);
            const features = pricingFeatures[locale]?.[plan.key] || [];
            const cta = t(`${plan.key}.cta`);

            return (
              <div
                key={plan.key}
                className={`relative h-full overflow-hidden rounded-[24px] ${
                  plan.highlighted
                    ? "border-2 border-bvs-purple bg-white shadow-[0_22px_60px_rgba(126,105,171,0.18)] md:-translate-y-3"
                    : "border border-black/20 bg-white/95 shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
                }`}
              >
                {plan.highlighted && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bvs-primary via-bvs-accent to-bvs-primary" />
                    <div className="absolute right-5 top-5 z-10">
                      <span className="inline-flex items-center rounded-full bg-bvs-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
                        {t("popular")}
                      </span>
                    </div>
                  </>
                )}

                <div
                  className={`flex h-full flex-col p-6 md:p-8 ${
                    plan.highlighted
                      ? "bg-gradient-to-b from-white to-bvs-lightPurple/5"
                      : "bg-white"
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="mb-2 text-2xl font-bold text-bvs-darkColorL">
                      {name}
                    </h3>

                    <p className="min-h-[48px] text-sm leading-6 text-bvs-mutedText">
                      {description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-extrabold tracking-tight text-bvs-darkColorL md:text-5xl">
                        {price}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-bvs-logoX/15 px-3 py-1 text-xs font-medium text-bvs-darkColorL">
                        {copy.oneTimePayment}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-bvs-purple/10 px-3 py-1 text-xs font-medium text-bvs-mutedText">
                        {copy.noHiddenFees}
                      </span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-grow space-y-3.5">
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
                        <span className="text-[15px] leading-6 text-bvs-mutedText">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <PricingActionButton
                    label={cta}
                    planValue={`${name} ${price}`}
                    variant={plan.highlighted ? "primary" : "secondary"}
                    ariaLabel={`${name} ${cta}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="flex flex-col items-center justify-between gap-4 rounded-[24px] border border-bvs-purple/10 bg-white/80 px-6 py-6 shadow-sm backdrop-blur-sm md:flex-row md:px-8 md:py-7">
            <div className="text-center md:text-left">
              <h3 className="mb-1 text-xl font-semibold text-bvs-darkColorL">
                {copy.customTitle}
              </h3>
              <p className="text-bvs-mutedText">{t("custom")}</p>
            </div>

            <PricingActionButton
              label={copy.customButton}
              planValue={copy.customPlanValue}
              variant="dark"
              ariaLabel={copy.customButton}
            />
          </div>
        </div>
      </div>
    </section>
  );
}