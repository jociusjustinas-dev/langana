import type { Metadata } from "next";

import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { BalkonuStiklinimasPage } from "@/components/stiklinimas/BalkonuStiklinimasPage";
import { StiklinimasCategoryPage } from "@/components/stiklinimas/StiklinimasCategoryPage";
import { TerasuStiklinimasPage } from "@/components/stiklinimas/TerasuStiklinimasPage";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug?: string[] }> };

function pathFromStiklinimasSegments(segments: string[] | undefined): string {
  if (!segments?.length) return "/stiklinimas";
  return `/stiklinimas/${segments.join("/")}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const segments = slug ?? [];
  const path = pathFromStiklinimasSegments(segments);

  if (segments.length === 0) {
    return pageMeta({
      title: "Stiklinimas Šiauliuose – balkonai ir terasos",
      description:
        "Balkonų ir terasų stiklinimas Šiauliuose – plastiku ar aliuminiu, šiltos ir šaltos sistemos. Apsauga nuo vėjo, lietaus, triukšmo. Nemokamas matavimas.",
      path,
    });
  }

  if (segments.length === 1 && segments[0] === "balkonu-stiklinimas") {
    return pageMeta({
      title: "Balkonų stiklinimas Šiauliuose – plastiku ir aliuminiu",
      description:
        "Balkonų stiklinimas Šiauliuose – plastiku ir aliuminiu. Apsauga nuo vėjo, lietaus, sniego, triukšmo. 200+ įstiklintų balkonų. Nemokamas pasiūlymas.",
      path,
    });
  }

  if (segments.length === 1 && segments[0] === "terasu-stiklinimas") {
    return pageMeta({
      title: "Terasų stiklinimas Šiauliuose",
      description:
        "Terasų stiklinimas Šiauliuose – stumdomi sprendimai, šiltos ir šaltos sistemos. Erdvė naudojama ištisus metus. Konsultacija ir matavimas nemokamai.",
      path,
    });
  }

  const trail = segments.map((s) => labelFromKebab(s)).join(" — ");
  return pageMeta({
    title: `${trail} – stiklinimas`,
    description: `Stiklinimas Šiauliuose: ${trail}. Matavimas ir pasiūlymas nemokamai.`,
    path,
    noindex: true,
  });
}

export default async function StiklinimasPage({ params }: Props) {
  const { slug } = await params;
  const isHub = !slug?.length;
  const page = !slug?.length ? (
    <StiklinimasCategoryPage />
  ) : slug.length === 1 && slug[0] === "balkonu-stiklinimas" ? (
    <BalkonuStiklinimasPage />
  ) : slug.length === 1 && slug[0] === "terasu-stiklinimas" ? (
    <TerasuStiklinimasPage />
  ) : (
    (() => {
      const trail = slug.map((s) => labelFromKebab(s)).join(" — ");
      return <CategoryPageStub label={trail} />;
    })()
  );

  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        {page}
        <HomeCta
          showPattern
          {...(isHub
            ? {
                title: "Norite įstiklinti balkoną?",
                titleHighlight: "Gauti pasiūlymą",
                subtitle: "Matavimas ir pasiūlymas — nemokamai.",
              }
            : {})}
        />
        <SiteFooter />
      </main>
    </div>
  );
}
