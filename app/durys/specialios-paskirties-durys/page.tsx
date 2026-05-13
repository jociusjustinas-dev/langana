import { SpecialiosPaskirtiesDurysSalesPage } from "@/components/durys/SpecialiosPaskirtiesDurysSalesPage";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export default function SpecialiosPaskirtiesDurysPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <SpecialiosPaskirtiesDurysSalesPage />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
  );
}
