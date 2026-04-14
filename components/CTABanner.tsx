import { useTranslations } from "next-intl";

export default function CTABanner(): JSX.Element {
  const t = useTranslations("cta");

  return (
    <section className="bg-gradient-to-r from-bvs-primary to-bvs-accent px-2 py-20 text-white lg:px-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          {t("title")}
        </h2>

        <p className="mx-auto mb-10 max-w-4xl text-xl opacity-90">
          {t("subtitle")}
        </p>

        <a
          href="#contact"
          aria-label="contact button"
          className="inline-block rounded-[8px] bg-white px-8 py-2 text-lg text-bvs-purple hover:bg-white/90"
        >
          {t("button")}
        </a>
      </div>
    </section>
  );
}