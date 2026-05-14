import type { Metadata } from "next";

import { AliuminioDurysSalesPage } from "@/components/durys/AliuminioDurysSalesPage";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Aliuminio durys Šiauliuose",
  description:
    "Aliuminio durys Šiauliuose – modernus dizainas, ilgaamžiškumas, dideli stiklo paketai. Tinka įėjimui ir komercinėms patalpoms. Pasiūlymas per 24 val.",
  path: "/durys/aliuminio-durys",
});

export default function AliuminioDurysPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <AliuminioDurysSalesPage />
        <SiteMainClosing />
      </main>
    </div>
  );
}
