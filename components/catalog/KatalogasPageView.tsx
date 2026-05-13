import { HeroBento } from "@/components/home/HeroBento";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";

export function KatalogasPageView() {
  return (
    <div className="flex min-h-full flex-col bg-[#f6f7ff] text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <HeroBento mode="katalog" />
        <SiteMainClosing />
      </main>
    </div>
  );
}
