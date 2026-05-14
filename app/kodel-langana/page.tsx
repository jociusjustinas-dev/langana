import type { Metadata } from "next";

import { KodelLanganaPage } from "@/components/about/KodelLanganaPage";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Kodėl rinktis Langana – apie mus, patirtis Šiauliuose",
  description:
    "Apie Langana – 20+ metų patirties langų, durų ir stiklinimo srityje Šiauliuose. 300+ projektų, sertifikuota kokybė ir asmeninis aptarnavimas.",
  path: "/kodel-langana",
});

export default function KodelLanganaRoute() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <KodelLanganaPage />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
  );
}
