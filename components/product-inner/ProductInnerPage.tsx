import type { ProductCardProps } from "@/components/catalog/ProductCard";
import { ProductDetailHero } from "@/components/catalog/ProductDetailHero";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { breadcrumbTrailFromBackHref } from "@/lib/mega-menu-data";
import { kontaktaiQuoteHrefFromPath } from "@/lib/contact-href";
import type { ProductInnerContent } from "@/data/product-inner/types";
import { catalogProductSlugFromHref } from "@/data/catalog";

import { ProductAdaptationSimple } from "./ProductAdaptationSimple";
import { ProductAdaptationTabs } from "./ProductAdaptationTabs";
import { ProductBottomCta } from "./ProductBottomCta";
import { ProductIntroFeaturesSection } from "./ProductIntroFeaturesSection";
import { ProductOptionsGrid } from "./ProductOptionsGrid";
import { ProductSimilarProducts } from "./ProductSimilarProducts";
import { ProductSpecsTable } from "./ProductSpecsTable";
import { ProductUseCases } from "./ProductUseCases";

type ProductInnerPageProps = {
  product: ProductCardProps;
  inner: ProductInnerContent;
  backHref: string;
  wideHeroHeading?: boolean;
  hideHeroLearnMore?: boolean;
  hideHeroCategoryLabelInHeading?: boolean;
};

/** Pilnas vidinis produktų puslapis (Figma „Product inner“ 8074:83003 + turinys). */
export function ProductInnerPage({
  product,
  inner,
  backHref,
  wideHeroHeading = false,
  hideHeroLearnMore = false,
  hideHeroCategoryLabelInHeading = false,
}: ProductInnerPageProps) {
  const learnMoreHref = hideHeroLearnMore || inner.hideHeroLearnMore ? undefined : `#${inner.intro.id}`;
  const breadcrumbTrail = breadcrumbTrailFromBackHref(backHref);

  const withQuoteSource = (link?: { label: string; href: string }) => {
    if (!link) return undefined;
    if (!link.href.startsWith("/kontaktai")) return link;
    return {
      ...link,
      href: kontaktaiQuoteHrefFromPath(product.href, {
        productSlug: catalogProductSlugFromHref(product.href),
      }),
    };
  };

  const introPrimaryCta = withQuoteSource(
    inner.intro.primaryCta ?? { label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" },
  );
  const specsCtaAfter = withQuoteSource(inner.specsCtaAfter);
  const bottomCtaBlock = inner.bottomCta
    ? { ...inner.bottomCta, cta: withQuoteSource(inner.bottomCta.cta)! }
    : undefined;

  return (
    <div className="langana-flush-under-site-header overflow-x-clip bg-white">
      <div className="langana-site-header-clearance">
        <Breadcrumb
          items={[
            { label: "Pradžia", href: "/" },
            ...breadcrumbTrail.map((c) => ({ label: c.label, href: c.href })),
            { label: product.title },
          ]}
        />
        <ProductDetailHero
          backHref={backHref}
          hideBackLink
          hideCategoryLabelInHeading={hideHeroCategoryLabelInHeading}
          learnMoreHref={learnMoreHref}
          product={product}
          useSiteHeaderClearance={false}
          wideHeading={wideHeroHeading}
        />
      </div>

      <ProductIntroFeaturesSection
        body={inner.intro.body}
        features={inner.features}
        heading={inner.intro.heading}
        headingAccentLead={inner.intro.headingAccentLead}
        id={inner.intro.id}
        primaryCta={introPrimaryCta}
      />

      {inner.useCases ? <ProductUseCases data={inner.useCases} /> : null}

      <ProductSpecsTable
        ctaAfter={specsCtaAfter}
        heading={inner.specsHeading}
        rows={inner.specs}
        valueColumnHeading={inner.specsValueColumn}
        wide={Boolean(inner.specsValueColumn)}
      />

      {inner.options && inner.options.length > 0 ? <ProductOptionsGrid options={inner.options} /> : null}

      {inner.process ? (
        <ProcessSteps
          headingLine1={inner.process.headingLine1}
          headingLine2={inner.process.headingLine2}
          steps={inner.process.steps}
        />
      ) : null}

      {inner.adaptationSimple ? (
        <ProductAdaptationSimple
          bullets={inner.adaptationSimple.bullets}
          intro={inner.adaptationSimple.intro}
          title={inner.adaptationSimple.title}
        />
      ) : null}

      {inner.adaptation ? (
        <ProductAdaptationTabs
          intro={inner.adaptation.intro}
          tabs={inner.adaptation.tabs}
          title={inner.adaptation.title}
        />
      ) : null}

      {inner.faq ? (
        <FaqSection
          faqIdPrefix={`product-${inner.slug}-faq`}
          headingLead={inner.faq.headingLead}
          headingRest={inner.faq.headingRest}
          items={inner.faq.items}
          sectionId="duk-produktas"
        />
      ) : null}

      {inner.similarProducts ? (
        <ProductSimilarProducts
          currentSlug={inner.slug}
          fillFromAluminumCategory={inner.similarProducts.fillFromAluminumCategory}
          fillFromAluminumSlidingCategory={inner.similarProducts.fillFromAluminumSlidingCategory}
          heading={inner.similarProducts.heading}
          items={inner.similarProducts.items}
        />
      ) : null}

      {bottomCtaBlock ? (
        <ProductBottomCta
          cta={bottomCtaBlock.cta}
          description={bottomCtaBlock.description}
          title={bottomCtaBlock.title}
        />
      ) : null}
    </div>
  );
}
