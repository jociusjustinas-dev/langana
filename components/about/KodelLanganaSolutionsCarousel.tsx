"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";

import { CarouselStripNav } from "@/components/ui/CarouselStripNav";
import { useCarouselStrip, useCarouselStripOverflow } from "@/hooks/use-carousel-strip";
import { scrollCarouselByDir } from "@/lib/carousel-strip-scroll";

const SPRENDIMAI_CARDS = [
  {
    title: "Langai",
    body: "Plastikiniai ir aliuminio langai namams, butams ir komerciniams objektams – šilumai, tylai ir ilgaamžiškumui.",
    imageUrl: "/images/Langai/ChatGPT Image May 7, 2026, 02_55_35 PM (5).png",
    href: "/langai",
  },
  {
    title: "Durys",
    body: "Plastikinės, aliuminio, metalinės ir specialios paskirties durys skirtingiems saugumo ir dizaino poreikiams.",
    imageUrl: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_39 PM (1).png",
    href: "/durys",
  },
  {
    title: "Stumdomos sistemos",
    body: "Aliuminės ir plastikinės stumdomos sistemos terasoms, balkonams ir didelėms angoms.",
    imageUrl: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (3).png",
    href: "/stumdomos-sistemos",
  },
  {
    title: "Stiklinimas",
    body: "Balkonų ir terasų stiklinimas – apsauga nuo vėjo, lietaus ir triukšmo bei patogesnė erdvė.",
    imageUrl: "/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (2).png",
    href: "/stiklinimas",
  },
  {
    title: "Žiemos sodai",
    body: "Individualiai projektuojamos stiklinės erdvės, kurios sujungia namus su gamta ir suteikia daugiau šviesos.",
    imageUrl: "/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (3).png",
    href: "/ziemos-sodai",
  },
  {
    title: "Aliuminio sprendimai",
    body: "Fasadai, pertvaros ir kitos aliuminio konstrukcijos verslo bei projektiniams objektams.",
    imageUrl: "/images/alium4.png",
    href: "/aliuminio-sprendimai",
  },
] as const;

const SLIDE_COUNT = SPRENDIMAI_CARDS.length;

export function KodelLanganaSolutionsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const hasOverflow = useCarouselStripOverflow(scrollerRef, SLIDE_COUNT);
  const effectiveStripCount = SLIDE_COUNT <= 1 ? SLIDE_COUNT : hasOverflow ? SLIDE_COUNT : 1;
  const activeIndex = useCarouselStrip(scrollerRef, effectiveStripCount, { autoplay: false });

  const showStripNav = hasOverflow && SLIDE_COUNT > 1;
  const canPrev = showStripNav && activeIndex > 0;
  const canNext = showStripNav && activeIndex < SLIDE_COUNT - 1;

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    scrollCarouselByDir(el, dir, false);
  }, []);

  return (
    <section className="w-full bg-white pb-16 md:pb-[100px]" id="sprendimai">
      <div className="mx-auto mb-10 flex w-full max-w-[1440px] flex-col gap-6 px-4 sm:flex-row sm:items-end sm:justify-between md:mb-[50px] md:px-[70px]">
        <div className="max-w-[min(100%,46rem)] space-y-4">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Sprendimai namams, verslui </span>
            <span className="text-[#16216b]">ir projektiniams objektams</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Langana gaminiai pritaikomi tiek individualiems namams, tiek daugiabučiams, komercinėms erdvėms ir įmonių objektams.
          </p>
        </div>
        {showStripNav ? (
          <CarouselStripNav
            canNext={canNext}
            canPrev={canPrev}
            className="sm:self-end"
            nextAriaLabel="Kita kategorija"
            prevAriaLabel="Ankstesnė kategorija"
            onNext={() => scrollByDir(1)}
            onPrev={() => scrollByDir(-1)}
          />
        ) : null}
      </div>

      <div className="relative mx-auto min-w-0 w-full max-w-[1440px] pl-4 pr-0 md:pl-[70px] md:pr-0">
        <div
          className="relative z-0 flex w-full min-w-0 snap-x snap-mandatory gap-[30px] overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={scrollerRef}
        >
          {SPRENDIMAI_CARDS.map((card) => (
            <article
              className="relative flex min-h-[432px] w-[min(85vw,340px)] shrink-0 snap-start flex-col justify-end overflow-hidden p-4 sm:w-[min(80vw,360px)] md:w-[380px]"
              data-carousel-slide
              key={card.href}
            >
              <Image
                alt={card.title}
                className="object-cover"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 380px, 85vw"
                src={card.imageUrl}
              />
              <div className="relative z-10 flex min-h-[200px] flex-col gap-3 rounded-xl bg-white p-4">
                <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#263cd0] md:text-[24px]">{card.title}</h3>
                <p className="text-[14px] leading-normal text-[#16216b]">{card.body}</p>
                <Link
                  className="mt-auto inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#1e31a8]"
                  href={card.href}
                >
                  Sužinokite daugiau
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
