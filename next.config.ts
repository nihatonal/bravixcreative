import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "export", // ⭐ static site
  trailingSlash: true,

  images: {
    domains: ["i.ibb.co"],
    unoptimized: true, // ⭐ static export için gerekli
  },

  compiler: {
    removeConsole: true,
    emotion: true,
  },

  webpack(config, { isServer }) {
    if (!isServer && process.env.ANALYZE === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "./analyze/client.html",
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: "./analyze/stats.json",
        })
      );
    }
    return config;
  },
};

export default bundleAnalyzer(withNextIntl(nextConfig));
