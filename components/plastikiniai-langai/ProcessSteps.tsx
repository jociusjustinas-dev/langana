"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { uiEaseClass } from "@/lib/ui-motion";

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProcessStepsProps = {
  headingLine1: string;
  /** Jei nenurodyta, rodoma tik pirmoji antraštės eilutė. */
  headingLine2?: string;
  steps: readonly ProcessStep[];
  /** Sekcijos inkaras (pvz. `procesas-plastikines`). */
  id?: string;
};

export function ProcessSteps({ headingLine1, headingLine2, steps, id }: ProcessStepsProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <AnimatedSection as="section" className="no-rounded w-full bg-[#263cd0] px-4 py-16 md:px-[70px] md:py-[100px]" id={id}>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 md:gap-[60px]">
        <div className="font-semibold tracking-[-0.036em] text-white">
          <p className="text-[28px] leading-snug text-white opacity-100 md:text-[40px]">{headingLine1}</p>
          {headingLine2 ? (
            <p className="mt-1 text-[28px] leading-snug text-white opacity-100 md:mt-0 md:text-[40px]">{headingLine2}</p>
          ) : null}
        </div>

        <div className="flex w-full flex-col">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;
            const isFirst = index === 0;

            return (
              <div
                className={`border-b border-white ${isFirst ? "border-t border-white" : ""}`}
                key={step.title}
              >
                <div className="flex flex-col">
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-8 text-left md:gap-8 md:py-10"
                    onClick={() => toggle(index)}
                    type="button"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-6 md:gap-[50px]">
                      <span
                        className={`shrink-0 font-normal tabular-nums text-base leading-6 transition-colors ${
                          isOpen ? "text-white" : "text-white/70"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="min-w-0 text-[22px] font-semibold leading-tight text-white md:text-[30px]">
                        {step.title}
                      </span>
                    </div>
                    <span className="flex size-[41px] shrink-0 items-center justify-center rounded-full bg-white text-[#263cd0]">
                      <span className="relative flex size-[18px] items-center justify-center">
                        <Plus
                          aria-hidden
                          className={[
                            "absolute transition-[opacity,transform] duration-[260ms] motion-reduce:transition-none",
                            uiEaseClass,
                            isOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
                          ].join(" ")}
                          size={18}
                          strokeWidth={2.5}
                        />
                        <Minus
                          aria-hidden
                          className={[
                            "absolute transition-[opacity,transform] duration-[260ms] motion-reduce:transition-none",
                            uiEaseClass,
                            isOpen ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0",
                          ].join(" ")}
                          size={18}
                          strokeWidth={2.5}
                        />
                      </span>
                    </span>
                  </button>
                </div>

                <div
                  className={[
                    "grid",
                    `transition-[grid-template-rows,opacity] duration-[280ms] ${uiEaseClass}`,
                    "motion-reduce:transition-none motion-reduce:duration-0",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="flex justify-start pb-8 pt-0 md:justify-end md:pb-10">
                      <p className="max-w-[826px] text-base font-normal leading-[1.5] text-white">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
