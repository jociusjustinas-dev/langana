import Image from "next/image";
import Link from "next/link";

import { getHomeFeaturedProjects } from "@/data/home-page-content";

/** Įgyvendinti projektai — server-rendered tinklelis (be karuselės JS). */
export function HomeCompletedProjectsSection() {
  const projects = getHomeFeaturedProjects();
  if (projects.length === 0) return null;

  return (
    <section aria-labelledby="home-projects-heading" className="w-full bg-[#f6f7ff]">
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-[70px] md:py-[100px]">
        <div className="mb-10 max-w-2xl space-y-4">
          <h2
            className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[40px] md:leading-[46px]"
            id="home-projects-heading"
          >
            <span className="text-[#263cd0]">Įgyvendinti</span>
            <span className="text-[#16216b]"> projektai</span>
          </h2>
          <p className="text-base leading-relaxed text-[#16216b]">
            Per 15+ metų įrengėme šimtus langų, durų, stiklinimo ir aliuminio sprendimų objektų
            Šiauliuose ir visoje Lietuvoje. Žemiau – keli pavyzdžiai iš mūsų galerijos.
          </p>
          <p>
            <Link
              className="text-[15px] font-semibold text-[#16216b] no-underline transition-colors hover:text-[#263cd0]"
              href="/igyvendinti-projektai#projektai-galerija"
            >
              Visi įgyvendinti projektai
            </Link>
          </p>
        </div>

        <ul className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const image = project.images[0];
            const locationLine = [project.objectType, project.location].filter(Boolean).join(" · ");
            return (
              <li key={project.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(163,170,214,0.28)] bg-white">
                  {image ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        alt=""
                        className="no-rounded object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={image}
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                    <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#16216b] md:text-[24px]">
                      {project.title}
                    </h3>
                    {locationLine ? (
                      <p className="text-[13px] font-medium text-[#59799f]">{locationLine}</p>
                    ) : null}
                    <p className="flex-1 text-[15px] leading-relaxed text-[#16216b] md:text-base">
                      {project.shortDescription}
                    </p>
                    <Link
                      className="text-[15px] font-semibold text-[#263cd0] hover:underline"
                      href="/igyvendinti-projektai#projektai-galerija"
                    >
                      Peržiūrėti galerijoje
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
