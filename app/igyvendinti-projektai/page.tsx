import type { Metadata } from "next";

import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { ImplementedProjectsGallery } from "@/components/projects/ImplementedProjectsGallery";
import { KONTAKTAI_FORM_HREF } from "@/lib/contact-href";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Įgyvendinti projektai ir galerija – Šiauliai",
  description:
    "Langana įgyvendintų projektų galerija – plastikiniai langai, balkonų stiklinimas, terasos, žiemos sodai. Realūs darbai Šiauliuose ir Lietuvoje.",
  path: "/igyvendinti-projektai",
});

const HERO_BG = "/images/Langai/ChatGPT Image May 7, 2026, 02_58_42 PM (6).png";

export default function IgyvendintiProjektaiPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <SalesHero
          backgroundImageSrc={HERO_BG}
          ctaPrimary={{ href: KONTAKTAI_FORM_HREF, label: "Gauti pasiūlymą" }}
          ctaSecondary={{ href: "#projektai-galerija", label: "Žiūrėti projektus" }}
          description="Peržiūrėkite Langana atliktus langų, durų, stiklinimo ir aliuminio konstrukcijų projektus privatiems namams, daugiabučiams, komerciniams ir viešosios paskirties objektams."
          heroUrgencyLine
          title="Įgyvendinti projektai"
        />
        <ImplementedProjectsGallery />
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
  );
}
