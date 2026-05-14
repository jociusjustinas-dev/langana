import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://langana.vercel.app";
// Production (Vercel): NEXT_PUBLIC_SITE_URL=https://langana.lt
// Preview: NEXT_PUBLIC_SITE_URL=https://langana.vercel.app

export const SITE_NAME = "Langana";

/** Bendras OG/Twitter paveikslėlio alt visiems puslapiams (social + prieinamumas). */
const OG_DEFAULT_IMAGE_ALT = "Langana — langai, durys ir stiklinimas Šiauliuose";

export function canonical(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") return SITE_URL;
  return `${SITE_URL}${cleanPath.replace(/\/$/, "")}`;
}

export interface PageMetaOpts {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export function pageMeta(opts: PageMetaOpts): Metadata {
  const url = canonical(opts.path);
  const ogImage = opts.ogImage || "/og-default.jpg";

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: "lt_LT",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: OG_DEFAULT_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage],
    },
  };
}

/**
 * Pagrindinis puslapis: absoliutus `<title>` (be root `title.template`), canonical, OG, Twitter.
 * Keyword + geo dažnai priekyje: pvz. „Langai, durys, stiklinimas Šiauliuose | Langana“.
 */
export function homeMetadata(opts: PageMetaOpts): Metadata {
  const url = canonical(opts.path);
  const ogImage = opts.ogImage || "/og-default.jpg";

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: "lt_LT",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: OG_DEFAULT_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage],
    },
  };
}
