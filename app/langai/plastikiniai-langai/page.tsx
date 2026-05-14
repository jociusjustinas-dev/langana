import type { Metadata } from "next";

import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";
import { PlastikiniaiLangaiSalesPage } from "@/components/plastikiniai-langai/PlastikiniaiLangaiSalesPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Plastikiniai langai Šiauliuose – Kömmerling, Wital, Veka",
  description:
    "Plastikiniai langai Šiauliuose – Kömmerling 76/88, Wital ir Veka sistemos. Šilumos pralaidumas iki Uw 0,72. Garantija, profesionalus montavimas.",
  path: "/langai/plastikiniai-langai",
});

export default function PlastikiniaiLangaiPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <PlastikiniaiLangaiSalesPage />
        <SiteMainClosing />
      </main>
    </div>
  );
}
