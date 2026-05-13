import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";

export type ComparisonTeaserProps = {
  title: string;
  ctaLabel: string;
  href: string;
};

export function ComparisonTeaser({ title, ctaLabel, href }: ComparisonTeaserProps) {
  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 pb-10 pt-2 md:px-[70px] md:pb-12 md:pt-4">
      <div className="mx-auto flex min-w-0 max-w-[1440px] flex-col items-start justify-between gap-6 rounded-2xl bg-[#263cd0] px-6 py-8 md:flex-row md:items-center md:gap-10 md:px-10 md:py-10">
        <p className="min-w-0 max-w-2xl text-xl font-semibold leading-snug tracking-[-0.02em] text-white md:text-[26px] md:leading-[1.28]">
          {title}
        </p>
        <Link
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-white bg-transparent px-8 py-[13px] text-[15px] font-semibold text-white transition hover:bg-white hover:text-[#263cd0]"
          href={href}
        >
          {ctaLabel}
        </Link>
      </div>
    </AnimatedSection>
  );
}
