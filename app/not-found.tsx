"use client"
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
const NotFoundPage = () => {
  const router = useRouter();

  const handleMenuClick = (id: string) => {
    router.push("/");
    sessionStorage.setItem("scrollTo", id);
  };

  return (

    <div className="bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-32">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Logo />

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Looking for something?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;re sorry. The Web address you entered is not a functioning page on our site.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <Link
              aria-label="home page"
              href="/"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-bvs-purple hover:bg-bvs-lightPurple transition"
            >
              Go to BVS-Design Home Page
            </Link>

          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help? Visit the{" "}
            <button
              onClick={() => handleMenuClick("contact")} aria-label="contact-btn"
              className="font-medium text-amazon-blue hover:text-amazon-blue-dark"
            >
              Contact section
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
