import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";

/** „Kodėl rinktis…“ — Figma Benefits (8070:11880 kategorija, 8070:11881 subkategorija): be ikonų. */
const SHARED_ITEMS = [
  {
    title: "Greitas įrengimas",
    body: "Suprantame, kad jūsų laikas yra brangus, todėl mūsų specialistai darbus atlieka greitai, per 1–5 dienas.",
  },
  {
    title: "Sertifikuota kokybė",
    body: "Galite būti ramūs, nes gaminiai pagaminti laikantis griežtų saugos ir eksploatacinių savybių standartų, todėl tarnaus ilgus metus.",
  },
  {
    title: "Garantijos užtikrinimas",
    body: "Mėgaukitės ramybe, žinodami, kad visiems mūsų gaminiams suteikiamos visapusiškos garantijos ir išskirtinis klientų aptarnavimas.",
  },
] as const;

export type BenefitsSectionVariant = "categoryLangai" | "plasticSubcategory";

export type BenefitsSectionProps = {
  variant: BenefitsSectionVariant;
  /** pvz. sekcijos inkaras */
  id?: string;
};

export function BenefitsSection({ variant, id }: BenefitsSectionProps) {
  const isCategory = variant === "categoryLangai";
  const headerCta = isCategory
    ? { label: "Gauti pasiūlymą" as const, href: "/kontaktai#uzklausa" as const }
    : { label: "Gaukite pasiūlymą" as const, href: "/kontaktai#uzklausa" as const };

  const titleClass = isCategory
    ? "text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[25px] md:leading-[30px]"
    : "text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[30px] md:leading-[36px]";

  return (
    <AnimatedSection as="section" className="w-full bg-white" id={id}>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-14 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-[50px] md:pt-[100px]">
        <h2 className="max-w-3xl text-3xl font-semibold leading-[1.18] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]">
          <span className="text-[#263cd0]">Kodėl rinktis</span>
          <span className="text-[#16216b]"> mūsų produktus?</span>
        </h2>
        <Link
          className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
          href={headerCta.href}
        >
          {headerCta.label}
        </Link>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
        {SHARED_ITEMS.map((card, i) => (
          <AnimatedSection delayMs={i * 70} key={card.title}>
            <FeatureHoverCard
              description={card.body}
              headingClassName={titleClass}
              title={card.title}
            />
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}
