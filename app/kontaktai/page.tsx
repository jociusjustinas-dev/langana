import type { Metadata } from "next";

import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { KontaktaiPageView } from "@/components/kontaktai/KontaktaiPageView";

export const metadata: Metadata = {
  title: "Kontaktai — nemokama konsultacija",
  description:
    "Susisiekite su Langana: +370 606 20 666. Pardavimo salonas Tilžės g. 83b, Šiauliai. Užpildykite užklausą ir gaukite pasiūlymą per 24h.",
  alternates: { canonical: "/kontaktai" },
  openGraph: { title: "Kontaktai | Langana Šiauliai", url: "/kontaktai" },
};

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
