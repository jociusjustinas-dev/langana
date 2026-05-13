"use client";

import Link from "next/link";

import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";

const FEATURES = [
  {
    title: "Konstrukcija pagal poreikį",
    description: "Galite rinktis plastikines arba aliuminines sistemas pagal norimą komfortą, estetiką ir biudžetą.",
  },
  {
    title: "Skirtingi stiklo variantai",
    description: "Parenkami skirtingo storio stiklai pagal triukšmo, apsaugos ir naudojimo poreikį.",
  },
  {
    title: "Patogus kasdienis naudojimas",
    description: "Judančios konstrukcijos, atsidarančios į šonus, leidžia patogiai vėdinti balkoną ir valdyti erdvę.",
  },
  {
    title: "Lengva priežiūra",
    description: "Sprendimai suprojektuojami taip, kad konstrukcijos būtų lengvai valomos ir patogios eksploatuoti.",
  },
] as const;

function AnimatedFeatureRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-px w-full bg-[#263cd0]/16" />
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <span
          aria-hidden
          className="row-start-1 size-2 shrink-0 self-center rounded-full bg-[#263cd0]"
        />
        <h3 className="col-start-2 row-start-1 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#16216b]">
          {title}
        </h3>
        <p className="col-start-2 row-start-2 text-[16px] leading-relaxed text-[#16216b]">{description}</p>
      </div>
    </div>
  );
}

export function BalkonuValueFeaturesSection() {
  return (
    <section className="relative z-[2] w-full bg-white py-16 md:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[70px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:min-h-[840px]">
            <ParallaxCoverImage
              alt="Balkonų stiklinimo konstrukcija"
              fill
              priority={false}
              sizes="(max-width: 1023px) 100vw, 46vw"
              src="/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (2).png"
            />
          </div>

          <div className="flex max-w-[560px] flex-col gap-12 lg:gap-16 xl:gap-20">
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-[#16216b] md:text-[45px] md:leading-[52px]">
                  <span className="text-[#263cd0]">Judančios konstrukcijos, </span>
                  <span className="text-[#16216b]">stiklo pasirinkimas ir paprasta priežiūra</span>
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {FEATURES.map((feature) => (
                <AnimatedFeatureRow description={feature.description} key={feature.title} title={feature.title} />
              ))}
              <div className="h-px w-full bg-[#263cd0]/16" />
            </div>

            <div>
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                href="/kontaktai#uzklausa"
              >
                Gauti pasiūlymą
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
