import type { Metadata } from "next";

import { DurysCategoryPage } from "@/components/category/DurysCategoryPage";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Durys Šiauliuose – plastikinės, aliuminio, metalinės",
  description:
    "Lauko ir vidaus durys Šiauliuose – plastikinės, aliuminio, metalinės, specialios paskirties. Saugumas, šilumos izoliacija. Pasiūlymas per 24 val.",
  path: "/durys",
});

export default function DurysPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <DurysCategoryPage />
        <HomeCta
          subtitle="Konsultacija ir pasiūlymas — nemokamai."
          title="Renkamės duris?"
          titleHighlight="Aptarkime poreikius"
        />
        <SiteFooter />
      </main>
    </div>
  );
}
