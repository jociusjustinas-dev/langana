"use client";

import { ChevronDown } from "lucide-react";
import { useCallback, useState, type KeyboardEvent } from "react";

import { uiEaseClass } from "@/lib/ui-motion";

export type FaqAccordionItem = { question: string; answer: string };

type FaqAccordionProps = {
  items: readonly FaqAccordionItem[];
  /** Unikalus prefiksas mygtukų `id` (pvz. `plastic-faq`, `faq-trigger`). */
  idPrefix: string;
};

export function FaqAccordion({ items, idPrefix }: FaqAccordionProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(() =>
    new Set(items.length > 0 ? [0] : []),
  );

  const toggle = useCallback((index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(index);
    }
  };

  return (
    <div className="min-w-0 flex-1 space-y-4 md:space-y-6">
      {items.map((item, i) => {
        const expanded = openSet.has(i);
        return (
          <div
            className={[
              "rounded-[24px] bg-[#f2f3f7] px-5 md:px-6",
              "group transition-colors duration-200 ease-out motion-reduce:transition-none",
              expanded ? "text-[#263cd0]" : "text-[#16216b]",
            ].join(" ")}
            key={`${idPrefix}-row-${i}`}
          >
            <button
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-4 py-6 text-left md:py-7"
              id={`${idPrefix}-${i}`}
              onClick={() => toggle(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              type="button"
            >
              <span
                className={[
                  "flex-1 text-[16px] font-semibold leading-[1.35] tracking-[-0.015em] transition-colors duration-200 md:text-[20px]",
                  expanded ? "text-[#263cd0]" : "text-[#16216b] group-hover:text-[#263cd0]",
                ].join(" ")}
              >
                {item.question}
              </span>
              <span
                aria-hidden
                className="inline-flex w-8 shrink-0 items-center justify-center text-[#263cd0] md:w-9"
              >
                <ChevronDown
                  aria-hidden
                  className={[
                    "size-6 shrink-0 transition-transform duration-[260ms] motion-reduce:transition-none md:size-7",
                    uiEaseClass,
                    expanded ? "rotate-180" : "rotate-0",
                  ].join(" ")}
                  strokeWidth={2}
                />
              </span>
            </button>
            <div
              className={[
                "grid",
                `transition-[grid-template-rows,opacity] duration-[280ms] ${uiEaseClass}`,
                "motion-reduce:transition-none motion-reduce:duration-0",
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              ].join(" ")}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[980px] pb-7 pr-2 text-[14px] leading-[1.55] text-[#2a2f4d] md:pb-8 md:pr-6 md:text-[15px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
