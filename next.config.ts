import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  trailingSlash: true,
  //output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
    emotion: true,
  },
};

export default bundleAnalyzer(withNextIntl(nextConfig));
