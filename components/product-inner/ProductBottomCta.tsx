import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";

/** Papildoma CTA juosta vidiniams puslapiams (pvz. TM 62 trumpasis variantas). */
export function ProductBottomCta({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: { label: string; href: string };
}) {
  return (
    <AnimatedSection as="section" className="w-full bg-[#f6f7ff] px-4 py-14 md:px-[70px] md:py-[88px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
        <h2 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#16216b] md:text-[36px] md:leading-[1.12]">
          {title}
        </h2>
        <p className="text-[15px] font-normal leading-relaxed text-[#16216b] md:text-[16px] md:leading-[1.5]">
          {description}
        </p>
        <div className="flex flex-col items-center">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-[30px] py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
            href={cta.href}
          >
            {cta.label}
          </Link>
          <p className="mt-2 text-[13px] font-medium text-[#16216b]">
            Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
