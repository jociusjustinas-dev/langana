"use client";

import { Mail, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export type FaqItem = { question: string; answer: string };

export type FaqSectionProps = {
  /** Numatyta: „Jūsų klausimai.“ (mėlyna dalis). */
  headingLead?: string;
  /** Numatyta: „Išsamūs atsakymai.“ (antra eilutė). */
  headingRest?: string;
  items: readonly FaqItem[];
  /** Sekcijos `id` (inkarai, pvz. `duk-produktas`). */
  sectionId?: string;
  /** Unikalus prefiksas accordion mygtukams (kai keli DUK skirtinguose puslapiuose). */
  faqIdPrefix?: string;
};

export function FaqSection({
  headingLead = "Jūsų klausimai.",
  headingRest = "Išsamūs atsakymai.",
  items,
  sectionId = "duk-plastikiniai",
  faqIdPrefix = "plastic-faq",
}: FaqSectionProps) {
  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id={sectionId}>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:gap-12 lg:flex-row lg:gap-[100px]">
        <div className="flex shrink-0 flex-col gap-14 lg:max-w-md">
          <h2 className="text-4xl font-semibold leading-[1.2] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">{headingLead}</span>
            <span className="block text-[#16216b]">{headingRest}</span>
          </h2>
          <div className="hidden flex-col gap-2.5 md:flex">
            <div className="flex gap-[18px] py-1.5">
              <Phone aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold text-[#16216b]">Turite klausimų?</p>
                <a
                  className="text-sm leading-normal text-[#263cd0] underline-offset-2 hover:underline"
                  href="tel:+37060620666"
                >
                  +370 606 20 666
                </a>
              </div>
            </div>
            <div className="flex gap-[18px] py-1.5">
              <Mail aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold text-[#16216b]">Parašykite mums</p>
                <a
                  className="text-sm leading-normal text-[#263cd0] underline-offset-2 hover:underline"
                  href="mailto:uablangana@gmail.com"
                >
                  uablangana@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <FaqAccordion idPrefix={faqIdPrefix} items={items} />
      </div>
    </AnimatedSection>
  );
}
