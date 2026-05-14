import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

const PRODUCTION_SITE = "https://langana.lt";

/**
 * Ne produkcinis domenas (pvz. Vercel preview / langana.vercel.app): `Disallow: /`,
 * kad staging nebūtų indeksuojamas. Po migracijos `NEXT_PUBLIC_SITE_URL=https://langana.lt` —
 * atsidaro normalus `Allow` + sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  const base = SITE_URL.replace(/\/$/, "");
  const sitemapUrl = `${base}/sitemap.xml`;
  const isProductionDomain = SITE_URL === PRODUCTION_SITE;

  if (!isProductionDomain) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      sitemap: sitemapUrl,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/oak-me-up", "/ziemos-sodai/"],
      },
    ],
    sitemap: sitemapUrl,
    host: base,
  };
}
