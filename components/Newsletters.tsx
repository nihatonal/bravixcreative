import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { useTranslations } from "next-intl";
import { toast } from "./ui/toast";
import axios from "axios";

interface NewslettersProps {
  title: string;
}

const Newsletters = ({ title }: NewslettersProps) => {
  const t = useTranslations("contact");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(
        `https://bravix-server.vercel.app/api/newsletter`,
        { email }
      );

      toast({
        title: t("submitSuccessTitle", { default: "Successful!" }),
        description: t("submitSuccessDesc", {
          default: "Your email has been saved successfully.",
        }),
      });

      setEmail("");
    } catch (err) {
      console.error(err);

      toast({
        title: t("submitErrorTitle", { default: "Something went wrong" }),
        description: t("submitErrorDesc", {
          default: "Please try again later.",
        }),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 lg:p-6 shadow-lg shadow-bvs-lightPurple/10">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">
        {t("newsletterDesc", {
          default: "Stay updated with our latest news and insights.",
        })}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-stretch gap-3"
      >
        <Input
          type="email"
          className="h-12 border-white/20 bg-white text-black placeholder:text-gray-500"
          placeholder={t("placeholderEmail")}
          id="newsletter_email"
          name="newsletter_email"
          value={email}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          aria-label="submit button"
          disabled={email === "" || isSubmitting}
          className="h-12 min-w-[140px] px-6 rounded-lg bg-bvs-accent/80 text-white font-medium hover:bg-bvs-accent/60 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t("processing", { default: "Processing..." }) : t("submit_newsletter")}
        </button>
      </form>
    </div>
  );
};

export default Newsletters;