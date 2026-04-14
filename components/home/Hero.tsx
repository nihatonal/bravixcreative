import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroButtons from "../HeroButtons";

export default function Hero(): JSX.Element {
  const t = useTranslations("hero");


  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-start px-4 pt-32 lg:pt-44"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-4rem] top-0 h-80 w-80 rounded-full bg-bvs-lightPurple opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-[-4rem] h-72 w-72 rounded-full bg-bvs-purple opacity-20 blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-20 grid-areas-mobile lg:grid-cols-2 lg:grid-areas-desktop">
        <div className="grid-in-text min-h-[320px] space-y-6">
          <h1 className="text-4xl font-extrabold leading-[1.2] text-bvs-blue md:text-5xl lg:text-6xl">
            {t("title.part1")}{" "}
            <span className="gradient-text">{t("title.part2")} </span>
            {t("title.part3")}
          </h1>

          <p className="max-w-xl text-lg text-gray-600 md:text-xl lg:mb-8">
            {t("description")}
          </p>

          <HeroButtons />
        </div>

        <div className="grid-in-image ml-auto hidden lg:block">
          <div className="relative w-full max-w-lg">
            <div className="absolute -left-4 -top-4 h-72 w-72 animate-blob rounded-full bg-bvs-purple opacity-40 blur-xl mix-blend-multiply" />
            <div className="animation-delay-2000 absolute -bottom-8 right-4 h-72 w-72 animate-blob rounded-full bg-bvs-lightPurple opacity-60 blur-xl mix-blend-multiply" />

            <div className="rounded-2xl bg-white p-4 shadow-xl">
              <div className="relative flex aspect-[5/3] min-h-[300px] w-full flex-col items-center overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src="/images/nihat-435.webp"
                  alt="Nihat Onal - Web Designer"
                  width={600}
                  height={290}
                  sizes="(max-width: 768px) 100vw, 435px"
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-1/2 flex -translate-x-1/2 transform flex-col items-center md:bottom-10">
        <div className="mb-1 flex h-16 w-10 justify-center rounded-full border-2 border-bvs-accent/80">
          <div className="mt-2 h-3 w-1 animate-scroll rounded-full bg-bvs-accent/80" />
        </div>
        <span className="text-sm text-bvs-mutedText">{t("scroll")}</span>
      </div>
    </section>
  );
}