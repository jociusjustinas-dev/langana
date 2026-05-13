import { PlastikiniaiLangaiSalesPage } from "@/components/plastikiniai-langai/PlastikiniaiLangaiSalesPage";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";

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
