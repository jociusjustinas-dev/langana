import type { Metadata } from "next";

import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ZiemosSodaiPage } from "@/components/ziemos-sodai/ZiemosSodaiPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Žiemos sodai Šiauliuose – aliuminio konstrukcijos",
  description:
    "Žiemos sodai Šiauliuose – aliuminio konstrukcijos, panoraminis stiklas, šilumos izoliacija. Erdvė poilsiui ar darbui. Individualus projektas ir montavimas.",
  path: "/ziemos-sodai",
});

export default function ZiemosSodaiRoutePage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <ZiemosSodaiPage />
        <HomeCta
          showPattern
          subtitle="Individualus projektas ir pasiūlymas — nemokamai."
          title="Svajojate apie žiemos sodą?"
        />
        <SiteFooter />
      </main>
    </div>
  );
}
