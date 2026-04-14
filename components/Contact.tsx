"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTranslations } from "next-intl";
import { usePlan } from "../lib/PlanContext";
import { useToast } from "@/hooks/toast";
import SocialMedia from "./SocialMedia";

interface FormData {
    name: string;
    email: string;
    phone: string;
    form_subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const { selectedPlan } = usePlan();
    const t = useTranslations("contact");
    const { toast } = useToast();

    const [planInput, setPlanInput] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        form_subject: "",
        message: "",
    });

    useEffect(() => {
        if (selectedPlan) {
            setPlanInput(selectedPlan);
        }
    }, [selectedPlan]);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const updatedForm = {
            ...formData,
            form_subject: planInput,
        };

        try {
            const res = await fetch("https://bravix-server.vercel.app/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedForm),
            });

            const result = await res.json();

            if (!res.ok || !result.ok) {
                throw new Error(result?.error || "Mail gönderilemedi.");
            }

            toast({
                title: t("submitSuccessTitle", { default: "Message sent!" }),
                description: t("submitSuccessDesc", {
                    default: "Thanks for reaching out. I'll get back to you soon.",
                }),
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                form_subject: "",
                message: "",
            });
            setPlanInput("");
        } catch (err) {
            console.error(err);

            toast({
                title: t("submitErrorTitle", { default: "Something went wrong" }),
                description: t("submitErrorDesc", {
                    default: "Your message could not be sent. Please try again.",
                }),
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-gray-50 px-2 py-20 lg:px-20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-flex items-center rounded-full border border-bvs-purple/20 bg-white/80 px-4 py-1 text-sm font-medium text-bvs-mutedText shadow-sm backdrop-blur-sm">
                        {t("eyebrow")}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h2>
                    <p className="mx-auto max-w-xl text-gray-600">{t("subtitle")}</p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-3 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:space-y-0 lg:gap-y-3"
                        >
                            <div className="col-span-2">
                                <label
                                    htmlFor="name"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    {t("name")}
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    {t("phoneLabel")}
                                </label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    {t("email")}
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-span-2">
                                <label
                                    htmlFor="form_subject"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    {t("subject")}
                                </label>
                                <Input
                                    id="form_subject"
                                    name="form_subject"
                                    value={planInput}
                                    onChange={(e) => setPlanInput(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-span-2">
                                <label
                                    htmlFor="message"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    {t("message")}
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                aria-label="submit button"
                                className="col-start-2 min-h-[44px] w-full rounded-[8px] bg-bvs-purple py-2 text-white hover:bg-bvs-purple/90 disabled:opacity-70"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
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
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        {t("processing", { default: "Processing..." })}
                                    </span>
                                ) : (
                                    t("submit")
                                )}
                            </button>
                        </form>
                    </div>

                    <div>
                        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-xl font-semibold">{t("info")}</h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="mr-4 rounded-full bg-bvs-lightPurple/20 p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-bvs-purple"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t("emailLabel")}</h4>
                                        <p className="text-gray-600">
                                            <a
                                                href="mailto:info@bravixcreative.com"
                                                className="hover:underline"
                                            >
                                                info@bravixcreative.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 rounded-full bg-bvs-lightPurple/20 p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-bvs-purple"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t("phoneLabel")}</h4>
                                        <p className="text-gray-600">
                                            <a href="tel:+79099316670" className="hover:underline">
                                                +7 909 931 66 70
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 rounded-full bg-bvs-lightPurple/20 p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-bvs-purple"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">
                                            {t("workHoursLabel")}
                                        </h4>
                                        <p className="text-gray-600">{t("workHours")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-gradient-to-r from-bvs-primary to-bvs-accent p-6 text-white">
                            <h3 className="mb-2 text-xl font-semibold">{t("letsMeet")}</h3>
                            <p className="mb-4 opacity-90">{t("letsMeetSub")}</p>
                            <SocialMedia
                                className="text-bvs-accent"
                                iconClassName="rounded-full p-2 text-white transition-colors hover:bg-white/80 hover:text-bvs-accent"
                                status_link={t("status_link")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;