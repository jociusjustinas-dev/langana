import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import type { ProductCardProps } from "@/components/catalog/ProductCard";
import { HeroPatternLangaiCategoryBand } from "@/components/home/HeroPattern";
import { catalogProductSlugFromHref } from "@/data/catalog";
import { kontaktaiQuoteHrefFromPath } from "@/lib/contact-href";
import {
  ProductBenefitGlyphLabel,
} from "@/components/catalog/ProductCard";
import { ProductDetailHeroGallery } from "@/components/catalog/ProductDetailHeroGallery";

type ProductDetailHeroProps = {
  product: ProductCardProps;
  backHref: string;
  /** Kai true — „Grįžti“ nerodomas (pvz. kai viršuje jau yra breadcrumbs). */
  hideBackLink?: boolean;
  /** Antras mygtukas (pvz. „Sužinoti daugiau“ → anchor žemiau). */
  learnMoreHref?: string;
  /** Kai true — leidžiame antraštei užimti daugiau pločio, kad mažiau wrap'intųsi. */
  wideHeading?: boolean;
  /** Kai true — hero H1 rodomas tik produkto pavadinimas (be categoryLabel eilutės). */
  hideCategoryLabelInHeading?: boolean;
  /**
   * `false` — kai tėvas jau apgaubia `langana-site-header-clearance` (pvz. `ProductInnerPage` su breadcrumb).
   */
  useSiteHeaderClearance?: boolean;
};

function dedupeSlides(image: string, gallery?: string[]): string[] {
  const list = [image, ...(gallery ?? [])].filter(Boolean);
  return [...new Set(list)];
}

/** Viršus „Product inner“ — hero pagal viewport aukštį, turinys vertikaliai centre. */
export function ProductDetailHero({
  product,
  backHref,
  hideBackLink = false,
  learnMoreHref,
  wideHeading = false,
  hideCategoryLabelInHeading = false,
  useSiteHeaderClearance = true,
}: ProductDetailHeroProps) {
  const { title, categoryLabel, energyClass, description, image, gallery, benefits, quoteHref: rawQuoteHref } = product;
  const quoteHref =
    rawQuoteHref && !rawQuoteHref.startsWith("/kontaktai")
      ? rawQuoteHref
      : kontaktaiQuoteHrefFromPath(product.href, {
          productSlug: catalogProductSlugFromHref(product.href),
        });
  const imageAlt = `${title} — ${categoryLabel}`;
  const heroBenefits = benefits;
  const heroSlides = dedupeSlides(image, gallery);

  const inner = (
    <>
      <HeroPatternLangaiCategoryBand localizeWashForProductHero />

      <AnimatedSection
        as="div"
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 pt-2 pb-8 md:flex-row md:items-center md:gap-x-10 md:px-[70px] md:pt-3 md:pb-10 lg:gap-x-14 xl:gap-x-20"
      >
        <div className="flex min-w-0 w-full flex-[1.12] flex-col gap-5 md:gap-6 lg:max-w-[640px] xl:max-w-[680px]">
          {!hideBackLink ? (
            <Link
              className="inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-[#16216b] transition hover:text-[#263cd0]"
              href={backHref}
            >
              <ChevronLeft aria-hidden className="size-4 shrink-0" strokeWidth={2} />
              Grįžti
            </Link>
          ) : null}

          <div className="flex flex-col gap-5">
            <div className={`w-full space-y-3 ${wideHeading ? "max-w-[760px]" : "max-w-[540px]"}`}>
              {energyClass ? (
                <span className="inline-flex rounded bg-[#263cd0] px-3 py-1.5 text-[12px] font-semibold leading-none text-white">
                  {energyClass}
                </span>
              ) : null}
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#16216b] md:text-[55px] md:leading-[1.05]">
                <span className="text-[#263cd0]">{title}</span>
                {!hideCategoryLabelInHeading ? <span className="mt-0 block text-[#16216b]">{categoryLabel}</span> : null}
              </h1>
            </div>

            <p
              className={`text-[15px] font-normal leading-[1.55] text-[#16216b] md:text-[16px] md:leading-relaxed ${
                wideHeading ? "max-w-[700px]" : "max-w-[520px]"
              }`}
            >
              {description}
            </p>

            {heroBenefits.length > 0 ? (
              <ul className="flex flex-wrap gap-x-5 gap-y-2 md:gap-x-6">
                {heroBenefits.map((b) => (
                  <li key={`${title}-${b.label}`}>
                    <ProductBenefitGlyphLabel icon={b.icon} label={b.label} />
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-3">
                <Link
                  className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-[#f6f7ff] transition hover:bg-[#1e31a8] md:px-[30px]"
                  href={quoteHref ?? "/kontaktai#uzklausa"}
                >
                  Gauti pasiūlymą
                </Link>
                {learnMoreHref ? (
                  <Link
                    className="inline-flex w-fit items-center justify-center rounded-full border-2 border-[#263cd0] bg-transparent px-8 py-[13px] text-[15px] font-semibold text-[#263cd0] transition hover:bg-[#263cd0]/10"
                    href={learnMoreHref}
                  >
                    Sužinoti daugiau
                  </Link>
                ) : null}
              </div>
              <p className="text-sm text-[#16216b]">
                Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full min-w-0 shrink-0 justify-center md:flex-[0.85] md:justify-end">
          <ProductDetailHeroGallery alt={imageAlt} images={heroSlides} />
        </div>
      </AnimatedSection>
    </>
  );

  return (
    <section className="relative flex min-h-[calc(100svh-6.75rem)] w-full flex-col justify-center overflow-x-clip bg-white sm:min-h-[calc(100svh-7.5rem)] md:overflow-x-visible lg:min-h-[calc(100svh-8.75rem)]">
      {useSiteHeaderClearance ? (
        <div className="relative langana-site-header-clearance flex w-full min-h-0 flex-1 flex-col justify-center">
          {inner}
        </div>
      ) : (
        <div className="relative flex w-full min-h-0 flex-1 flex-col justify-center">{inner}</div>
      )}
    </section>
  );
}
