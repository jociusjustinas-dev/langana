import {
  ALIUMINES_STUMDOMOS_FAQ,
  ALIUMINIO_FASADAI_FAQ,
  ALIUMINIO_PERTVAROS_FAQ,
  ALIUMINIO_SPRENDIMAI_HUB_FAQ,
  BALKONU_STIKLINIMAS_FAQ,
  PLASTIKINES_STUMDOMOS_FAQ,
  STIKLINIMAS_HUB_FAQ,
  STUMDOMOS_HUB_FAQ,
  TERASU_STIKLINIMAS_FAQ,
  ZIEMOS_SODAI_FAQ,
} from "@/data/structured-data-faqs";
import type { SystemSpec, SystemType } from "@/lib/product-systems";
import { getSystem } from "@/lib/product-systems";
import { SITE_URL } from "@/lib/seo";

export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const PATH_LABELS: Record<string, string> = {
  langai: "Langai",
  durys: "Durys",
  stiklinimas: "Stiklinimas",
  "stumdomos-sistemos": "Stumdomos sistemos",
  "plastikiniai-langai": "Plastikiniai langai",
  "aliuminio-langai": "Aliuminio langai",
  "aliumines-stumdomos-sistemos": "Aliuminės stumdomos sistemos",
  "plastikines-stumdomos-sistemos": "Plastikinės stumdomos sistemos",
  "aliuminio-sprendimai": "Aliuminio sprendimai",
  "aliuminio-fasadai": "Aliuminio fasadai",
  "aliuminio-pertvaros": "Aliuminio pertvaros",
  "balkonu-stiklinimas": "Balkonų stiklinimas",
  "terasu-stiklinimas": "Terasų stiklinimas",
  "plastikines-durys": "Plastikinės durys",
  "aliuminio-durys": "Aliuminio durys",
  "metalines-durys": "Metalinės durys",
  "specialios-paskirties-durys": "Specialios paskirties durys",
};

export function systemProductUrl(system: SystemSpec): string {
  const base = SITE_URL.replace(/\/$/, "");
  const parent = system.parent.replace(/\/$/, "");
  return `${base}${parent}/${system.slug}`;
}

export function systemBreadcrumbItems(system: SystemSpec): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: "Pradžia", path: "/" }];
  const parts = system.parent.split("/").filter(Boolean);
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    items.push({
      name: PATH_LABELS[part] ?? part.replace(/-/g, " "),
      path: acc,
    });
  }
  const selfPath = `${system.parent.replace(/\/$/, "")}/${system.slug}`;
  items.push({ name: system.name, path: selfPath });
  return items;
}

function productCategoryLabel(type: SystemType): string {
  switch (type) {
    case "plastic-profile":
      return "Plastikiniai langai";
    case "aluminum-window":
      return "Aliuminio langai";
    case "sliding":
      return "Stumdomos sistemos";
    case "facade":
      return "Aliuminio fasadai";
    case "partition":
      return "Aliuminio pertvaros";
    default:
      return "Statybinės konstrukcijos";
  }
}

export function localBusinessSchema(): Record<string, unknown> {
  return {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: "UAB Langana",
    alternateName: "Langana",
    description:
      "Langai, durys, stiklinimas Šiauliuose. Plastikiniai ir aliuminio langai, balkonų stiklinimas, terasų stiklinimas, žiemos sodai.",
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    image: `${SITE_URL}/og-default.jpg`,
    telephone: "+37060620666",
    email: "uablangana@gmail.com",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, CreditCard, BankTransfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tilžės g. 83b",
      addressLocality: "Šiauliai",
      addressRegion: "Šiaulių apskritis",
      postalCode: "LT-76175",
      addressCountry: "LT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.9398,
      longitude: 23.3072,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Šiauliai" },
      { "@type": "AdministrativeArea", name: "Šiaulių apskritis" },
      { "@type": "Country", name: "Lietuva" },
    ],
    sameAs: ["https://www.facebook.com/uablangana/"],
  };
}

