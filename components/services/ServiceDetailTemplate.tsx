import Link from "next/link";
import type { Locale } from "@/i18n/routing";
import type { CaseStudy } from "@/lib/service-data";
import type { ServicePageContent } from "@/lib/services";
import Image from "next/image";
import type { Post } from "@/types/post";
import BlogCard from "@/components/blog/BlogCard";
type Props = {
  locale: Locale;
  t: ServicePageContent;
  caseStudies: CaseStudy[];
  relatedPosts: Post[];
};

export default function ServiceDetailTemplate({
  locale,
  t,
  caseStudies,
  relatedPosts
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
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.meta.title,
    description: t.meta.description,
    provider: {
      "@type": "Organization",
      name: "Bravix Creative",
      url: "https://bravixcreative.com",
    },
    areaServed: "Worldwide",
    serviceType: t.hero.eyebrow,
  };

  const hasCaseStudies = t.selectedWork && caseStudies.length > 0;
  const related: Post[] =
    t.relatedInsights?.slugs
      .map((slug) => relatedPosts.find((post) => post.slug === slug))
      .filter((post): post is Post => Boolean(post)) ?? [];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <main className="bg-bvs-light text-bvs-darkColorL">
        <section className="relative overflow-hidden border-b border-[#D8C9BC]/60 bg-[radial-gradient(circle_at_top_right,_rgba(242,154,63,0.10),_transparent_30%),linear-gradient(to_bottom,#FCFAF7,#F8F3EE)]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#241F1C_1px,transparent_1px),linear-gradient(to_bottom,#241F1C_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(227,161,43,0.08),transparent_22%),radial-gradient(circle_at_85%_10%,rgba(242,154,63,0.10),transparent_24%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
            <div className="max-w-5xl">
              <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
                {t.hero.eyebrow}
              </p>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-bvs-logoText md:text-7xl">
                {t.hero.title}
              </h1>

              <p className="mt-8 max-w-xl text-[17px] leading-8 text-bvs-mutedText md:text-lg">
                {t.hero.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-bvs-logoText/90 px-6 py-3 text-sm font-medium text-white transition hover:bg-bvs-dark"
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
                <p className="text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
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
                    className="rounded-[28px] border border-[#E2D5CA] bg-white/75 p-7 shadow-[0_10px_30px_rgba(36,31,28,0.04)] backdrop-blur-sm"
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
        {t.whoItsFor && (
          <section className="border-b border-[#D8C9BC]/60 bg-[#FBF7F2]">
            <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
                    {t.whoItsFor.eyebrow}
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                    {t.whoItsFor.title}
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-bvs-mutedText">
                    {t.whoItsFor.description}
                  </p>
                </div>

                <div className="grid gap-4">
                  {t.whoItsFor.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-[#E2D5CA] bg-white/80 px-5 py-5 text-sm leading-7 text-bvs-mutedText shadow-[0_10px_24px_rgba(36,31,28,0.03)] backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {t.benefits && (
          <section className="border-b border-[#D8C9BC]/60">
            <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
                  {t.benefits.eyebrow}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                  {t.benefits.title}
                </h2>

                {t.benefits.description && (
                  <p className="mt-6 max-w-2xl text-base leading-8 text-bvs-mutedText">
                    {t.benefits.description}
                  </p>
                )}
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {t.benefits.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[28px] border border-[#E2D5CA] bg-white/75 p-7 shadow-[0_10px_30px_rgba(36,31,28,0.04)] backdrop-blur-sm"
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
          </section>
        )}
        <section className="border-b border-[#D8C9BC]/60 bg-[#FBF7F2]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
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
                  className="rounded-[28px] border border-[#E2D5CA] bg-white/75 p-7 shadow-[0_10px_30px_rgba(36,31,28,0.04)] backdrop-blur-sm"
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-bvs-lightColor">
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

        {hasCaseStudies && (
          <section className="border-b border-[#D8C9BC]/60">
            <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
                    {t.selectedWork!.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                    {t.selectedWork!.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-bvs-mutedText">
                    {t.selectedWork!.description}
                  </p>
                </div>

                <Link
                  href={`/${locale}/projects`}
                  className="text-sm font-medium text-bvs-logoText underline underline-offset-4 transition hover:text-bvs-accent"
                >
                  {t.selectedWork!.portfolioCta}
                </Link>
              </div>

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {caseStudies.map((item) => (
                  <article
                    key={item.href}
                    className="group overflow-hidden rounded-[28px] border border-[#E2D5CA] bg-[#FFFDFC] shadow-[0_10px_28px_rgba(36,31,28,0.04)]"
                  >
                    {item.image ? (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={450}
                          height={350}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>
                    ) : (
                      <div className="h-56 bg-[radial-gradient(circle_at_top_right,_rgba(242,154,63,0.12),_transparent_35%),linear-gradient(to_bottom,#F8F3EE,#FFFDFC)]" />
                    )}

                    <div className="p-7">
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
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-b border-[#D8C9BC]/60 bg-[#FBF7F2]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
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
                    className="rounded-[24px] border border-[#E2D5CA] bg-white/80 px-5 py-5 text-sm leading-7 text-bvs-mutedText shadow-[0_10px_24px_rgba(36,31,28,0.03)] backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {related.length > 0 && (
          <section className="border-b border-[#D8C9BC]/60 bg-[#FBF7F2]">
            <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
                    {t.relatedInsights?.eyebrow}
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-bvs-logoText md:text-4xl">
                    {t.relatedInsights?.title}
                  </h2>

                  {t.relatedInsights?.description && (
                    <p className="mt-4 text-base leading-8 text-bvs-mutedText">
                      {t.relatedInsights.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((post) => (
                  <BlogCard key={post._id} post={post} variant="service" />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="border-b border-[#D8C9BC]/60">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-bvs-blue">
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
                  className={`group px-6 py-6 md:px-8 ${index !== t.faq.items.length - 1
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

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#241F1C_0%,#120E0C_100%)] text-white">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_20%_20%,rgba(242,154,63,0.35),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(227,161,43,0.20),transparent_20%)]" />

          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:px-8 md:py-32">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/90">
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
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#FFF8F1] px-7 py-3.5 text-sm font-medium text-bvs-logoText transition hover:bg-white"
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