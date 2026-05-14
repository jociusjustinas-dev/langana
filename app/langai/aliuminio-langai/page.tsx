import type { Metadata } from "next";

import { AliuminiaiLangaiSalesPage } from "@/components/aliuminio-langai/AliuminiaiLangaiSalesPage";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Aliuminio langai Šiauliuose – plonas profilis, dideli stiklai",
  description:
    "Aliuminio langai Šiauliuose – plonas profilis, didelės stiklo angos, ilgaamžiškumas. Tinka šiuolaikiškiems namams ir komercijai. Gauk pasiūlymą.",
  path: "/langai/aliuminio-langai",
});

export default function AliuminioLangaiPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <AliuminiaiLangaiSalesPage />
        <SiteMainClosing />
      </main>
    </div>
  );
}