export function organizationSchema(): Record<string, unknown> {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "UAB Langana",
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Langana",
    inLanguage: "lt-LT",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export interface ServiceOpts {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}

export function serviceSchema(opts: ServiceOpts): Record<string, unknown> {
  const pageUrl = `${SITE_URL.replace(/\/$/, "")}${opts.path.startsWith("/") ? opts.path : `/${opts.path}`}`;
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: pageUrl,
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Šiauliai" },
      { "@type": "AdministrativeArea", name: "Šiaulių apskritis" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };
}

export function productSchema(system: SystemSpec): Record<string, unknown> {
  const pageUrl = systemProductUrl(system);
  const brandToken = system.name.split(/\s+/)[0] ?? "Langana";
  return {
    "@type": "Product",
    name: system.name,
    description: system.shortDescription,
    brand: {
      "@type": "Brand",
      name: brandToken,
    },
    manufacturer: {
      "@type": "Organization",
      name: system.kilme ?? "UAB Langana",
    },
    category: productCategoryLabel(system.type),
    url: pageUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
      seller: { "@id": BUSINESS_ID },
    },
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  const base = SITE_URL.replace(/\/$/, "");
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const path = item.path === "/" ? "" : item.path.startsWith("/") ? item.path : `/${item.path}`;
      const itemUrl = path === "" || path === "/" ? base : `${base}${path}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

/** JSON-LD blokai `app/aliuminio-sprendimai/[[...slug]]` maršrutui (null — be papildomų schemų). */
export function aliuminioSprendimaiJsonLd(segments: string[] | undefined): Record<string, unknown>[] | null {
  if (!segments?.length) {
    return [
      serviceSchema({
        name: "Aliuminio sprendimai Šiauliuose",
        description:
          "Aliuminio fasadai, pertvaros ir nestandartinės konstrukcijos gyvenamiesiems ir komerciniams objektams Šiauliuose ir Lietuvoje.",
        path: "/aliuminio-sprendimai",
        serviceType: "Aliuminio konstrukcijų projektavimas, gamyba ir montavimas",
      }),
      breadcrumbSchema([
        { name: "Pradžia", path: "/" },
        { name: "Aliuminio sprendimai", path: "/aliuminio-sprendimai" },
      ]),
      faqSchema(ALIUMINIO_SPRENDIMAI_HUB_FAQ),
    ];
  }

  if (segments.length === 1 && segments[0] === "aliuminio-fasadai") {
    return [
      serviceSchema({
        name: "Aliuminio fasadai Šiauliuose",
        description:
          "Aliuminio fasadų sistemos komerciniams ir gyvenamiesiems pastatams Šiauliuose — projektavimas, gamyba ir montavimas.",
        path: "/aliuminio-sprendimai/aliuminio-fasadai",
        serviceType: "Aliuminio fasadų gamyba ir montavimas",
      }),
      breadcrumbSchema([
        { name: "Pradžia", path: "/" },
        { name: "Aliuminio sprendimai", path: "/aliuminio-sprendimai" },
        { name: "Aliuminio fasadai", path: "/aliuminio-sprendimai/aliuminio-fasadai" },
      ]),
      faqSchema(ALIUMINIO_FASADAI_FAQ),
    ];
  }

  if (segments.length === 1 && segments[0] === "aliuminio-pertvaros") {
    return [
      serviceSchema({
        name: "Aliuminio pertvaros Šiauliuose",
        description:
          "Aliuminio pertvaros ir vitrinos ofisams, komercinėms ir viešosioms erdvėms Šiauliuose — zonavimas, stiklas, montavimas.",
        path: "/aliuminio-sprendimai/aliuminio-pertvaros",
        serviceType: "Aliuminio pertvarų gamyba ir montavimas",
      }),
      breadcrumbSchema([
        { name: "Pradžia", path: "/" },
        { name: "Aliuminio sprendimai", path: "/aliuminio-sprendimai" },
        { name: "Aliuminio pertvaros", path: "/aliuminio-sprendimai/aliuminio-pertvaros" },
      ]),
      faqSchema(ALIUMINIO_PERTVAROS_FAQ),
    ];
  }

  if (segments.length === 2 && segments[0] === "aliuminio-fasadai") {
    const sys = getSystem(segments[1]);
    if (sys) {
      return [productSchema(sys), breadcrumbSchema(systemBreadcrumbItems(sys))];
    }
  }

  if (segments.length === 2 && segments[0] === "aliuminio-pertvaros") {
    const sys = getSystem(segments[1]);
    if (sys) {
      return [productSchema(sys), breadcrumbSchema(systemBreadcrumbItems(sys))];
    }
  }

  return null;
}

/** `app/stiklinimas/[[...slug]]` — hub ir žinomi sub-maršrutai. */
export function stiklinimasJsonLd(segments: string[] | undefined): Record<string, unknown>[] | null {
  if (!segments?.length) {
    return [
      serviceSchema({
        name: "Stiklinimas Šiauliuose",
        description:
          "Balkonų ir terasų stiklinimas Šiauliuose — plastikinės ir aliuminės sistemos, šiltos ir šaltos sistemos, montavimas.",
        path: "/stiklinimas",
        serviceType: "Balkonų ir terasų stiklinimas",
      }),
      breadcrumbSchema([
        { name: "Pradžia", path: "/" },
        { name: "Stiklinimas", path: "/stiklinimas" },
      ]),
      faqSchema(STIKLINIMAS_HUB_FAQ),
    ];
  }

  if (segments.length === 1 && segments[0] === "balkonu-stiklinimas") {
    return [
      serviceSchema({
        name: "Balkonų stiklinimas Šiauliuose",
        description:
          "Balkonų stiklinimas Šiauliuose — apsauga nuo lietaus, vėjo, triukšmo; plastikinės ir aliuminės sistemos; montavimas.",
        path: "/stiklinimas/balkonu-stiklinimas",
        serviceType: "Balkonų stiklinimas",
      }),
      breadcrumbSchema([
        { name: "Pradžia", path: "/" },
        { name: "Stiklinimas", path: "/stiklinimas" },
        { name: "Balkonų stiklinimas", path: "/stiklinimas/balkonu-stiklinimas" },
      ]),
      faqSchema(BALKONU_STIKLINIMAS_FAQ),
    ];
  }

  if (segments.length === 1 && segments[0] === "terasu-stiklinimas") {
    return [
      serviceSchema({
        name: "Terasų stiklinimas Šiauliuose",
        description:
          "Terasų stiklinimas Šiauliuose — stumdomos konstrukcijos, šiltos ir šaltos sistemos, ilgesnis naudojimo sezonas.",
        path: "/stiklinimas/terasu-stiklinimas",
        serviceType: "Terasų stiklinimas",
      }),
      breadcrumbSchema([
        { name: "Pradžia", path: "/" },
        { name: "Stiklinimas", path: "/stiklinimas" },
        { name: "Terasų stiklinimas", path: "/stiklinimas/terasu-stiklinimas" },
      ]),
      faqSchema(TERASU_STIKLINIMAS_FAQ),
    ];
  }

  return null;
}

export function stumdomosSistemosHubJsonLd(): Record<string, unknown>[] {
  return [
    serviceSchema({
      name: "Stumdomos sistemos Šiauliuose",
      description:
        "Plastikinės ir aliuminės stumdomos sistemos balkonams, terasoms ir vitrinoms Šiauliuose — parinkimas, gamyba ir montavimas.",
      path: "/stumdomos-sistemos",
      serviceType: "Stumdomų stiklo sistemų gamyba ir montavimas",
    }),
    breadcrumbSchema([
      { name: "Pradžia", path: "/" },
      { name: "Stumdomos sistemos", path: "/stumdomos-sistemos" },
    ]),
    faqSchema(STUMDOMOS_HUB_FAQ),
  ];
}

export function plastikinesStumdomosJsonLd(): Record<string, unknown>[] {
  return [
    serviceSchema({
      name: "Plastikinės stumdomos sistemos Šiauliuose",
      description:
        "Ekonomiškos plastikinės stumdomos sistemos balkonams, terasoms ir namams Šiauliuose — konsultacija, gamyba ir montavimas.",
      path: "/stumdomos-sistemos/plastikines-stumdomos-sistemos",
      serviceType: "Plastikinių stumdomų sistemų montavimas",
    }),
    breadcrumbSchema([
      { name: "Pradžia", path: "/" },
      { name: "Stumdomos sistemos", path: "/stumdomos-sistemos" },
      {
        name: "Plastikinės stumdomos sistemos",
        path: "/stumdomos-sistemos/plastikines-stumdomos-sistemos",
      },
    ]),
    faqSchema(PLASTIKINES_STUMDOMOS_FAQ),
  ];
}

export function aliuminesStumdomosJsonLd(): Record<string, unknown>[] {
  return [
    serviceSchema({
      name: "Aliuminės stumdomos sistemos Šiauliuose",
      description:
        "Aliuminės stumdomos ir sulankstomos sistemos terasoms, balkonams ir didelėms angoms Šiauliuose — Yawal sistemos, montavimas.",
      path: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
      serviceType: "Aliumininių stumdomų sistemų montavimas",
    }),
    breadcrumbSchema([
      { name: "Pradžia", path: "/" },
      { name: "Stumdomos sistemos", path: "/stumdomos-sistemos" },
      {
        name: "Aliuminės stumdomos sistemos",
        path: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
      },
    ]),
    faqSchema(ALIUMINES_STUMDOMOS_FAQ),
  ];
}

export function ziemosSodaiJsonLd(): Record<string, unknown>[] {
  return [
    serviceSchema({
      name: "Žiemos sodai Šiauliuose",
      description:
        "Žiemos sodai ir įstiklintos erdvės iš aliuminio konstrukcijų Šiauliuose — individualus projektas, gamyba ir montavimas.",
      path: "/ziemos-sodai",
      serviceType: "Žiemos sodų projektavimas ir montavimas",
    }),
    breadcrumbSchema([
      { name: "Pradžia", path: "/" },
      { name: "Žiemos sodai", path: "/ziemos-sodai" },
    ]),
    faqSchema(ZIEMOS_SODAI_FAQ),
  ];
}
