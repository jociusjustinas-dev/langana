import { Layers, Palette, Settings2, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import type { ProductInnerOption } from "@/data/product-inner/types";

import { ProductSectionHeading } from "./ProductSectionHeading";

const ICONS = [Palette, Layers, Settings2, Sparkles] as const;

/** Galimi pasirinkimai — keturios glifų kortelės. */
export function ProductOptionsGrid({ options }: { options: ProductInnerOption[] }) {
  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]">
      <div className="mx-auto max-w-[1300px]">
        <ProductSectionHeading className="text-[28px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
          Pasirinkimai ir variacijos
        </ProductSectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <AnimatedSection delayMs={i * 70} key={opt.title}>
                <div className="flex flex-col gap-4 rounded-2xl border border-[#e8eaf5] bg-[#fafbff] p-8 transition hover:border-[#263cd0]/30">
                  <Icon aria-hidden className="size-10 text-[#263cd0]" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-[#16216b]">{opt.title}</h3>
                  {opt.description ? (
                    <p className="text-[14px] leading-relaxed text-[#16216b]">{opt.description}</p>
                  ) : null}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
