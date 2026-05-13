import type { Metadata } from "next";

import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ZiemosSodaiPage } from "@/components/ziemos-sodai/ZiemosSodaiPage";

export const metadata: Metadata = {
  title: "Žiemos sodai",
  description:
    "Šilti ir šalti žiemos sodai Šiauliuose — individualus projektavimas, aliuminio konstrukcijos, montavimas per 5 dienas. Gaukite nemokamą pasiūlymą.",
  alternates: { canonical: "/ziemos-sodai" },
  openGraph: { title: "Žiemos sodai | Langana Šiauliai", url: "/ziemos-sodai" },
};

export default function ZiemosSodaiRoutePage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <ZiemosSodaiPage />
        <HomeCta
          showPattern
          subtitle="Individualus projektas ir pasiūlymas — nemokamai."
          title="Svajojate apie žiemos sodą?"
        />
        <SiteFooter />
      </main>
    </div>
  );
}
