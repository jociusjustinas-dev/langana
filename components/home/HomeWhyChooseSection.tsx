import Link from "next/link";

import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { HOME_WHY_CHOOSE } from "@/data/home-page-content";

/** „Kodėl rinktis Langana“ — server-rendered privalumai (tas pats vizualas kaip BenefitsSection). */
export function HomeWhyChooseSection() {
  return (
    <section aria-labelledby="home-why-heading" className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-14 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-[50px] md:pt-[100px]">
        <h2
          className="max-w-3xl text-3xl font-semibold leading-[1.18] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]"
          id="home-why-heading"
        >
          <span className="text-[#263cd0]">Kodėl rinktis</span>
          <span className="text-[#16216b]"> Langana</span>
        </h2>
        <Link
          className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
          href="/kontaktai#uzklausa"
        >
          Gauti pasiūlymą
        </Link>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
        {HOME_WHY_CHOOSE.map((card) => (
          <FeatureHoverCard
            description={card.body}
            headingClassName="text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[25px] md:leading-[30px]"
            key={card.title}
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
}
