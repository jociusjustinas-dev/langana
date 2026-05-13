import { ProductDetailHero } from "@/components/catalog/ProductDetailHero";
import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { ProductInnerPage } from "@/components/product-inner/ProductInnerPage";
import { getAluminumSlidingProductBySlug } from "@/data/aliumines-stumdomos-sistemos-products";
import { getProductInnerContent } from "@/data/product-inner";

type Props = { params: Promise<{ slug: string }> };

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
