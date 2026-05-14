import type { Metadata } from "next";

import { PlastikinesDurysSalesPage } from "@/components/durys/PlastikinesDurysSalesPage";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { PLASTIKINES_DURYS_FAQ } from "@/data/structured-data-faqs";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Plastikinės durys Šiauliuose",
  description:
    "Plastikinės lauko durys Šiauliuose – šilumos izoliacija, sandarumas, ekonomiškas pasirinkimas. Profesionalus montavimas, garantija, nemokamas matavimas.",
  path: "/durys/plastikines-durys",
});

export default function PlastikinesDurysPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Plastikinės durys Šiauliuose",
            description:
              "Plastikinės lauko durys Šiauliuose — šilumos izoliacija, sandarumas, ekonomiškas sprendimas ir profesionalus montavimas.",
            path: "/durys/plastikines-durys",
            serviceType: "Plastikinių durų gamyba ir montavimas",
          }),
          breadcrumbSchema([
            { name: "Pradžia", path: "/" },
            { name: "Durys", path: "/durys" },
            { name: "Plastikinės durys", path: "/durys/plastikines-durys" },
          ]),
          faqSchema(PLASTIKINES_DURYS_FAQ),
        ]}
      />
      <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <PlastikinesDurysSalesPage />
        <SiteMainClosing />
      </main>
    </div>
    </>
  );
}
