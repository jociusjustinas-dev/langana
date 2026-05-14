import type { Metadata } from "next";

import { ProductDetailHero } from "@/components/catalog/ProductDetailHero";
import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ProductInnerPage } from "@/components/product-inner/ProductInnerPage";
import { getAluminumSlidingProductBySlug } from "@/data/aliumines-stumdomos-sistemos-products";
import { getProductInnerContent } from "@/data/product-inner";
import { getSystem, systemDescription, systemTitle } from "@/lib/product-systems";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = `/stumdomos-sistemos/aliumines-stumdomos-sistemos/${slug}`;
  const sys = getSystem(slug);
  if (sys) {
    return pageMeta({
      title: systemTitle(sys),
      description: systemDescription(sys),
      path,
    });
  }
  const product = getAluminumSlidingProductBySlug(slug);
  if (product) {
    return pageMeta({
      title: `${product.title} – stumdomos sistemos Šiauliuose`,
      description: product.description.slice(0, 160),
      path,
    });
  }
  return pageMeta({
    title: `${labelFromKebab(slug)} – stumdomos sistemos`,
    description: "Aliuminės stumdomos sistemos Šiauliuose. Konsultacija ir pasiūlymas nemokamai.",
    path,
    noindex: true,
  });
}

export default async function AliuminesStumdomosSistemosInnerPage({ params }: Props) {
  const { slug } = await params;
  const product = getAluminumSlidingProductBySlug(slug);
  const inner = getProductInnerContent(slug);

  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        {product ? (
          inner ? (
            <ProductInnerPage
              backHref="/stumdomos-sistemos/aliumines-stumdomos-sistemos"
              hideHeroCategoryLabelInHeading
              hideHeroLearnMore
              inner={inner}
              product={product}
              wideHeroHeading
            />
          ) : (
            <div className="langana-flush-under-site-header overflow-x-clip bg-white">
              <ProductDetailHero
                backHref="/stumdomos-sistemos/aliumines-stumdomos-sistemos"
                hideCategoryLabelInHeading
                product={product}
                wideHeading
              />
            </div>
          )
        ) : (
          <CategoryPageStub label={labelFromKebab(slug)} />
        )}
        <HomeCta showPattern />
        <SiteFooter />
      </main>
    </div>
  );
}
