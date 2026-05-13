import { LangaiCategoryPage } from "@/components/category/LangaiCategoryPage";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export default function LangaiPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <LangaiCategoryPage />
        <HomeCta
          subtitle="Nemokamas matavimas ir pasiūlymas per 24 val."
          title="Norite naujų langų?"
          titleHighlight="Gauti tikslią kainą"
        />
        <SiteFooter />
      </main>
    </div>
  );
}
