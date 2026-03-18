"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { testimonialsData, TestimonialItem } from "@/constants/testimonialsData";
import Script from "next/script";

const sectionText = {
  en: {
    badge: "Client Feedback",
    title: "What Our Clients Say",
    subtitle:
      "Real feedback from businesses we helped with web design, development, and digital product experiences.",
    rated: "rated",
    previous: "Previous",
    next: "Next",
    basedOn: "Based on real project collaboration",
  },
  tr: {
    badge: "Müşteri Yorumları",
    title: "Müşterilerimiz Ne Diyor?",
    subtitle:
      "Web tasarım, geliştirme ve dijital ürün deneyimi alanında birlikte çalıştığımız markalardan gerçek geri bildirimler.",
    rated: "puan verdi",
    previous: "Önceki",
    next: "Sonraki",
    basedOn: "Gerçek proje iş birliklerine dayalı yorumlar",
  },
  ru: {
    badge: "Отзывы клиентов",
    title: "Что говорят наши клиенты",
    subtitle:
      "Реальные отзывы компаний, с которыми мы работали над веб-дизайном, разработкой и цифровыми продуктами.",
    rated: "оценка",
    previous: "Назад",
    next: "Вперед",
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
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-bvs-purple to-bvs-lightPurple text-sm font-bold text-white shadow-md">
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
    <Card className="h-full border border-bvs-purple/10 bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <AvatarBadge name={item.name} />
            <div>
              <h3 className="text-lg font-semibold text-bvs-darkColorL">
                {item.name}
              </h3>
              <p className="text-sm text-bvs-lightColor">
                {item.role} · {item.company}
              </p>
            </div>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bvs-lightPurple/15 text-bvs-purple">
            <Quote size={18} />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
          <RatingStars rating={item.rating} />
          <span className="text-xs font-medium text-bvs-lightColor">
            {item.rating}/5 {ratedLabel}
          </span>
        </div>

        <p className="text-[15px] leading-7 text-bvs-lightColor mb-6 flex-grow">
          “{item.content}”
        </p>

        <div className="mt-auto border-t border-gray-100 pt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center rounded-full bg-bvs-purple/10 px-3 py-1 text-xs font-medium text-bvs-purple">
              {item.service}
            </span>
            <span className="inline-flex items-center rounded-full bg-bvs-logoX/15 px-3 py-1 text-xs font-medium text-bvs-darkColorL">
              {item.projectType}
            </span>
          </div>

          <p className="text-xs text-gray-500">
            {formatDate(item.date, locale)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function chunkItems<T>(items: T[], size: number) {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

export default function Testimonials() {
  const locale = useLocale() as "en" | "tr" | "ru";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const content = sectionText[locale] ?? sectionText.en;

  const testimonials = useMemo(() => {
    return testimonialsData[locale] || testimonialsData.en;
  }, [locale]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth >= 1024 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = useMemo(() => {
    return chunkItems(testimonials, itemsPerSlide);
  }, [testimonials, itemsPerSlide]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide, locale]);

  // useEffect(() => {
  //   if (slides.length <= 1) return;

  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5500);

  //   return () => clearInterval(interval);
  // }, [slides.length]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bravix Creative",
    url: "https://www.bravixcreative.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        testimonials.reduce((sum, item) => sum + item.rating, 0) /
        testimonials.length,
      reviewCount: testimonials.length,
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
      itemReviewed: {
        "@type": "Organization",
        name: "Bravix Creative",
      },
      publisher: {
        "@type": "Organization",
        name: item.company,
      },
    })),
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-2 lg:px-20 bg-gradient-to-b from-white to-bvs-gray"
    >
      <Script
        id={`testimonials-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-bvs-purple/20 bg-bvs-lightPurple/10 px-4 py-1 text-sm font-medium text-bvs-purple mb-4">
            {content.badge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bvs-darkColorL">
            {content.title}
          </h2>

          <p className="text-bvs-lightColor max-w-2xl mx-auto leading-7">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {slides.length > 1 && (
            <>
              <button
                aria-label={content.previous}
                onClick={goToPrev}
                className="hidden lg:flex absolute -left-5 top-1/2 z-20 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-bvs-purple/15 bg-white text-bvs-purple shadow-md transition hover:bg-bvs-purple hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                aria-label={content.next}
                onClick={goToNext}
                className="hidden lg:flex absolute -right-5 top-1/2 z-20 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-bvs-purple/15 bg-white text-bvs-purple shadow-md transition hover:bg-bvs-purple hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${locale}-${itemsPerSlide}-${currentSlide}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`grid gap-6 pb-4 ${
                  itemsPerSlide === 3
                    ? "grid-cols-1 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {slides[currentSlide]?.map((item) => (
                  <TestimonialCard
                    key={item.id}
                    item={item}
                    locale={locale}
                    ratedLabel={content.rated}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {slides.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-3">
              {slides.map((_, index) => {
                const isActive = index === currentSlide;

                return (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className="group relative flex h-4 items-center justify-center"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-10 h-2 bg-bvs-purple shadow-[0_0_0_4px_rgba(126,105,171,0.12)]"
                          : "w-2.5 h-2.5 bg-bvs-purple/30 group-hover:bg-bvs-purple/50"
                      }`}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="active-dot"
                        className="absolute inset-0 m-auto h-2 rounded-full bg-bvs-purple"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 28,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-bvs-lightColor">
            {content.basedOn}
          </p>
        </motion.div>
      </div>
    </section>
  );
}