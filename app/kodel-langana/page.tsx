import type { Metadata } from "next";

import { KodelLanganaPage } from "@/components/about/KodelLanganaPage";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Kodėl rinktis Langana?",
  description:
    "Sertifikuota kokybė, greitas montavimas ir ilgalaikė garantija. Sužinokite kodėl šimtai klientų pasirinko Langana langus ir duris Šiauliuose.",
  alternates: { canonical: "/kodel-langana" },
  openGraph: { title: "Kodėl rinktis Langana?", url: "/kodel-langana" },
};

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
