import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { BalkonuStiklinimasPage } from "@/components/stiklinimas/BalkonuStiklinimasPage";
import { StiklinimasCategoryPage } from "@/components/stiklinimas/StiklinimasCategoryPage";
import { TerasuStiklinimasPage } from "@/components/stiklinimas/TerasuStiklinimasPage";

type Props = { params: Promise<{ slug?: string[] }> };

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
