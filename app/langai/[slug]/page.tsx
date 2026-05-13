import type { ReactNode } from "react";
import { ProductDetailHero } from "@/components/catalog/ProductDetailHero";
import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { ProductInnerPage } from "@/components/product-inner/ProductInnerPage";
import { getAluminumLangaiProductBySlug } from "@/data/aliuminio-langai-products";
import { getPlasticLangaiProductBySlug } from "@/data/catalog";
import { getProductInnerContent } from "@/data/product-inner";

type Props = { params: Promise<{ slug: string }> };

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
