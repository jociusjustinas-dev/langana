"use client";

import { useState } from "react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ImplementedProjectCard } from "@/components/projects/ImplementedProjectCard";
import {
  IMPLEMENTED_PROJECT_FILTERS,
  IMPLEMENTED_PROJECTS,
  projectMatchesFilter,
  type ImplementedProjectFilterId,
} from "@/data/implemented-projects";

export function ImplementedProjectsGallery() {
  const [filter, setFilter] = useState<ImplementedProjectFilterId>("visi");

  const visible = IMPLEMENTED_PROJECTS.filter((p) => projectMatchesFilter(p, filter));

  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-12 md:px-[70px] md:py-[72px]" id="projektai-galerija">
      <div className="mx-auto max-w-[1440px]">
        <AnimatedSection as="div" className="flex flex-col gap-5 md:gap-6">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-[#16216b]/50">Filtrai</p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {IMPLEMENTED_PROJECT_FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  className={[
                    "rounded-full border px-4 py-2 text-[14px] font-semibold transition md:text-[15px]",
                    active
                      ? "border-[#263cd0] bg-[#263cd0] text-white"
                      : "border-[rgba(163,170,214,0.45)] bg-white text-[#59799f] hover:border-[#263cd0]/40 hover:text-[#263cd0]",
                  ].join(" ")}
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  type="button"
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <p className="mb-4 mt-8 text-[13px] font-medium text-[#16216b] md:mt-10">
          Rodoma: {visible.length} projektų
        </p>

        <div className="mx-auto mt-10 grid max-w-[1440px] gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {visible.map((project, i) => (
            <AnimatedSection delayMs={Math.min(i * 80, 400)} key={project.id}>
              <ImplementedProjectCard project={project} variant="grid" />
            </AnimatedSection>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-center text-[#16216b]">Pagal pasirinktą filtrą projektų nerasta.</p>
        ) : null}
      </div>
    </AnimatedSection>
  );
}
