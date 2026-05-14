import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://langana.vercel.app";
// Production (Vercel): NEXT_PUBLIC_SITE_URL=https://langana.lt
// Preview: NEXT_PUBLIC_SITE_URL=https://langana.vercel.app

export const SITE_NAME = "Langana";

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
          alt: opts.title,
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

const HOME_TITLE = "Langana — langai, durys, stiklinimas Šiauliuose";
const HOME_DESCRIPTION =
  "Langai, durys, stiklinimas Šiauliuose. 20+ metų patirties, 300+ projektų, sertifikuota kokybė. Montavimas per 3–5 d. Nemokamas matavimas ir pasiūlymas per 24 val.";

/** Pagrindinis puslapis: absoliutus `<title>`, be šablono „%s | Langana“. */
export function homeMetadata(): Metadata {
  const url = canonical("/");
  return {
    title: { absolute: HOME_TITLE },
    description: HOME_DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      url,
      siteName: SITE_NAME,
      locale: "lt_LT",
      type: "website",
      images: [
        {
          url: "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: HOME_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      images: ["/og-default.jpg"],
    },
  };
}
