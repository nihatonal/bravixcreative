import { Quote, Star } from "lucide-react";
import Script from "next/script";
import { getLocale } from "next-intl/server";
import { Card, CardContent } from "../ui/card";
import { testimonialsData, TestimonialItem } from "@/constants/testimonialsData";

const sectionText = {
  en: {
    badge: "Client Feedback",
    title: "What Our Clients Say",
    subtitle:
      "Real feedback from businesses we helped with web design, development, and digital product experiences.",
    rated: "rated",
    basedOn: "Based on real project collaboration",
  },
  tr: {
    badge: "Müşteri Yorumları",
    title: "Müşterilerimiz Ne Diyor?",
    subtitle:
      "Web tasarım, geliştirme ve dijital ürün deneyimi alanında birlikte çalıştığımız markalardan gerçek geri bildirimler.",
    rated: "puan verdi",
    basedOn: "Gerçek proje iş birliklerine dayalı yorumlar",
  },
  ru: {
    badge: "Отзывы клиентов",
    title: "Что говорят наши клиенты",
    subtitle:
      "Реальные отзывы компаний, с которыми мы работали над веб-дизайном, разработкой и цифровыми продуктами.",
    rated: "оценка",
    basedOn: "Основано на реальном сотрудничестве по проектам",
  },
} as const;

function formatDate(date: string, locale: string) {
  try {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < rating
              ? "fill-bvs-logoX text-bvs-logoX"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

function AvatarBadge({ name }: { name: string }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-bvs-accent/40 to-bvs-primary text-sm font-bold text-white shadow-md">
      {getInitials(name)}
    </div>
  );
}

function TestimonialCard({
  item,
  locale,
  ratedLabel,
}: {
  item: TestimonialItem;
  locale: string;
  ratedLabel: string;
}) {
  return (
    <Card className="h-full overflow-hidden rounded-2xl border border-[#D9CEC5] bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <AvatarBadge name={item.name} />
            <div>
              <h3 className="text-lg font-semibold text-bvs-darkColorL">
                {item.name}
              </h3>
              <p className="text-sm text-bvs-mutedText">
                {item.role} · {item.company}
              </p>
            </div>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bvs-lightPurple/15 text-bvs-purpleDark">
            <Quote size={18} />
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <RatingStars rating={item.rating} />
          <span className="text-xs font-medium text-bvs-mutedText">
            {item.rating}/5 {ratedLabel}
          </span>
        </div>

        <p className="mb-6 flex-grow text-[15px] leading-7 text-bvs-mutedText">
          “{item.content}”
        </p>

        <div className="mt-auto border-t border-gray-100 pt-4">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-bvs-lightPurple/15 px-3 py-1 text-xs font-medium text-bvs-purpleDark">
              {item.service}
            </span>
            <span className="inline-flex items-center rounded-full bg-bvs-logoX/15 px-3 py-1 text-xs font-medium text-bvs-darkColorL">
              {item.projectType}
            </span>
          </div>

          <p className="text-xs text-gray-600">
            {formatDate(item.date, locale)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function Testimonials() {
  const locale = (await getLocale()) as "en" | "tr" | "ru";

  const content = sectionText[locale] ?? sectionText.en;
  const testimonials = (testimonialsData[locale] || testimonialsData.en).slice(0, 3);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bravix Creative",
    url: "https://www.bravixcreative.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(
        (
          testimonials.reduce((sum, item) => sum + item.rating, 0) /
          testimonials.length
        ).toFixed(1)
      ),
      reviewCount: testimonials.length,
      ratingCount: testimonials.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: item.content,
      datePublished: item.date,
    })),
  };

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-white to-bvs-gray px-2 py-20 lg:px-20"
    >
      <Script
        id={`testimonials-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />

      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-bvs-lightPurple/10 px-4 py-1 text-sm font-medium text-bvs-mutedText">
            {content.badge}
          </span>

          <h2 className="mb-4 text-3xl font-bold text-bvs-darkColorL md:text-4xl">
            {content.title}
          </h2>

          <p className="mx-auto max-w-2xl leading-7 text-bvs-mutedText">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              item={item}
              locale={locale}
              ratedLabel={content.rated}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-bvs-mutedText">{content.basedOn}</p>
        </div>
      </div>
    </section>
  );
}