import type { CSSProperties } from "react";

const GRID = `
  linear-gradient(to right, rgba(163, 170, 214, 0.34) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(163, 170, 214, 0.34) 1px, transparent 1px)
`;

const WASH_DEFAULT = `
  radial-gradient(
    ellipse 92% 68% at 50% 22%,
    #f6f7ff 0%,
    rgba(246, 247, 255, 0.82) 28%,
    rgba(246, 247, 255, 0.2) 54%,
    rgba(246, 247, 255, 0) 76%
  ),
  linear-gradient(
    to top,
    #f6f7ff 0%,
    rgba(246, 247, 255, 0.48) 12%,
    rgba(246, 247, 255, 0) 38%
  )
`.replace(/\s+/g, " ");

/** „Reverse“: šviesesnis centras žemiau, nuslūgimas kita kryptimi + minimalus tinklelio poslinkis. */
const WASH_REVERSED = `
  radial-gradient(
    ellipse 88% 72% at 50% 76%,
    #f6f7ff 0%,
    rgba(246, 247, 255, 0.8) 30%,
    rgba(246, 247, 255, 0.22) 55%,
    rgba(246, 247, 255, 0) 78%
  ),
  linear-gradient(
    to bottom,
    #f6f7ff 0%,
    rgba(246, 247, 255, 0.45) 14%,
    rgba(246, 247, 255, 0) 40%
  )
`.replace(/\s+/g, " ");

export type HeroPatternProps = {
  /** default – CTA: apverstas spindulio centras + linear „iš viršaus žemyn“ */
  variant?: "default" | "reversed";
  className?: string;
};

function HeroPatternGrid({ isReversed }: { isReversed: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: GRID,
        backgroundSize: "56px 56px",
        backgroundPosition: isReversed ? "22px 18px" : "0 0",
      }}
    />
  );
}

/**
 * Subtilus kvadratų tinklelis + radial/linear „wash“.
 * Tėvui nustatyk aukštį (hero) arba `absolute inset-0` (CTA).
 */
export function HeroPattern({ variant = "default", className = "" }: HeroPatternProps) {
  const isReversed = variant === "reversed";

  return (
    <div
      aria-hidden
      className={
        "pointer-events-none relative h-full min-h-0 w-full overflow-hidden " + className
      }
    >
      <HeroPatternGrid isReversed={isReversed} />
      <div
        className="absolute inset-0"
        style={{ background: isReversed ? WASH_REVERSED : WASH_DEFAULT }}
      />
    </div>
  );
}

/** Silpnesnis vertikalus mask išnykimas — daugiau tinklelio matosi viršuje / dešinėje; skaitomumas per `PRODUCT_TEXT_WASH`. */
const LANGAI_PRODUCT_HERO_BAND_MASK: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.45) 82%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.45) 82%, transparent 100%)",
};

const PRODUCT_TEXT_WASH = `
  radial-gradient(
    ellipse 78% 125% at 16% 38%,
    #ffffff 0%,
    rgba(255, 255, 255, 0.93) 14%,
    rgba(255, 255, 255, 0.52) 38%,
    rgba(255, 255, 255, 0.12) 58%,
    transparent 76%
  ),
  linear-gradient(
    to right,
    rgba(255, 255, 255, 0.88) 0%,
    rgba(255, 255, 255, 0.35) 26%,
    transparent 52%
  )
`.replace(/\s+/g, " ");

const LANGAI_CATEGORY_HERO_MASK: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to bottom, #000 0%, #000 45%, rgba(0,0,0,0.35) 85%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, #000 0%, #000 45%, rgba(0,0,0,0.35) 85%, transparent 100%)",
};

export type HeroPatternLangaiCategoryBandProps = {
  /**
   * Produktų hero: baltas „išblukimas“ koncentruotas kairėje (teksto blokas), dešinėje tinklelis ryškesnis.
   * Be vidinio HeroPattern mėlyno radial wash – išvengiama „visur balta“ viršuje.
   */
  localizeWashForProductHero?: boolean;
};

/**
 * Viršutinė juosta su „išnykstančiu“ kraštu — tas pats kaip `/langai` kategorijos hero („Viskas apie langus“).
 * Tėvinis elementas turi būti `relative`.
 */
export function HeroPatternLangaiCategoryBand({
  localizeWashForProductHero = false,
}: HeroPatternLangaiCategoryBandProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(52vh,26rem)] overflow-hidden"
      style={localizeWashForProductHero ? LANGAI_PRODUCT_HERO_BAND_MASK : LANGAI_CATEGORY_HERO_MASK}
    >
      {localizeWashForProductHero ? (
        <>
          <HeroPatternGrid isReversed={false} />
          <div className="absolute inset-0" style={{ background: PRODUCT_TEXT_WASH }} />
        </>
      ) : (
        <HeroPattern />
      )}
    </div>
  );
}
