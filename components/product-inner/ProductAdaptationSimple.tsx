"use client";

import { Mail, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";

import { AdaptationSectionTitle } from "./AdaptationSectionTitle";

export function ProductAdaptationSimple({
  title,
  intro,
  bullets,
}: {
  title: string;
  intro: string;
  bullets: string[];
}) {
  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
        <div className="flex w-full max-w-[502px] shrink-0 flex-col gap-12 lg:gap-[60px]">
          <AdaptationSectionTitle title={title} />
          <div className="flex flex-col gap-2.5">
            <div className="flex gap-[18px] py-1.5">
              <Phone aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold leading-normal text-[#16216b]">Turite klausimų?</p>
                <a
                  className="mt-0.5 block text-[14px] font-normal leading-[1.5] text-[#263cd0] underline-offset-2 hover:underline"
                  href="tel:+37060620666"
                >
                  +370 606 20 666
                </a>
              </div>
            </div>
            <div className="flex gap-[18px] py-1.5">
              <Mail aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold leading-normal text-[#16216b]">Parašykite mums</p>
                <a
                  className="mt-0.5 block text-[14px] font-normal leading-[1.5] text-[#263cd0] underline-offset-2 hover:underline"
                  href="mailto:uablangana@gmail.com"
                >
                  uablangana@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-8">
          {intro.trim() ? (
            <p className="text-[16px] font-normal leading-[1.5] text-[#16216b]">{intro}</p>
          ) : null}
          <div>
            <p className="text-[15px] font-semibold leading-normal text-[#16216b] md:text-[16px]">
              Galima rinktis:
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {bullets.map((line) => (
                <li
                  className="flex items-center gap-3 text-[15px] font-normal leading-relaxed text-[#16216b] md:text-[16px] md:leading-[1.5]"
                  key={line}
                >
                  <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#263cd0]" />
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
