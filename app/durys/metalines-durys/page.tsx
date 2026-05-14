import type { Metadata } from "next";

import { MetalinesDurysSalesPage } from "@/components/durys/MetalinesDurysSalesPage";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { METALINES_DURYS_FAQ } from "@/data/structured-data-faqs";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Metalinės lauko durys Šiauliuose",
  description:
    "Metalinės lauko durys Šiauliuose – aukštas saugumo lygis, kokybiškas montavimas, garantija. Tinka privatiems namams ir butams. Nemokamas matavimas.",
  path: "/durys/metalines-durys",
});

export default function MetalinesDurysPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Metalinės lauko durys Šiauliuose",
            description:
              "Metalinės lauko durys Šiauliuose — saugumas, ilgaamžiškumas, ekonomiškas sprendimas ir profesionalus montavimas.",
            path: "/durys/metalines-durys",
            serviceType: "Metalinių durų gamyba ir montavimas",
          }),
          breadcrumbSchema([
            { name: "Pradžia", path: "/" },
            { name: "Durys", path: "/durys" },
            { name: "Metalinės durys", path: "/durys/metalines-durys" },
          ]),
          faqSchema(METALINES_DURYS_FAQ),
        ]}
      />
      <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <MetalinesDurysSalesPage />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
    </>
  );
}
