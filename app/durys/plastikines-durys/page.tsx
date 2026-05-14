import type { Metadata } from "next";

import { PlastikinesDurysSalesPage } from "@/components/durys/PlastikinesDurysSalesPage";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Plastikinės durys Šiauliuose",
  description:
    "Plastikinės lauko durys Šiauliuose – šilumos izoliacija, sandarumas, ekonomiškas pasirinkimas. Profesionalus montavimas, garantija, nemokamas matavimas.",
  path: "/durys/plastikines-durys",
});

export default function PlastikinesDurysPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <PlastikinesDurysSalesPage />
        <SiteMainClosing />
      </main>
    </div>
  );
}
