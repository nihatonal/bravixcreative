import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../Container";

type Statistic = {
  value: number;
  label: string;
};

export default function AboutMe() {
  const t = useTranslations("about");

  const statistics: Statistic[] = [
    { value: 6, label: t("statistics.experience") },
    { value: 15, label: t("statistics.projects") },
    { value: 98, label: t("statistics.clients") },
  ];

  return (
    <section id="about" className="bg-gray-50 py-20">
      <Container>
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t("title")}
            </h2>

            <p className="mx-auto max-w-xl text-gray-600">
              {t("role")}
            </p>
          </div>

          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="relative">
                <div className="absolute -inset-4 -rotate-6 rounded-xl bg-bvs-lightPurple/20" />
                <div className="absolute -inset-4 rotate-3 rounded-xl bg-bvs-purple/20" />

                <Image
                  src="/images/about_nihat_435.webp"
                  alt="Nihat Onal - Web Designer - About"
                  width={435}
                  height={290}
                  sizes="(max-width: 768px) 100vw, 435px"
                  className="relative z-10 h-auto w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>

            <div>
              <p className="mb-6 text-gray-600">{t("paragraph1")}</p>
              <p className="mb-10 text-gray-600">{t("paragraph2")}</p>
              <p className="mb-10 text-gray-600">{t("paragraph3")}</p>

              <div className="grid grid-cols-3 gap-4 text-center">
                {statistics.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-white p-4 shadow"
                  >
                    <span className="mb-1 block text-3xl font-bold text-bvs-purple">
                      {stat.value}+
                    </span>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}