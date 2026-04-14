import CTABanner from "@/components/CTABanner";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import dynamic from "next/dynamic";

import Pricing from "@/components/home/Pricing";

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[900px]" />,
});

export default async function HomeBottomClient() {
  return (
    <>

      {await Pricing()}
      <CTABanner />
      <Skills />
      {await Testimonials()}
      <Contact />
    </>
  );
}