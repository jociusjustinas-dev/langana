import { SiteHeader } from "@/components/home/SiteHeader";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { AliuminesStumdomosSistemosSalesPage } from "@/components/stumdomos-sistemos/AliuminesStumdomosSistemosSalesPage";

export default function AliuminesStumdomosSistemosPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <AliuminesStumdomosSistemosSalesPage />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
  );
}
