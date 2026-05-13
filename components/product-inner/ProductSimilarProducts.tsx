"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { CarouselStripNav } from "@/components/ui/CarouselStripNav";
import { usePreventHorizontalStripWheel } from "@/hooks/use-prevent-horizontal-strip-wheel";
import { useCarouselStripOverflow } from "@/hooks/use-carousel-strip";
import type { ProductInnerSimilarItem } from "@/data/product-inner/types";
import {
  catalogProductSlugFromHref,
  getOtherPlasticLangaiAsSimilarItems,
  getPlasticLangaiProductByHref,
} from "@/data/catalog";
import { getAluminumLangaiProductByHref } from "@/data/aliuminio-langai-products";
import { getOtherAluminumSlidingAsSimilarItems } from "@/data/aliumines-stumdomos-sistemos-products";
import { getOtherAluminumLangaiAsSimilarItems } from "@/data/aliuminio-langai-showcase";
import { kontaktaiQuoteHrefFromPath } from "@/lib/contact-href";

import { ProductSectionHeading } from "./ProductSectionHeading";

function resolveSimilarQuoteHref(productHref: string, explicit?: string): string {
  if (explicit && !explicit.startsWith("/kontaktai")) return explicit;
  return kontaktaiQuoteHrefFromPath(productHref, {
    productSlug: catalogProductSlugFromHref(productHref),
  });
}

/** Tas pats principas kaip `LangaiCategoryPage` — rodyklių būsena pagal matomą skaidrę. */
function useSimilarCarouselActiveIndex(
  scrollerRef: RefObject<HTMLDivElement | null>,
  slideCount: number
): number {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root || slideCount <= 1) {
      setActiveIndex(0);
      return;
    }

    const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-similar-slide]"));
    if (slides.length === 0) return;

    const ratios = new Map<Element, number>();

    const pickActive = () => {
      let bestIdx = 0;
      let best = -1;
      slides.forEach((s, i) => {
        const r = ratios.get(s) ?? 0;
        if (r > best) {
          best = r;
          bestIdx = i;
        }
      });
      setActiveIndex((prev) => (prev === bestIdx ? prev : bestIdx));
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(e.target, e.intersectionRatio);
        }
        pickActive();
      },
      { root, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    slides.forEach((s) => io.observe(s));

    return () => io.disconnect();
  }, [scrollerRef, slideCount]);

  return activeIndex;
}

const CAROUSEL_GAP_PX = 30;

type SimilarSlide = {
  title: string;
  description: string;
  href: string;
  quoteHref: string;
};

function getSimilarCarouselStepPx(el: HTMLElement): number {
  const slide = el.querySelector<HTMLElement>("[data-similar-slide]");
  const fallback = Math.floor(el.clientWidth * 0.88);
  return (slide?.offsetWidth ?? fallback) + CAROUSEL_GAP_PX;
}

function scrollSimilarCarousel(el: HTMLElement, dir: -1 | 1): void {
  const step = getSimilarCarouselStepPx(el);
  const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
  const eps = 6;
  if (maxScroll <= eps) return;
  if (dir === 1) {
    if (el.scrollLeft + eps >= maxScroll) return;
    el.scrollBy({ left: step, behavior: "auto" });
    return;
  }
  if (el.scrollLeft <= eps) return;
  el.scrollBy({ left: -step, behavior: "auto" });
}

function fallbackSlide(item: ProductInnerSimilarItem): SimilarSlide {
  return {
    title: item.title,
    description: item.description,
    href: item.href,
    quoteHref: resolveSimilarQuoteHref(item.href),
  };
}

function slideFromCatalog(item: ProductInnerSimilarItem): SimilarSlide | null {
  const plastic = getPlasticLangaiProductByHref(item.href);
  if (plastic) {
    return {
      title: plastic.title,
      description: plastic.description,
      href: plastic.href,
      quoteHref: resolveSimilarQuoteHref(plastic.href, plastic.quoteHref),
    };
  }
  const aluminum = getAluminumLangaiProductByHref(item.href);
  if (aluminum) {
    return {
      title: aluminum.title,
      description: aluminum.description,
      href: aluminum.href,
      quoteHref: resolveSimilarQuoteHref(aluminum.href, aluminum.quoteHref),
    };
  }
  return null;
}

