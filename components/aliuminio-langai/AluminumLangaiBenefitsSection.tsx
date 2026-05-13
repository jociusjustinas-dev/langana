import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";

const CARDS = [
  {
    title: "Tinka didelėms konstrukcijoms",
    body: "Aliuminio profiliai leidžia projektuoti didelius langus, vitrinas, duris ir fasadines konstrukcijas.",
  },
  {
    title: "Gera šilumos izoliacija",
    body: "Šiuolaikinės Yawal sistemos turi šilumos izoliacijos sprendimus, kurie padeda mažinti energijos sąnaudas.",
  },
  {
    title: "Modernus ir ilgaamžis sprendimas",
    body: "Aliuminis yra atsparus aplinkos poveikiui, o plonesni profiliai padeda sukurti šiuolaikišką pastato vaizdą.",
  },
] as const;

export type AluminumLangaiBenefitsSectionProps = {
  id?: string;
};

export function AluminumLangaiBenefitsSection({ id }: AluminumLangaiBenefitsSectionProps) {
  return (
    <AnimatedSection as="section" className="w-full bg-white" id={id}>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-14 md:flex-row md:items-start md:justify-between md:gap-10 md:px-[70px] md:pb-[50px] md:pt-[100px]">
        <div className="w-full min-w-0 max-w-[min(100%,38rem)] space-y-4">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Kodėl verta</span>
            <br />
            <span className="text-[#263cd0]">rinktis </span>
            <span className="text-[#16216b]">aliuminius langus?</span>
          </h2>
          <p className="w-full max-w-full text-base leading-relaxed text-[#16216b]">
            Aliuminio sistemos tinka tada, kai reikia tvirtumo, ilgaamžiškumo, didesnių konstrukcijų ir modernaus
            architektūrinio vaizdo.
          </p>
        </div>
        <Link
          className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
          href="/kontaktai#uzklausa"
        >
          Gauti pasiūlymą
        </Link>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
        {CARDS.map((card, i) => (
          <AnimatedSection delayMs={i * 70} key={card.title}>
            <FeatureHoverCard
              description={card.body}
              headingClassName="text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[30px] md:leading-[36px]"
              title={card.title}
            />
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}
