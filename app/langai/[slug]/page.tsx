import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";
import { ProductDetailHero } from "@/components/catalog/ProductDetailHero";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { ProductInnerPage } from "@/components/product-inner/ProductInnerPage";
import { getAluminumLangaiProductBySlug } from "@/data/aliuminio-langai-products";
import { getPlasticLangaiProductBySlug } from "@/data/catalog";
import { getProductInnerContent } from "@/data/product-inner";
import { getSystem, systemDescription, systemTitle } from "@/lib/product-systems";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = `/langai/${slug}`;
  const sys = getSystem(slug);
  if (sys) {
    return pageMeta({
      title: systemTitle(sys),
      description: systemDescription(sys),
      path,
    });
  }
  const product = getPlasticLangaiProductBySlug(slug) ?? getAluminumLangaiProductBySlug(slug);
  if (product) {
    return pageMeta({
      title: `${product.title} – langai Šiauliuose`,
      description: product.description.slice(0, 160),
      path,
    });
  }
  const label = labelFromKebab(slug);
  return pageMeta({
    title: `${label} – Langana`,
    description: `Informacija apie ${label}. Langana – langai ir durys Šiauliuose. Konsultacija nemokamai.`,
    path,
    noindex: true,
  });
}

export default async function LangaiSubPage({ params }: Props) {
  const { slug } = await params;
  const product =
    getPlasticLangaiProductBySlug(slug) ?? getAluminumLangaiProductBySlug(slug);
  const inner = getProductInnerContent(slug);

  const shellClass = "flex min-h-full flex-col bg-white text-[#16216b]";

  const backHref =
    product?.categoryLabel === "Aliuminiai langai"
      ? "/langai/aliuminio-langai"
      : "/langai/plastikiniai-langai";

  let body: ReactNode;
  if (product && inner) {
    body = (
      <ProductInnerPage
        backHref={backHref}
        inner={inner}
        product={product}
      />
    );
  } else if (product) {
    body = (
      <div className="langana-flush-under-site-header overflow-x-clip bg-white">
        <ProductDetailHero backHref={backHref} product={product} />
      </div>
    );
  } else {
    body = (
      <CategoryPageStub label={labelFromKebab(slug)} />
    );
  }

  return (
    <div className={shellClass}>
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        {body}
        <SiteMainClosing />
      </main>
    </div>
  );
}
