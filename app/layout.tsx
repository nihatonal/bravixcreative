import "./globals.css";
import Script from "next/script";
import { AnalyticsTracker } from "./AnalyticsTracker";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html >
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="theme-color" content="#9F8CFD" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

                <Script
                    id="organization-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Bravix Creative",
                            url: "https://www.bravixcreative.com",
                            logo: "https://www.bravixcreative.com/bravix.png",
                            sameAs: ["https://www.instagram.com/bravixcreative"],
                            description:
                                "Bravix Creative, yaratıcı dijital çözümler sunan web tasarım ve geliştirme ajansıdır.",
                        }),
                    }}
                />

                <Script
                    id="website-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Bravix Creative",
                            url: "https://www.bravixcreative.com",
                            potentialAction: {
                                "@type": "SearchAction",
                                target:
                                    "https://www.bravixcreative.com/search?q={search_term_string}",
                                "query-input": "required name=search_term_string",
                            },
                        }),
                    }}
                />

                {/* Google Analytics: gtag.js */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
      
               gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                 send_page_view: false,
                 allow_google_signals: true,
                 cookie_flags: 'SameSite=None;Secure'
               });
            `}
                </Script>
            </head>
            <body>
                {children}
                <AnalyticsTracker />
            </body>
        </html>

    );
}
