"use client";

import Link from "next/link";
import { useCallback, useMemo, useRef } from "react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ImplementedProjectCard } from "@/components/projects/ImplementedProjectCard";
import { CarouselStripDots } from "@/components/ui/CarouselStripDots";
import { CarouselStripNav } from "@/components/ui/CarouselStripNav";
import type { ImplementedProjectCategory } from "@/data/implemented-projects";
import { getImplementedProjectsForCategories } from "@/data/implemented-projects";
import { useCarouselStrip, useCarouselStripOverflow } from "@/hooks/use-carousel-strip";
import { scrollCarouselByDir } from "@/lib/carousel-strip-scroll";

export type CaseStudiesProjectsCarouselProps = {
  headingLead: string;
  headingRest: string;
  intro?: string;
  /** Rodyti įgyvendintus projektus pagal kategorijas (OR), kaip `/igyvendinti-projektai`. */
  projectCategories: readonly ImplementedProjectCategory[];
  /** Antrinė nuoroda į visą galeriją (numatyta į ankorą). */
  allProjectsHref?: string;
  allProjectsLabel?: string;
};

export function CaseStudiesProjectsCarousel({
  headingLead,
  headingRest,
  intro,
  projectCategories,
  allProjectsHref = "/igyvendinti-projektai#projektai-galerija",
  allProjectsLabel = "Visi įgyvendinti projektai",
}: CaseStudiesProjectsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const projects = useMemo(() => getImplementedProjectsForCategories(projectCategories), [projectCategories]);
  const slideCount = projects.length;
  const hasOverflow = useCarouselStripOverflow(scrollerRef, slideCount);
  const effectiveStripCount = slideCount <= 1 ? slideCount : hasOverflow ? slideCount : 1;
  const activeIndex = useCarouselStrip(scrollerRef, effectiveStripCount);

  const showStripNav = hasOverflow && slideCount > 1;
  const projectsCanPrev = showStripNav && activeIndex > 0;
  const projectsCanNext = showStripNav && activeIndex < slideCount - 1;

  const scrollProjectsByDir = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    scrollCarouselByDir(el, dir, false);
  }, []);

  if (slideCount === 0) return null;

  return (
    <AnimatedSection as="section" className="w-full bg-white pb-16 md:pb-[100px]">
      <div className="mx-auto mb-10 flex w-full max-w-[1440px] flex-col gap-6 px-4 sm:flex-row sm:items-end sm:justify-between md:px-[70px]">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[40px] md:leading-[46px]">
            <span className="text-[#263cd0]">{headingLead}</span>
            <span className="text-[#16216b]">{headingRest}</span>
          </h2>
          {intro ? (
            <p className="max-w-xl text-base leading-relaxed text-[#16216b]">{intro}</p>
          ) : null}
          <p>
            <Link
              className="text-[15px] font-semibold text-[#16216b] no-underline transition-colors hover:text-[#263cd0]"
              href={allProjectsHref}
            >
              {allProjectsLabel}
            </Link>
          </p>
        </div>
        {showStripNav ? (
          <CarouselStripNav
            canNext={projectsCanNext}
            canPrev={projectsCanPrev}
            className="sm:self-end"
            onNext={() => scrollProjectsByDir(1)}
            onPrev={() => scrollProjectsByDir(-1)}
          />
        ) : null}
      </div>

      <div className="relative mx-auto min-w-0 w-full max-w-[1440px] pl-4 pr-0 md:pl-[70px] md:pr-0">
        <div
          className="relative z-0 flex w-full min-w-0 snap-x snap-mandatory gap-[30px] overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={scrollerRef}
        >
          {projects.map((project, i) => (
            <div className="shrink-0 snap-start" data-carousel-slide key={project.id}>
              <AnimatedSection className="h-full" delayMs={Math.min(i * 72, 360)}>
                <ImplementedProjectCard project={project} variant="strip" />
              </AnimatedSection>
            </div>
          ))}
        </div>
        {showStripNav ? (
          <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-20 flex justify-center md:bottom-10">
            <CarouselStripDots activeIndex={activeIndex} count={slideCount} />
          </div>
        ) : null}
      </div>
    </AnimatedSection>
  );
}
