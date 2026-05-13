import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BadgeEuro,
  BriefcaseBusiness,
  Building,
  Building2,
  CloudRain,
  CloudOff,
  Combine,
  Droplets,
  DoorOpen,
  Hammer,
  HelpCircle,
  Home,
  Layers,
  Layers3,
  Landmark,
  LayoutGrid,
  LayoutPanelTop,
  Leaf,
  LockKeyhole,
  Maximize2,
  Minus,
  MoveHorizontal,
  MousePointerClick,
  Orbit,
  PanelLeftOpen,
  PanelsTopLeft,
  PanelTopOpen,
  Ruler,
  Rows2,
  Rows3,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Square,
  Sun,
  ThermometerSun,
  Volume2,
  VolumeX,
  Wind,
  Weight,
  Zap,
  Shapes,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assets } from "@/lib/figma-assets";
import { catalogProductSlugFromHref } from "@/data/catalog";
import { kontaktaiQuoteHrefFromPath } from "@/lib/contact-href";

const PC = assets.productCard;

/** Visos kataloge naudojamos Lucide ikonos pagal pavadinimą (iš dizaino / turinio). */
const ICON_MAP = {
  Volume2,
  VolumeX,
  CloudRain,
  CloudOff,
  Sun,
  BadgeEuro,
  Hammer,
  Layers,
  Layers3,
  Landmark,
  LayoutGrid,
  LayoutPanelTop,
  PanelTop: LayoutPanelTop,
  Leaf,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  Building2,
  Building,
  BriefcaseBusiness,
  Ruler,
  Rows2,
  Rows3,
  Shield,
  Zap,
  Home,
  Square,
  PanelLeftOpen,
  PanelsTopLeft,
  MoveHorizontal,
  DoorOpen,
  PanelTopOpen,
  ThermometerSun,
  Maximize2,
  LockKeyhole,
  Minus,
  Combine,
  Orbit,
  Settings,
  Weight,
  MousePointerClick,
  Droplets,
  Wind,
  Shapes,
} as const satisfies Record<string, LucideIcon>;

export type ProductCardIconName = keyof typeof ICON_MAP;

export function CatalogIcon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = ICON_MAP[name as ProductCardIconName] ?? HelpCircle;
  return <Icon aria-hidden className={className} strokeWidth={strokeWidth} />;
}

