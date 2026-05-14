import type { Metadata } from "next";

import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { KontaktaiPageView } from "@/components/kontaktai/KontaktaiPageView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Kontaktai – Langana Šiauliuose",
  description:
    "Langana kontaktai – Tilžės g. 83b, Šiauliai. Tel. +370 606 20 666. Darbo laikas Pr–Pt 8–17, Š 9–13. Konsultacija ir matavimas nemokamai.",
  path: "/kontaktai",
});

export default function KontaktaiPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <KontaktaiPageView />
        <SiteFooter />
      </main>
    </div>
  );
}
