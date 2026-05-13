import { Check, X } from "lucide-react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import type { ProductInnerContent } from "@/data/product-inner/types";

import { ProductSectionHeading } from "./ProductSectionHeading";

type ProductUseCasesData = NonNullable<ProductInnerContent["useCases"]>;

/** Kam tinka / kam mažiau — dvi kolonos. */
export function ProductUseCases({ data }: { data: ProductUseCasesData }) {
  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]">
      <div className="mx-auto max-w-[1300px]">
        <ProductSectionHeading className="max-w-2xl text-[28px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px] md:leading-[1.15]">
          {data.heading}
        </ProductSectionHeading>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[15px] font-semibold text-[#263cd0]">{data.goodTitle}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {data.good.map((line) => (
                <li className="flex items-center gap-3 text-[15px] leading-relaxed text-[#16216b]" key={line}>
                  <Check aria-hidden className="size-5 shrink-0 text-emerald-600" strokeWidth={2.5} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[15px] font-semibold text-[#16216b]">{data.badTitle}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {data.bad.map((line) => (
                <li className="flex items-center gap-3 text-[15px] leading-relaxed text-[#16216b]" key={line}>
                  <X aria-hidden className="size-5 shrink-0 text-[#c45c5c]" strokeWidth={2.5} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
