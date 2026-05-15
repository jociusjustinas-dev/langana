import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { HeroPattern } from "@/components/home/HeroPattern";
import { KontaktaiQuoteLink } from "@/components/kontaktai/KontaktaiQuoteLink";
import { HOME_BENTO_GRID_META, HOME_FEATURED_BENTO } from "@/data/home-page-content";
import { assets } from "@/lib/figma-assets";

const BENTO_IMAGES: Record<(typeof HOME_BENTO_GRID_META)[number]["key"], string> = {
  stiklinimas: assets.hero.balcony,
  durys: assets.hero.doors,
  "aliuminio-sprendimai": assets.hero.aluminum,
  "stumdomos-sistemos": assets.hero.sliding,
  "ziemos-sodai": assets.hero.ziemosSodai,
};

export type HeroBentoMode = "home" | "katalog";

function ProductCard({
  image,
  title,
  subtitle = "Įrengiame vos per 5 dienas",
  description,
  size = "small",
  badge,
  revealDelaySec = 0,
  href = "/katalogas",
  imageUnoptimized = false,
}: {
  image: string;
  title: [string, string];
  subtitle?: string;
  /** Trumpas segmento aprašymas (pagrindinis puslapis, SSR). */
  description?: string;
  size?: "hero" | "small";
  badge?: boolean;
  /** Staggered load (Figma 6437 → 6438 sequence) */
  revealDelaySec?: number;
  href?: string;
  /** Ilgi keliai su tarpais — kartais `next/image` optimizatorius klysta; tada tiesioginis PNG. */
  imageUnoptimized?: boolean;
}) {
  const isHero = size === "hero";
  return (
    <AnimatedSection
      as="div"
      className={[
        "group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl text-center",
        "px-6 sm:px-8",
        isHero
          ? "min-h-[min(52svh,480px)] pb-16 pt-20 sm:min-h-[min(60svh,520px)] md:min-h-[min(80vw,560px)] md:px-20"
          : "min-h-[220px] py-14 sm:min-h-[min(52vw,380px)] sm:py-16 md:min-h-[min(68vw,480px)] md:px-16",
      ].join(" ")}
      delayMs={Math.round(revealDelaySec * 1000)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          alt=""
          className="no-rounded object-cover"
          fill
          priority={imageUnoptimized}
          sizes={isHero ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          src={image}
          unoptimized={imageUnoptimized}
        />
        <div className="absolute inset-0 rounded-[inherit] bg-black/20 transition-[background-color] duration-300 group-hover:bg-black/30" />
      </div>

      <div
        className={[
          "relative z-10 flex w-full max-w-3xl flex-col items-center gap-5",
          "transition-transform duration-300 ease-out will-change-transform",
          "-translate-y-6 sm:-translate-y-8",
          "group-hover:translate-y-0 group-focus-within:translate-y-0",
        ].join(" ")}
      >
        {badge && (
          <div className="flex items-center gap-1.5 rounded-full text-[15px] font-semibold text-white">
            <Circle aria-hidden className="size-[5px] fill-white text-white" strokeWidth={0} />
            {subtitle}
          </div>
        )}

        {description ? (
          <h3
            className={`font-semibold text-white ${
              isHero
                ? "text-[32px] leading-tight tracking-[-0.05em] sm:text-[40px] md:text-[45px] md:leading-[1.1]"
                : "text-[28px] leading-tight tracking-[-0.04em] sm:text-[35px] md:text-[40px] md:leading-[1.1]"
            }`}
          >
            <span className="block">{title[0]}</span>
            <span className="block">{title[1]}</span>
          </h3>
        ) : (
          <div
            className={`font-semibold text-white ${
              isHero
                ? "text-[32px] leading-tight tracking-[-0.05em] sm:text-[40px] md:text-[45px] md:leading-[1.1]"
                : "text-[28px] leading-tight tracking-[-0.04em] sm:text-[35px] md:text-[40px] md:leading-[1.1]"
            }`}
          >
            <span className="block">{title[0]}</span>
            <span className="block">{title[1]}</span>
          </div>
        )}

        {description ? (
          <p className="max-w-md text-[14px] leading-relaxed text-white/90 sm:text-[15px]">{description}</p>
        ) : !badge ? (
          <p className="text-[15px] font-semibold text-white opacity-100">{subtitle}</p>
        ) : null}

        <Link
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-[15px] text-[15px] font-semibold text-[#263cd0] transition-colors duration-300 group-hover:bg-[#263cd0] group-hover:text-white"
          href={href}
        >
          Sužinokite daugiau
        </Link>
      </div>
    </AnimatedSection>
  );
}

/** Katalogo režime kortelių eilė atitinka `HOME_BENTO_GRID_META`. */
const KATALOG_TILE_HREFS = [
  "/stiklinimas",
  "/durys",
  "/aliuminio-sprendimai",
  "/stumdomos-sistemos",
  "/ziemos-sodai",
] as const;

const STAGGER = {
  eyebrow: 0.12,
  headline: 0.22,
  cta: 0.34,
  featured: 0.46,
  tile0: 0.58,
  tile1: 0.66,
  tile2: 0.74,
  tile3: 0.82,
  tile4: 0.9,
} as const;

const TILE_STAGGER_SEC = [
  STAGGER.tile0,
  STAGGER.tile1,
  STAGGER.tile2,
  STAGGER.tile3,
  STAGGER.tile4,
] as const;

type HeroBentoProps = {
  /** `katalog` — ta pati kortelių grotelė kaip pagrindiniame, tik kita antraštė / aprašas ir nuorodos į kategorijas. */
  mode?: HeroBentoMode;
};

export function HeroBento({ mode = "home" }: HeroBentoProps) {
  const isKatalog = mode === "katalog";

  return (
    <section className="hero-bento-under-header relative w-full overflow-hidden bg-[#f6f7ff]">
      <div className="relative langana-site-header-clearance">
        {/* Tinklelis tik virš hero – ~iki pirmos (featured) kortelės vidurio, ne per visą sekcijos kūną */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(calc(2rem+20rem+1.5rem+min(40vw,17.5rem)),44rem)] overflow-hidden opacity-[0.38] md:h-[min(calc(2rem+25rem+1.5rem+min(40vw,17.5rem)),50rem)]">
          <HeroPattern />
        </div>

        <div
          className={[
            "relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-12 pt-8 md:px-[70px] md:pb-20",
            isKatalog ? "gap-12 md:gap-20" : "gap-8 md:gap-10",
          ].join(" ")}
        >
        <div className="mx-auto flex max-w-[832px] flex-col items-center gap-5 text-center">
          {!isKatalog && (
            <AnimatedSection
              as="div"
              className="w-full text-center"
              delayMs={Math.round(STAGGER.eyebrow * 1000)}
            >
              <p className="text-center text-[15px] font-semibold text-[#263cd0]">
                Greitas montavimas <span className="text-[#a3aad6]">•</span> Aukščiausia kokybė
              </p>
            </AnimatedSection>
          )}
          <AnimatedSection
            as="div"
            className="w-full text-center"
            delayMs={Math.round(STAGGER.headline * 1000)}
          >
            {isKatalog ? (
              <h1 className="text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#16216b] sm:text-5xl sm:leading-[1.18] md:text-[60px] md:leading-[75px]">
                <span className="block">Produktų ir paslaugų</span>
                <span className="text-[#263cd0]">katalogas</span>
              </h1>
            ) : (
              <h1 className="text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#16216b] sm:text-5xl sm:leading-[1.18] md:text-[60px] md:leading-[75px]">
                <span className="block">Langai, durys, stiklinimas</span>
                <span className="text-[#263cd0]">Šiauliuose</span>
              </h1>
            )}
          </AnimatedSection>
          {!isKatalog && (
            <AnimatedSection
              as="div"
              className="w-full max-w-[52rem] text-center"
              delayMs={Math.round((STAGGER.headline + 0.04) * 1000)}
            >
              <p className="text-base leading-relaxed text-[#16216b] md:text-[17px]">
                Inovatyvūs namų atnaujinimo sprendimai – langai, durys, stiklinimas, stumdomos sistemos,
                žiemos sodai ir aliuminio konstrukcijos. Nemokamas matavimas ir pasiūlymas per 24 val.
              </p>
            </AnimatedSection>
          )}
          {!isKatalog && (
            <AnimatedSection
              as="div"
              className="w-full"
              delayMs={Math.round((STAGGER.headline + 0.05) * 1000)}
            >
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                {(
                  [
                    { number: "500+", label: "Įgyvendintų projektų" },
                    { number: "15+", label: "Metų patirtis" },
                    { number: "5 d.", label: "Vidutinis montavimas" },
                  ] as const
                ).map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-0.5">
                    <span className="text-2xl font-bold text-[#263cd0] sm:text-3xl">
                      {stat.number}
                    </span>
                    <span className="text-[13px] font-medium text-[#59799f]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}
          {isKatalog && (
            <AnimatedSection
              as="div"
              className="w-full max-w-[52rem] text-center"
              delayMs={Math.round((STAGGER.headline + 0.06) * 1000)}
            >
              <p className="text-base leading-relaxed text-[#16216b] md:text-[17px]">
                Pasirinkite kategoriją arba peržiūrėkite visus Langana sprendimus — langus, duris, stiklinimą, stumdomąsias
                sistemas ir aliuminio konstrukcijas.
              </p>
            </AnimatedSection>
          )}
          <AnimatedSection
            as="div"
            className="flex w-full flex-col items-center gap-2"
            delayMs={Math.round(STAGGER.cta * 1000)}
          >
            <KontaktaiQuoteLink
              className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
            >
              Gauti pasiūlymą
            </KontaktaiQuoteLink>
            {isKatalog ? (
              <p className="text-[13px] font-medium text-[#16216b]">
                Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
              </p>
            ) : null}
          </AnimatedSection>
        </div>

        <div className="flex flex-col gap-4">
          <ProductCard
            badge
            description={isKatalog ? undefined : HOME_FEATURED_BENTO.description}
            href={isKatalog ? "/langai" : HOME_FEATURED_BENTO.href}
            image={assets.hero.featured}
            revealDelaySec={STAGGER.featured}
            size="hero"
            title={[...HOME_FEATURED_BENTO.title]}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {HOME_BENTO_GRID_META.slice(0, 4).map((tile, i) => (
              <ProductCard
                key={tile.key}
                description={isKatalog ? undefined : tile.description}
                href={isKatalog ? KATALOG_TILE_HREFS[i]! : tile.href}
                image={BENTO_IMAGES[tile.key]}
                revealDelaySec={TILE_STAGGER_SEC[i] ?? 0.58}
                size="small"
                title={[...tile.title]}
              />
            ))}
          </div>

          <div className="w-full">
            <ProductCard
              description={isKatalog ? undefined : HOME_BENTO_GRID_META[4]!.description}
              href={isKatalog ? KATALOG_TILE_HREFS[4]! : HOME_BENTO_GRID_META[4]!.href}
              image={BENTO_IMAGES[HOME_BENTO_GRID_META[4]!.key]}
              imageUnoptimized
              revealDelaySec={STAGGER.tile4}
              size="small"
              title={[...HOME_BENTO_GRID_META[4]!.title]}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
