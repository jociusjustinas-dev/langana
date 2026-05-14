import type { Metadata } from "next";

import { SpecialiosPaskirtiesDurysSalesPage } from "@/components/durys/SpecialiosPaskirtiesDurysSalesPage";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { SPECIALIOS_DURYS_FAQ } from "@/data/structured-data-faqs";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Specialios paskirties durys Šiauliuose",
  description:
    "Specialios paskirties durys Šiauliuose – priešgaisrinės, garsą slopinančios, technologinės. Sertifikuoti gaminiai, profesionalus montavimas.",
  path: "/durys/specialios-paskirties-durys",
});

export default function SpecialiosPaskirtiesDurysPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Specialios paskirties durys Šiauliuose",
            description:
              "Specialios paskirties durys Šiauliuose — priešgaisrinės, techninės ir kitos paskirties sprendimai pagal objekto reikalavimus.",
            path: "/durys/specialios-paskirties-durys",
            serviceType: "Specialių durų parinkimas ir montavimas",
          }),
          breadcrumbSchema([
            { name: "Pradžia", path: "/" },
            { name: "Durys", path: "/durys" },
            {
              name: "Specialios paskirties durys",
              path: "/durys/specialios-paskirties-durys",
            },
          ]),
          faqSchema(SPECIALIOS_DURYS_FAQ),
        ]}
      />
      <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <SpecialiosPaskirtiesDurysSalesPage />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
    </>
  );
}
