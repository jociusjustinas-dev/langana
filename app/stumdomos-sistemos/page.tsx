import type { Metadata } from "next";

import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StumdomosSistemosCategoryPage } from "@/components/stumdomos-sistemos/StumdomosSistemosCategoryPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { stumdomosSistemosHubJsonLd } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Stumdomos sistemos Šiauliuose",
  description:
    "Aliuminės ir plastikinės stumdomos sistemos Šiauliuose – didelės stiklo angos, sklandus atidarymas, modernus dizainas. Tinka terasoms ir interjerui.",
  path: "/stumdomos-sistemos",
});

export default function StumdomosSistemosPage() {
  return (
    <>
      <JsonLd data={stumdomosSistemosHubJsonLd()} />
      <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <StumdomosSistemosCategoryPage />
        <HomeCta
          showPattern
          subtitle="Nemokama konsultacija ir matavimas."
          title="Domina stumdoma sistema?"
          titleHighlight="Pasitarkime"
        />
        <SiteFooter />
      </main>
    </div>
    </>
  );
}
