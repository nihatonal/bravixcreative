import Link from "next/link";
import type { Locale } from "@/i18n/routing";
import type { CaseStudy } from "@/lib/service-data";

type FaqItem = {
  question: string;
  answer: string;
};

type TranslationShape = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustStrip: string[];
  whatWeBuild: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: {
      step: string;
      title: string;
      text: string;
    }[];
  };
  selectedWork: {
    eyebrow: string;
    title: string;
    description: string;
    portfolioCta: string;
  };
  whyBravix: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
};

type Props = {
  locale: Locale;
  t: TranslationShape;
  caseStudies: CaseStudy[];
};

export default function WebDevelopmentPage({
  locale,
  t,
  caseStudies,
}: Props) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const contactHref = `/${locale}#contact`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-bvs-light text-bvs-darkColorL">
        <section className="border-b border-[#D8C9BC]/60 bg-[radial-gradient(circle_at_top_right,_rgba(242,154,63,0.10),_transparent_30%),linear-gradient(to_bottom,#FCFAF7,#F8F3EE)]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
            <div className="max-w-5xl">
              <p className="mb-5 text-sm uppercase tracking-[0.24em] text-bvs-lightColor">
                {t.hero.eyebrow}
              </p>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-bvs-logoText md:text-6xl">
                {t.hero.title}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-bvs-mutedText md:text-lg">
                {t.hero.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-full bg-bvs-logoText px-6 py-3 text-sm font-medium text-white transition hover:bg-bvs-dark"
                >
                  {t.hero.primaryCta}
                </Link>

                <Link
                  href={`/${locale}/projects`}
                  className="inline-flex items-center justify-center rounded-full border border-bvs-logoText/15 bg-white/70 px-6 py-3 text-sm font-medium text-bvs-logoText transition hover:bg-white"
                >
                  {t.hero.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8C9BC]/60 bg-[#FBF7F2]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3 md:px-8">
            {t.trustStrip.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#E4D8CD] bg-white/70 px-5 py-5 text-sm leading-7 text-bvs-mutedText backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#D8C9BC]/60">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
            <div className="grid gap-16 lg:grid-cols-[1.05fr_1.45fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-bvs-lightColor">
                  {t.whatWeBuild.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                  {t.whatWeBuild.title}
                </h2>
                <p className="mt-6 max-w-lg text-base leading-8 text-bvs-mutedText">
                  {t.whatWeBuild.description}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {t.whatWeBuild.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-[#E2D5CA] bg-white/80 p-7 shadow-[0_10px_30px_rgba(36,31,28,0.04)]"
                  >
                    <h3 className="text-xl font-medium tracking-[-0.01em] text-bvs-logoText">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-bvs-mutedText">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8C9BC]/60 bg-[#FBF7F2]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-bvs-lightColor">
                {t.process.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                {t.process.title}
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {t.process.items.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[28px] border border-[#E2D5CA] bg-white/80 p-7 shadow-[0_10px_30px_rgba(36,31,28,0.04)]"
                >
                  <div className="text-sm tracking-[0.18em] text-bvs-lightColor">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-xl font-medium tracking-[-0.01em] text-bvs-logoText">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-bvs-mutedText">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8C9BC]/60">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-bvs-lightColor">
                  {t.selectedWork.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                  {t.selectedWork.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-bvs-mutedText">
                  {t.selectedWork.description}
                </p>
              </div>

              <Link
                href={`/${locale}/projects`}
                className="text-sm font-medium text-bvs-logoText underline underline-offset-4 transition hover:text-bvs-accent"
              >
                {t.selectedWork.portfolioCta}
              </Link>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {caseStudies.map((item) => (
                <article
                  key={item.href}
                  className="rounded-[28px] border border-[#E2D5CA] bg-[#FFFDFC] p-7 shadow-[0_10px_28px_rgba(36,31,28,0.04)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-bvs-lightColor">
                    {item.serviceType}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium leading-snug tracking-[-0.02em] text-bvs-logoText">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-bvs-lightColor">
                    {item.industry}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-bvs-mutedText">
                    {item.summary}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center text-sm font-medium text-bvs-logoText transition hover:text-bvs-accent"
                  >
                    View project
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8C9BC]/60 bg-[#FBF7F2]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-bvs-lightColor">
                  {t.whyBravix.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                  {t.whyBravix.title}
                </h2>
              </div>

              <div className="grid gap-5">
                {t.whyBravix.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-[#E2D5CA] bg-white/80 px-5 py-5 text-sm leading-7 text-bvs-mutedText shadow-[0_10px_24px_rgba(36,31,28,0.03)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#D8C9BC]/60">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-bvs-lightColor">
                {t.faq.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                {t.faq.title}
              </h2>
            </div>

            <div className="mt-14 rounded-[32px] border border-[#DDD0C4] bg-white/80 backdrop-blur-sm">
              {t.faq.items.map((item, index) => (
                <details
                  key={item.question}
                  className={`group px-6 py-6 md:px-8 ${
                    index !== t.faq.items.length - 1
                      ? "border-b border-[#E7DBD0]"
                      : ""
                  }`}
                >
                  <summary className="cursor-pointer list-none text-lg font-medium tracking-[-0.01em] text-bvs-logoText">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-bvs-mutedText">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#241F1C_0%,#120E0C_100%)] text-white">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-8 md:py-32">
            <p className="text-sm uppercase tracking-[0.24em] text-white/60">
              {t.finalCta.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75">
              {t.finalCta.description}
            </p>

            <div className="mt-10">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center rounded-full bg-[#FFF8F1] px-6 py-3 text-sm font-medium text-bvs-logoText transition hover:bg-white"
              >
                {t.finalCta.button}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}