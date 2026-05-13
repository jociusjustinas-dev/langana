import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StumdomosSistemosCategoryPage } from "@/components/stumdomos-sistemos/StumdomosSistemosCategoryPage";

export default function StumdomosSistemosPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <StumdomosSistemosCategoryPage />
        <HomeCta
          showPattern
          subtitle="Nemokama konsultacija ir matavimas."
          title="Domina stumdoma sistema?"
          titleHighlight="Pasitarkime"
        />
        <SiteFooter />
      </main>
    </div>
  );
}
