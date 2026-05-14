import type { Metadata } from "next";

import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { PlastikinesStumdomosSistemosSalesPage } from "@/components/stumdomos-sistemos/PlastikinesStumdomosSistemosSalesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { plastikinesStumdomosJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Plastikinės stumdomos sistemos Šiauliuose",
  description:
    "Plastikinės stumdomos sistemos Šiauliuose – šilumos izoliacija, ekonomiškas sprendimas balkonams ir terasoms. Profesionalus montavimas, garantija.",
  path: "/stumdomos-sistemos/plastikines-stumdomos-sistemos",
});

export default function PlastikinesStumdomosSistemosPage() {
  return (
    <>
      <JsonLd data={plastikinesStumdomosJsonLd()} />
      <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <PlastikinesStumdomosSistemosSalesPage />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
    </>
  );
}