/** Figma — „Eksploatavimo būdai“ glifai su #a3aad6 maskomis (bendras su vidiniu produktu). */
export function ProductOpeningGlyphs() {
  return (
    <div className="flex min-w-0 flex-nowrap items-center gap-[15px] overflow-x-auto pb-1">
      {PC.openingMasks.map((maskUrl, i) => (
        <div
          className="relative h-[43px] shrink-0 overflow-hidden rounded-lg"
          key={maskUrl}
          style={{ width: PC.openingMaskWidthsPx[i] ?? 44 }}
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-0 size-[44px] -translate-x-1/2 bg-[#a3aad6]"
            style={{
              maskImage: `url('${maskUrl}')`,
              WebkitMaskImage: `url('${maskUrl}')`,
              maskSize: "44px 44px",
              WebkitMaskSize: "44px 44px",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/** Ryškesnė mėlyna privalumų ikonoms ir etiketėms (hero ir katalogo kortelės). */
const benefitAccentClass = "text-[#3957eb]";

export function ProductBenefitGlyphLabel(props: {
  icon: string;
  label: string;
}) {
  const { icon, label } = props;
  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <CatalogIcon
        className={`size-6 shrink-0 ${benefitAccentClass}`}
        name={icon}
        strokeWidth={2}
      />
      <span className={`text-[14px] font-semibold leading-snug ${benefitAccentClass}`}>{label}</span>
    </div>
  );
}

export type ProductCardProps = {
  title: string;
  categoryLabel: string;
  energyClass?: string;
  description: string;
  image: string;
  /** Papildomos hero nuotraukos karuselei (Figma rodyklės / taškai). */
  gallery?: string[];
  operationTypes: {
    label: string;
    icon: string;
  }[];
  benefits: {
    label: string;
    icon: string;
  }[];
  /** Vidinio produkto puslapio nuoroda („Sužinoti daugiau“). */
  href: string;
  /** „Gauti pasiūlymą“ — numatyta į puslapio kontaktų sekciją. */
  quoteHref?: string;
  /** Inkaras „Sužinoti daugiau“ / nuorodoms į tą pačią kortelę. */
  id?: string;
};

/**
 * „Eksploatavimo būdai“ — tik ikonos eilėje (#a3aad6), be matomų etikečių
 * (Figma 8074:83520; etiketė per `title` ir `sr-only`).
 */
export function ProductOperationGlyphStrip({
  operationTypes,
}: {
  operationTypes: ProductCardProps["operationTypes"];
}) {
  return (
    <div className="flex min-w-0 flex-nowrap items-center gap-[15px] overflow-x-auto pb-0.5">
      {operationTypes.map((op) => (
        <div
          className="relative flex h-[43px] w-11 shrink-0 items-center justify-center"
          key={op.label}
          title={op.label}
        >
          <CatalogIcon
            aria-hidden
            className="size-11 shrink-0 text-[#a3aad6]"
            name={op.icon}
            strokeWidth={1.5}
          />
          <span className="sr-only">{op.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ProductCard({
  title,
  categoryLabel,
  energyClass,
  description,
  image,
  benefits,
  href,
  quoteHref: quoteHrefProp,
  id,
}: ProductCardProps) {
  const imageAlt = `${title} — ${categoryLabel}`;
  const quoteHref =
    quoteHrefProp && !quoteHrefProp.startsWith("/kontaktai")
      ? quoteHrefProp
      : kontaktaiQuoteHrefFromPath(href, { productSlug: catalogProductSlugFromHref(href) });

  return (
    <article className="w-full overflow-hidden rounded-xl md:rounded-2xl" id={id}>
      <div className="flex flex-col-reverse gap-10 bg-[#f6f7ff] px-4 py-10 md:flex-row md:items-center md:justify-between md:gap-14 md:py-[60px] md:pl-[80px] md:pr-[70px]">
        <div className="flex min-w-0 flex-1 flex-col gap-10 md:max-w-[687px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-3">
              {energyClass ? (
                <span className="shrink-0 rounded bg-[#263cd0] px-3 py-1.5 text-[12px] font-semibold text-white">
                  {energyClass}
                </span>
              ) : null}
              <div className="min-w-0 max-w-[479px]">
                <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.032em] md:text-[45px] md:leading-[1.1]">
                  <span className="text-[#263cd0]">{title}</span>
                  <span className="mt-0 block text-[#16216b]">{categoryLabel}</span>
                </h2>
              </div>
            </div>

            <p className="max-w-xl text-[15px] font-semibold leading-relaxed text-[#16216b]">
              {description}
            </p>

            {benefits.length > 0 ? (
              <ul className="flex flex-wrap gap-x-5 gap-y-3 md:gap-x-6">
                {benefits.map((b) => (
                  <li key={`${title}-${b.label}`}>
                    <ProductBenefitGlyphLabel icon={b.icon} label={b.label} />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
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
        </div>

        <div className="relative mx-auto aspect-[248/412] w-full max-w-[280px] shrink-0 md:mx-0 md:w-[min(40%,320px)] md:max-w-[360px]">
          <div className="relative h-full min-h-[220px] w-full overflow-hidden md:min-h-[360px]">
            <Image
              alt={imageAlt}
              className="object-cover object-center"
              fill
              quality={92}
              sizes="(max-width: 768px) 90vw, 360px"
              src={image}
              unoptimized={image.startsWith("http") || image.startsWith("/images/products/")}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
