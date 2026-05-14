import type { Metadata } from "next";

import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";
import { PlastikiniaiLangaiSalesPage } from "@/components/plastikiniai-langai/PlastikiniaiLangaiSalesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { PLASTIKINIAI_LANGAI_FAQ } from "@/data/structured-data-faqs";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Plastikiniai langai Šiauliuose – Kömmerling, Wital, Veka",
  description:
    "Plastikiniai langai Šiauliuose – Kömmerling 76/88, Wital ir Veka sistemos. Šilumos pralaidumas iki Uw 0,72. Garantija, profesionalus montavimas.",
  path: "/langai/plastikiniai-langai",
});

export default function PlastikiniaiLangaiPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Plastikiniai langai Šiauliuose",
            description:
              "Plastikiniai langai su Kömmerling, Wital ir Veka profiliais Šiauliuose — šiluma, sandarumas ir montavimas.",
            path: "/langai/plastikiniai-langai",
            serviceType: "Plastikinių langų gamyba ir montavimas",
          }),
          breadcrumbSchema([
            { name: "Pradžia", path: "/" },
            { name: "Langai", path: "/langai" },
            { name: "Plastikiniai langai", path: "/langai/plastikiniai-langai" },
          ]),
          faqSchema(PLASTIKINIAI_LANGAI_FAQ),
        ]}
      />
      <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <PlastikiniaiLangaiSalesPage />
        <SiteMainClosing />
      </main>
    </div>
    </>
  );
}
