import type { Metadata } from "next";

import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { AliuminesStumdomosSistemosSalesPage } from "@/components/stumdomos-sistemos/AliuminesStumdomosSistemosSalesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { aliuminesStumdomosJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Aliuminės stumdomos sistemos Šiauliuose",
  description:
    "Aliuminės stumdomos sistemos Šiauliuose – patogus išėjimas į terasą, didelės stiklo angos, plonas profilis, ilgaamžiškumas. Nemokamas matavimas.",
  path: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
});

export default function AliuminesStumdomosSistemosPage() {
  return (
    <>
      <JsonLd data={aliuminesStumdomosJsonLd()} />
      <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <AliuminesStumdomosSistemosSalesPage />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
    </>
  );
}
