import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://bravixcreative.com";

const redirects = [
  {
    from: "/tr/services/web-development/",
    to: "/tr/hizmetler/web-gelistirme/",
    lang: "tr",
  },
  {
    from: "/tr/services/ecommerce-development/",
    to: "/tr/hizmetler/eticaret-gelistirme/",
    lang: "tr",
  },
  {
    from: "/tr/services/ui-ux-design/",
    to: "/tr/hizmetler/ui-ux-tasarimi/",
    lang: "tr",
  },
  {
    from: "/tr/services/seo-optimization/",
    to: "/tr/hizmetler/seo-optimizasyonu/",
    lang: "tr",
  },
  {
    from: "/tr/services/website-maintenance/",
    to: "/tr/hizmetler/website-bakimi/",
    lang: "tr",
  },
  {
    from: "/ru/services/web-development/",
    to: "/ru/uslugi/razrabotka-saytov/",
    lang: "ru",
  },
  {
    from: "/ru/services/ecommerce-development/",
    to: "/ru/uslugi/razrabotka-internet-magazinov/",
    lang: "ru",
  },
  {
    from: "/ru/services/ui-ux-design/",
    to: "/ru/uslugi/ui-ux-dizayn/",
    lang: "ru",
  },
  {
    from: "/ru/services/seo-optimization/",
    to: "/ru/uslugi/seo-optimizatsiya/",
    lang: "ru",
  },
  {
    from: "/ru/services/website-maintenance/",
    to: "/ru/uslugi/podderzhka-sayta/",
    lang: "ru",
  },
  {
    from: "/en/projects/apartment-hotel-website-and-admin-panel/1001/",
    to: "/en/projects/apartment-hotel-website-and-admin-panel/",
    lang: "en",
  },
  {
    from: "/tr/projects/apart-otel-web-sitesi-ve-yonetici-paneli/1001/",
    to: "/tr/projeler/apart-otel-web-sitesi-ve-yonetici-paneli/",
    lang: "tr",
  },
  {
    from: "/ru/projects/veb-sayt-apart-otelya-i-administrativnaya-panel/1001/",
    to: "/ru/proekty/veb-sayt-apart-otelya-i-administrativnaya-panel/",
    lang: "ru",
  },

  {
    from: "/en/projects/vineyard-investment-website/1002/",
    to: "/en/projects/vineyard-investment-website/",
    lang: "en",
  },
  {
    from: "/tr/projects/bag-yatirim-web-sitesi/1002/",
    to: "/tr/projeler/bag-yatirim-web-sitesi/",
    lang: "tr",
  },
  {
    from: "/ru/projects/veb-sayt-investiciy-v-vinodelni/1002/",
    to: "/ru/proekty/veb-sayt-investiciy-v-vinodelni/",
    lang: "ru",
  },

  {
    from: "/en/projects/the-glass-hut-cabin-website/1003/",
    to: "/en/projects/the-glass-hut-cabin-website/",
    lang: "en",
  },
  {
    from: "/tr/projects/the-glass-hut-kabin-tanitim-sitesi/1003/",
    to: "/tr/projeler/the-glass-hut-kabin-tanitim-sitesi/",
    lang: "tr",
  },
  {
    from: "/ru/projects/the-glass-hut-sayt-dlya-steklyannogo-domika/1003/",
    to: "/ru/proekty/the-glass-hut-sayt-dlya-steklyannogo-domika/",
    lang: "ru",
  },

  {
    from: "/en/projects/mindfulness-app-landing-page/1004/",
    to: "/en/projects/mindfulness-app-landing-page/",
    lang: "en",
  },
  {
    from: "/tr/projects/mindfulness-uygulama-tanitim-sitesi/1004/",
    to: "/tr/projeler/mindfulness-uygulama-tanitim-sitesi/",
    lang: "tr",
  },
  {
    from: "/ru/projects/mindfulness-app-landing-page/1004/",
    to: "/ru/proekty/mindfulness-app-landing-page/",
    lang: "ru",
  },

  {
    from: "/en/projects/creative-flow-dashboard/1005/",
    to: "/en/projects/creative-flow-dashboard/",
    lang: "en",
  },
  {
    from: "/tr/projects/yaratici-akis-paneli-arayuzu/1005/",
    to: "/tr/projeler/yaratici-akis-paneli-arayuzu/",
    lang: "tr",
  },
  {
    from: "/ru/projects/panel-upravleniya-creator-flow/1005/",
    to: "/ru/proekty/panel-upravleniya-creator-flow/",
    lang: "ru",
  },

  {
    from: "/en/projects/fast-food-restaurant-website/1006/",
    to: "/en/projects/fast-food-restaurant-website/",
    lang: "en",
  },
  {
    from: "/tr/projects/fast-food-restoran-web-sitesi/1006/",
    to: "/tr/projeler/fast-food-restoran-web-sitesi/",
    lang: "tr",
  },
  {
    from: "/ru/projects/sayt-fastfud-restorana/1006/",
    to: "/ru/proekty/sayt-fastfud-restorana/",
    lang: "ru",
  },

  {
    from: "/en/projects/ta-travel-web-site/1007/",
    to: "/en/projects/ta-travel-web-site/",
    lang: "en",
  },
  {
    from: "/tr/projects/ta-travel-web-sitesi/1007/",
    to: "/tr/projeler/ta-travel-web-sitesi/",
    lang: "tr",
  },
  {
    from: "/ru/projects/ta-travel-vebsayt/1007/",
    to: "/ru/proekty/ta-travel-vebsayt/",
    lang: "ru",
  },
  {
    from: "/tr/projects/",
    to: "/tr/projeler/",
    lang: "tr",
  },
  {
    from: "/ru/projects/",
    to: "/ru/proekty/",
    lang: "ru",
  },
  {
    from: "/en/blog/next-js-seo-guide-2026-boost-performance-and-rankings/",
    to: "/en/blog/the-2026-nextjs-seo-guide-ai-search-optimization",
    lang: "en",
  },
  {
    from: "/tr/blog/nextjs-16-ve-2026-seo-stratejiler/",
    to: "/tr/blog/nextjs-seo-rehberi-2026-performans-ve-siralama",
    lang: "tr",
  },
];

function createRedirectHtml({ to, lang }) {
  const absoluteUrl = `${siteUrl}${to}`;

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting...</title>
    <link rel="canonical" href="${absoluteUrl}" />
    <meta http-equiv="refresh" content="0; url=${absoluteUrl}" />
    <script>
      window.location.replace("${to}");
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="${absoluteUrl}">${absoluteUrl}</a></p>
  </body>
</html>
`;
}

function main() {
  const outDir = path.resolve(process.cwd(), "out");

  if (!fs.existsSync(outDir)) {
    console.error("out folder not found. Run next build/export first.");
    process.exit(1);
  }

  for (const redirect of redirects) {
    const relativePath = redirect.from.replace(/^\/|\/$/g, "");
    const dir = path.join(outDir, relativePath);

    fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(
      path.join(dir, "index.html"),
      createRedirectHtml(redirect),
      "utf8",
    );

    console.log(`${redirect.from} -> ${redirect.to}`);
  }

  console.log(`Generated ${redirects.length} static redirect pages.`);
}

main();
