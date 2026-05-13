"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { kontaktaiQuoteHrefFromPath } from "@/lib/contact-href";
import { contactQuoteProductFromPathname } from "@/data/contact-quote-product-options";

export type SalesHeroProps = {
  /** Virš H1 – ant tamsaus hero fono (`variant="onDark"`). */
  breadcrumbItems?: BreadcrumbItem[];
  title: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  backgroundImageSrc: string;
  stats?: readonly { number: string; label: string }[];
  primaryCtaReassurance?: boolean;
  /** Po pagrindinio CTA — pilka skubėjimo eilutė (pvz. `/igyvendinti-projektai`). */
  heroUrgencyLine?: boolean;
  /**
   * Hero turinio vertikalus išdėstymas fiksuoto aukščio bloke.
   * `end` — visas blokas žemiau (be min-h keitimo), pvz. kai nuotraukoje svarbi viršutinė dalis.
   */
  contentAlign?: "center" | "end";
  /** Ilgoms antraštėms — mažesnis H1, geresnis laužymas (pvz. aliuminio sprendimų hub). */
  denseHeroTitle?: boolean;
};

export function SalesHero({
  breadcrumbItems,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  backgroundImageSrc,
  stats,
  primaryCtaReassurance,
  heroUrgencyLine,
  contentAlign = "center",
  denseHeroTitle = false,
}: SalesHeroProps) {
  const pathname = usePathname() ?? "";
  const matchedProduct = contactQuoteProductFromPathname(pathname);
  const primaryHref =
    ctaPrimary.href.startsWith("/kontaktai") && pathname.startsWith("/")
      ? kontaktaiQuoteHrefFromPath(pathname, { productSlug: matchedProduct?.value })
      : ctaPrimary.href;

  return (
    <section className="langana-flush-under-site-header no-rounded relative flex min-h-[min(66vh,30rem)] w-full flex-col overflow-x-clip bg-white md:min-h-[min(70vh,32rem)] lg:min-h-[min(68vh,34rem)]">
      <div className="pointer-events-none no-rounded absolute inset-0">
        <Image
          alt=""
          className="no-rounded object-cover"
          fill
          priority
          sizes="100vw"
          src={backgroundImageSrc}
          unoptimized={backgroundImageSrc.startsWith("https://")}
        />
        <div aria-hidden className="no-rounded absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col">
        <div aria-hidden className="langana-site-header-spacer" />
        <div
          className={
            contentAlign === "end"
              ? "flex flex-1 flex-col justify-end px-4 pb-12 pt-0 md:px-[70px] md:pb-16 md:pt-6 lg:pb-20 lg:pt-8 xl:pt-10"
              : "flex flex-1 flex-col justify-center px-4 pb-12 pt-0 md:px-[70px] md:pb-16 md:pt-14 lg:pb-20 lg:pt-20 xl:pt-24"
          }
        >
          <AnimatedSection
            as="div"
            className={`mx-auto flex w-full max-w-[1440px] flex-col gap-8 md:gap-9 lg:flex-row lg:justify-between lg:gap-10 xl:gap-12 ${
              contentAlign === "end" ? "lg:items-end" : "lg:items-center"
            }`}
          >
            <div className="flex min-w-0 flex-1 flex-col gap-4 text-left lg:max-w-[min(100%,40rem)] xl:max-w-3xl">
              {breadcrumbItems?.length ? (
                <Breadcrumb items={breadcrumbItems} variant="onDark" />
              ) : null}
              <h1
                className={`max-w-full text-balance break-words font-semibold tracking-[-0.026em] text-white ${
                  denseHeroTitle
                    ? "text-[1.625rem] leading-[1.14] sm:text-[1.875rem] md:text-[2.125rem] md:leading-[1.12] lg:text-[2.375rem] lg:leading-[1.1] xl:text-[2.5rem]"
                    : "text-4xl leading-[1.12] md:text-[52px] md:leading-[1.08] lg:text-[55px]"
                }`}
              >
                {title}
              </h1>
              {stats && stats.length > 0 ? (
                <div className="flex flex-wrap justify-start gap-x-6 gap-y-4 py-1 sm:gap-x-8 sm:gap-y-5">
                  {stats.map((stat) => (
                    <div className="min-w-0 max-w-[11.5rem] sm:max-w-[13rem]" key={stat.label}>
                      <span className="block break-words text-base font-bold leading-snug text-white sm:text-lg">
                        {stat.number}
                      </span>
                      <span className="mt-0.5 block break-words text-[11px] font-medium leading-snug text-white/75 sm:text-xs">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="flex w-full min-w-0 max-w-[min(100%,32rem)] flex-col gap-6 lg:shrink-0">
              <p className="text-balance break-words text-base leading-relaxed text-white">{description}</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
                  <Link
                    className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full bg-[#263cd0] px-5 py-[13px] text-[14px] font-semibold text-white transition hover:bg-[#1e31a8] sm:px-8 sm:py-[15px] sm:text-[15px]"
                    href={primaryHref}
                  >
                    {ctaPrimary.label}
                  </Link>
                  <Link
                    className="inline-flex min-h-[48px] min-w-0 shrink items-center justify-center rounded-full border border-white bg-transparent px-5 py-[11px] text-center text-[14px] font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-[13px] sm:text-[15px]"
                    href={ctaSecondary.href}
                  >
                    {ctaSecondary.label}
                  </Link>
                </div>
                {heroUrgencyLine ? (
                  <p className="text-[13px] font-medium text-white/85">
                    Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
                  </p>
                ) : null}
                {primaryCtaReassurance ? (
                  <p className="text-[13px] font-medium text-white/85">
                    Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
                  </p>
                ) : null}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