/** Supaprastinta kortelė — tik pavadinimas, aprašymas ir CTA (be nuotraukos, ikonų eilių). */
function SimilarProductSlideCard({
  description,
  href,
  quoteHref,
  title,
}: SimilarSlide) {
  return (
    <article className="flex h-full min-h-[280px] flex-col justify-between rounded-xl bg-[#f6f7ff] px-6 py-10 text-left md:min-h-[320px] md:rounded-2xl md:px-10 md:py-12">
      <div className="flex flex-col gap-5">
        <h3 className="text-[26px] font-semibold leading-[1.12] tracking-[-0.032em] text-[#263cd0] md:text-[32px] md:leading-[1.15]">
          {title}
        </h3>
        <p className="max-w-xl text-[15px] font-semibold leading-relaxed text-[#16216b] md:text-[16px]">
          {description}
        </p>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-3 md:mt-12 md:gap-4">
        <Link
          className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-[#f6f7ff] transition hover:bg-[#1e31a8]"
          href={quoteHref}
        >
          Gauti pasiūlymą
        </Link>
        <Link
          className="group inline-block text-[15px] font-semibold text-[#16216b] transition-colors hover:text-[#263cd0]"
          href={href}
        >
          <span className="block">Sužinoti daugiau</span>
          <span
            aria-hidden
            className="mt-1 block h-px w-full bg-[#16216b] transition-[transform,background-color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:bg-[#263cd0]"
          />
        </Link>
      </div>
    </article>
  );
}

export function ProductSimilarProducts({
  heading,
  items,
  currentSlug,
  fillFromAluminumCategory,
  fillFromAluminumSlidingCategory,
}: {
  heading: string;
  items?: ProductInnerSimilarItem[];
  /** Neįtraukti dabartinio produkto (jei sąraše kartais atsiranda tas pats slug). */
  currentSlug?: string;
  /** Visi kiti aliuminio langų produktai iš subkategorijos (kai `items` nepaduoti). */
  fillFromAluminumCategory?: boolean;
  /** Visos kitos aliuminės stumdomos sistemos iš subkategorijos (kai `items` nepaduoti). */
  fillFromAluminumSlidingCategory?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const explicitItems = items ?? [];
  const sourceItems =
    explicitItems.length > 0
      ? explicitItems
      : fillFromAluminumSlidingCategory && currentSlug
        ? getOtherAluminumSlidingAsSimilarItems(currentSlug)
        : fillFromAluminumCategory && currentSlug
          ? getOtherAluminumLangaiAsSimilarItems(currentSlug)
          : currentSlug
            ? getOtherPlasticLangaiAsSimilarItems(currentSlug)
            : [];

  const slides: SimilarSlide[] = sourceItems
    .map((item) => slideFromCatalog(item) ?? fallbackSlide(item))
    .filter((s) => (currentSlug ? catalogProductSlugFromHref(s.href) !== currentSlug : true));

  const slideCount = slides.length;
  /** Horizontali juosta ir rodyklės tik jei daugiau nei 3 kortelės (kaip „inner“ panašiems produktams). */
  const stripCarousel = slideCount > 3;
  const overflowMeasureCount = stripCarousel ? slideCount : 1;
  const hasOverflow = useCarouselStripOverflow(scrollerRef, overflowMeasureCount);
  const effectiveStripCount = stripCarousel
    ? slideCount <= 1
      ? slideCount
      : hasOverflow
        ? slideCount
        : 1
    : 1;
  const activeIndex = useSimilarCarouselActiveIndex(scrollerRef, effectiveStripCount);
  const showStripNav = stripCarousel && hasOverflow && slideCount > 1;
  const canPrev = showStripNav && activeIndex > 0;
  const canNext = showStripNav && activeIndex < slideCount - 1;

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    scrollSimilarCarousel(el, dir);
  }, []);

  usePreventHorizontalStripWheel(scrollerRef, showStripNav);

  if (slides.length === 0) return null;

  return (
    <AnimatedSection as="section" className="w-full bg-white py-14 md:py-[100px]">
      <div className="mx-auto mb-10 flex w-full max-w-[1440px] flex-col gap-6 px-4 sm:flex-row sm:items-end sm:justify-between md:mb-[50px] md:px-[70px]">
        <ProductSectionHeading className="max-w-[min(100%,42rem)] text-[28px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
          {heading}
        </ProductSectionHeading>
        {showStripNav ? (
          <CarouselStripNav
            canNext={canNext}
            canPrev={canPrev}
            className="sm:self-end"
            nextAriaLabel="Kitas produktas"
            prevAriaLabel="Ankstesnis produktas"
            onNext={() => scrollByDir(1)}
            onPrev={() => scrollByDir(-1)}
          />
        ) : null}
      </div>

      {stripCarousel ? (
        /*
          overflow-x-hidden + overscroll-x-none + touch-pan-y; wheel su passive:false blokuoja
          horizontalią intenciją (`usePreventHorizontalStripWheel`), kad veiktų vertikalus puslapio slinkimas.
          Slinktis tik per rodykles (scrollBy).
        */
        <div className="relative mx-auto min-w-0 w-full max-w-[1440px] pl-4 pr-0 md:pl-[70px] md:pr-0">
          <div
            className="relative z-0 flex w-full min-w-0 touch-pan-y snap-x snap-mandatory gap-[30px] overflow-x-hidden overscroll-x-none pb-2"
            ref={scrollerRef}
          >
            {slides.map((s, i) => (
              <div
                className="w-[min(88vw,560px)] shrink-0 snap-start md:w-[min(85vw,600px)]"
                data-similar-slide
                key={s.href}
              >
                <AnimatedSection className="h-full" delayMs={Math.min(i * 72, 360)}>
                  <SimilarProductSlideCard {...s} />
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[70px]">
          <div
            className={`grid min-w-0 gap-[30px] ${
              slideCount === 1
                ? "ml-0 mr-auto w-[min(100%,560px)] grid-cols-1 justify-items-stretch"
                : slideCount === 2
                  ? "w-full grid-cols-1 sm:grid-cols-2"
                  : "w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {slides.map((s, i) => (
              <AnimatedSection className="h-full min-w-0" delayMs={Math.min(i * 72, 360)} key={s.href}>
                <SimilarProductSlideCard {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      )}
    </AnimatedSection>
  );
}
