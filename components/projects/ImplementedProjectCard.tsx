"use client";

import Link from "next/link";

import { ProjectImageSlider } from "@/components/projects/ProjectImageSlider";
import type { ImplementedProject } from "@/data/implemented-projects";
import { KONTAKTAI_FORM_HREF } from "@/lib/contact-href";
import { storeQuotePrefillForProject } from "@/lib/quote-prefill";

/** Balta kortelė: rėmelis be šešėlio (karuselė / galerija). */
const articleBase =
  "flex flex-col overflow-hidden rounded-2xl border border-[rgba(163,170,214,0.28)] bg-white";

export type ImplementedProjectCardProps = {
  project: ImplementedProject;
  /** „Galerija“ tinkle — pilno pločio kortelė; karuselėje — fiksuotas plotis ir snap. */
  variant?: "grid" | "strip";
  ctaHref?: string;
  ctaLabel?: string;
};

export function ImplementedProjectCard({
  project,
  variant = "grid",
  ctaHref = KONTAKTAI_FORM_HREF,
  ctaLabel = "Noriu panašaus sprendimo",
}: ImplementedProjectCardProps) {
  const articleClass =
    variant === "strip"
      ? `${articleBase} w-[min(92vw,440px)] shrink-0 snap-start sm:w-[min(92vw,480px)] md:w-[min(480px,42vw)] lg:w-[440px]`
      : articleBase;

  return (
    <article className={articleClass}>
      <ProjectImageSlider alt={project.title} images={project.images} linkedProduct={project.linkedProduct} />
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#16216b] md:text-[24px]">
          {project.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-[#16216b] md:text-base">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              className="rounded-full bg-[#f6f7ff] px-2.5 py-1 text-[12px] font-medium text-[#263cd0] md:text-[13px]"
              key={t}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="text-[14px] text-[#59799f]">
          <p>
            <span className="font-semibold text-[#16216b]">Objekto tipas: </span>
            {project.objectType}
          </p>
          {project.location ? (
            <p className="mt-1">
              <span className="font-semibold text-[#16216b]">Lokacija: </span>
              {project.location}
            </p>
          ) : null}
        </div>
        <div className="mt-auto pt-2">
          <Link
            className="inline-flex w-full items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-[#1e31a8] sm:w-auto md:text-[15px]"
            href={ctaHref}
            onClick={() => storeQuotePrefillForProject(project.title)}
            scroll
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
