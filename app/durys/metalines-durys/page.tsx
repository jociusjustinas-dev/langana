import type { Metadata } from "next";

import { MetalinesDurysSalesPage } from "@/components/durys/MetalinesDurysSalesPage";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Metalinės lauko durys Šiauliuose",
  description:
    "Metalinės lauko durys Šiauliuose – aukštas saugumo lygis, kokybiškas montavimas, garantija. Tinka privatiems namams ir butams. Nemokamas matavimas.",
  path: "/durys/metalines-durys",
});

export default function MetalinesDurysPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <MetalinesDurysSalesPage />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
  );
}
