import { HeroBento } from "@/components/home/HeroBento";
import { HomeCompletedProjectsSection } from "@/components/home/HomeCompletedProjectsSection";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { HomePreloader } from "@/components/home/HomePreloader";
import { HomeWhyChooseSection } from "@/components/home/HomeWhyChooseSection";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";

/** Pagrindinis puslapis — turinys visada SSR; preloader tik kliento sluoksnyje. */
export function HomePage() {
  return (
    <div className="flex min-h-full flex-col bg-[#f6f7ff] text-[#16216b]">
      <HomePreloader />
      <SiteHeader homeEntrance />
      <main className="flex min-h-0 flex-1 flex-col" style={{ paddingTop: 0 }}>
        <HeroBento />
        <HomeWhyChooseSection />
        <HomeCompletedProjectsSection />
        <HomeFaqSection />
        <SiteMainClosing />
      </main>
    </div>
  );
}
