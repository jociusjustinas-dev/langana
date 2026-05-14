import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import { ClientCookieConsent } from "@/components/legal/ClientCookieConsent";
import { MobileStickyCta } from "@/components/home/MobileStickyCta";
import { RouteReveal } from "@/components/layout/RouteReveal";
import { ScrollSmootherClient } from "@/components/layout/ScrollSmootherClient";
import { SmoothScrollAnchors } from "@/components/layout/SmoothScrollAnchors";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  /** Mobile Chrome: layout atnaujinamas, kai slankioji naršyklės UI keičia matomą viewport aukštį. */
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://langana.lt"),
  title: {
    default: "Langana — langai, durys, stiklinimas Šiauliuose",
    template: "%s | Langana Šiauliai",
  },
  description:
    "Aukščiausios kokybės langai, durys, stiklinimas ir stumdomos sistemos Šiauliuose. Montavimas per 3–5 dienas. Gaukite nemokamą pasiūlymą.",
  openGraph: {
    siteName: "Langana",
    locale: "lt_LT",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Langana — langai ir durys Šiauliuose" }],
  },
  alternates: {
    canonical: "/",
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "UAB Langana",
  url: "https://langana.lt",
  telephone: "+37060620666",
  email: "uablangana@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tilžės g. 83b",
    addressLocality: "Šiauliai",
    addressCountry: "LT",
  },
  openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"],
  priceRange: "€€",
  description: "Aukščiausios kokybės langai, durys, stiklinimas ir stumdomos sistemos Šiauliuose.",
  areaServed: "Lietuva",
  sameAs: ["https://www.facebook.com/uablangana/"],
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="m-0 h-full antialiased [scrollbar-gutter:stable]" lang="lt">
      <head>
        <link href="https://widget.meetvolley.com/static/css/widget.css" rel="stylesheet" />
      </head>
      <body className={`${jakarta.className} m-0 flex min-h-full flex-col p-0`}>
        <Script
          data-widget="https://api.meetvolley.com/api/public/get-widget/3224580a-a434-4fcd-8c78-1f44a38077e2"
          id="meetvolley-widget"
          src="https://widget.meetvolley.com/widget.js"
          strategy="beforeInteractive"
          type="text/javascript"
        />
        <script
          // eslint-disable-next-line react/no-danger -- JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
          type="application/ld+json"
        />
        {/*
          Fiksuoti sluoksniai (SiteHeader, home preloader) — už ScrollSmoother transformo ribų.
          Žr. https://gsap.com/docs/v3/Plugins/ScrollSmoother/ — position:fixed ne smooth-content viduje.
        */}
        <div
          className="pointer-events-none fixed inset-0 z-[360] [&>*]:pointer-events-auto"
          id="site-chrome-root"
          suppressHydrationWarning
        />
        <div className="min-w-0 w-full overflow-x-clip" id="smooth-wrapper">
          <div
            className="flex min-h-full min-w-0 flex-1 flex-col max-md:pb-[var(--langana-mobile-sticky-bar-clearance)] md:pb-0"
            id="smooth-content"
          >
            <ScrollSmootherClient />
            <SmoothScrollAnchors />
            <RouteReveal>{children}</RouteReveal>
          </div>
        </div>
        <MobileStickyCta />
        <ClientCookieConsent />
      </body>
    </html>
  );
}
