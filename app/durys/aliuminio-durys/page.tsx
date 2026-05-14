import type { Metadata } from "next";

import { AliuminioDurysSalesPage } from "@/components/durys/AliuminioDurysSalesPage";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { ALIUMINIO_DURYS_FAQ } from "@/data/structured-data-faqs";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Aliuminio durys Šiauliuose",
  description:
    "Aliuminio durys Šiauliuose – modernus dizainas, ilgaamžiškumas, dideli stiklo paketai. Tinka įėjimui ir komercinėms patalpoms. Pasiūlymas per 24 val.",
  path: "/durys/aliuminio-durys",
});

export default function AliuminioDurysPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Aliuminio durys Šiauliuose",
            description:
              "Aliuminio lauko durys Šiauliuose — tvirtumas, modernus dizainas, saugumas ir montavimas pagal objektą.",
            path: "/durys/aliuminio-durys",
            serviceType: "Aliuminio durų gamyba ir montavimas",
          }),
          breadcrumbSchema([
            { name: "Pradžia", path: "/" },
            { name: "Durys", path: "/durys" },
            { name: "Aliuminio durys", path: "/durys/aliuminio-durys" },
          ]),
          faqSchema(ALIUMINIO_DURYS_FAQ),
        ]}
      />
      <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <AliuminioDurysSalesPage />
        <SiteMainClosing />
      </main>
    </div>
    </>
  );
}
