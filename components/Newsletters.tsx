import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { useTranslations } from "next-intl";
import { toast } from './ui/toast';
import axios from "axios";

interface NewslettersProps {
  title: string;
}
const Newsletters = ({ title }: NewslettersProps) => {
  const t = useTranslations("contact");
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = { email: email }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/newsletter`, data);
      alert("Emailiniz başarıyla kaydedildi!");
    } catch (err) {
      console.error(err);

      alert("Bir hata oluştu." + err);
    }

    setTimeout(() => {
      toast({
        title: t("submitSuccessTitle", { default: "Message sent!" }),
        description: t("submitSuccessDesc", {
          default: "Thanks for reaching out. I'll get back to you soon.",
        }),
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  }
  return (
    <form onSubmit={handleSubmit} className='shadow shadow-lg shadow-bvs-lightPurple/20 flex items-end justify-between gap-4 p-4 bg-gradient-to-l  from-bvs-lightPurple/10 to-bvs-accent/10 shadow rounded-lg'>
      <div className='w-full'>
        <label htmlFor="form_subject" className="text-white block text-lg font-semibold mb-4 mb-1">
          {/* {t("subject")} */} {title}
        </label>
        <Input
          className='border-bvs-light text-xs text-bvs-light'
          placeholder={t("placeholderEmail")}
          id="form_subject"
          name="form_subject"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        aria-label="submit button"
        className=" cursor-pointer col-start-2 w-44 py-2 text-bvs-light rounded-[8px] bg-bvs-accent/60 hover:bg-bvs-accent/40"
        disabled={email === ""}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {t("processing", { default: "Processing..." })}
          </span>
        ) : (
          t("submit_newsletter")
        )}
      </button>

    </form>
  )
}

export default Newsletters