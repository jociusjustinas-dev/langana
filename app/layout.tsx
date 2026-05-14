import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import { ClientCookieConsent } from "@/components/legal/ClientCookieConsent";
import { MobileStickyCta } from "@/components/home/MobileStickyCta";
import { RouteReveal } from "@/components/layout/RouteReveal";
import { ScrollSmootherClient } from "@/components/layout/ScrollSmootherClient";
import { SmoothScrollAnchors } from "@/components/layout/SmoothScrollAnchors";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/jsonld";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#263cd0",
  /** Mobile Chrome: layout atnaujinamas, kai slankioji naršyklės UI keičia matomą viewport aukštį. */
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Langana — langai, durys, stiklinimas Šiauliuose",
    template: "%s | Langana",
  },
  description:
    "Langai, durys, stiklinimas Šiauliuose. 20+ metų patirties, 300+ projektų, sertifikuota kokybė. Montavimas per 3–5 d. Nemokamas matavimas ir pasiūlymas per 24 val.",
  applicationName: SITE_NAME,
  authors: [{ name: "UAB Langana" }],
  generator: "Next.js",
  keywords: [
    "langai Šiauliai",
    "plastikiniai langai",
    "durys",
    "stiklinimas",
    "balkonų stiklinimas",
    "Langana",
  ],
  openGraph: {
    siteName: SITE_NAME,
    locale: "lt_LT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const ROOT_JSON_LD = [localBusinessSchema(), organizationSchema(), websiteSchema()];

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
        <JsonLd data={ROOT_JSON_LD} />
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
          <div className="flex min-h-full min-w-0 flex-1 flex-col" id="smooth-content">
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
