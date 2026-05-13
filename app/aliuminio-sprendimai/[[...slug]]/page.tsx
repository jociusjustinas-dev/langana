import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";
import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { AliuminioFasadaiPage } from "@/components/aliuminio-sprendimai/AliuminioFasadaiPage";
import { AliuminioPertvarosPage } from "@/components/aliuminio-sprendimai/AliuminioPertvarosPage";
import { AliuminioSprendimaiHubPage } from "@/components/aliuminio-sprendimai/AliuminioSprendimaiHubPage";
import { ProductInnerPage } from "@/components/product-inner/ProductInnerPage";
import { getAluminumFacadeProductBySlug } from "@/data/aliuminio-fasadai-products";
import { getAluminumPartitionProductBySlug } from "@/data/aliuminio-pertvaros-products";
import { getProductInnerContent } from "@/data/product-inner";

type Props = { params: Promise<{ slug?: string[] }> };

export default async function AliuminioSprendimaiPage({ params }: Props) {
  const { slug } = await params;
  const isHub = !slug?.length;

  const page = !slug?.length ? (
    <AliuminioSprendimaiHubPage />
  ) : slug.length === 1 && slug[0] === "aliuminio-fasadai" ? (
    <AliuminioFasadaiPage />
  ) : slug.length === 1 && slug[0] === "aliuminio-pertvaros" ? (
    <AliuminioPertvarosPage />
  ) : slug.length === 2 && slug[0] === "aliuminio-fasadai" ? (
    (() => {
      const innerSlug = slug[1];
      const product = getAluminumFacadeProductBySlug(innerSlug);
      const inner = getProductInnerContent(innerSlug);
      if (product && inner) {
        return (
          <ProductInnerPage
            backHref="/aliuminio-sprendimai/aliuminio-fasadai"
            hideHeroLearnMore
            inner={inner}
            product={product}
          />
        );
      }
      return (
        <CategoryPageStub label={labelFromKebab(innerSlug)} />
      );
    })()
  ) : slug.length === 2 && slug[0] === "aliuminio-pertvaros" ? (
    (() => {
      const innerSlug = slug[1];
      const product = getAluminumPartitionProductBySlug(innerSlug);
      const inner = getProductInnerContent(innerSlug);
      if (product && inner) {
        return (
          <ProductInnerPage
            backHref="/aliuminio-sprendimai/aliuminio-pertvaros"
            hideHeroLearnMore
            inner={inner}
            product={product}
          />
        );
      }
      return (
        <CategoryPageStub label={labelFromKebab(innerSlug)} />
      );
    })()
  ) : (
    (() => {
      const trail = slug.map((s) => labelFromKebab(s)).join(" — ");
      return <CategoryPageStub label={trail} />;
    })()
  );

  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        {page}
        <HomeCta
          showPattern
          {...(isHub
            ? {
                title: "Aliuminio konstrukcija jūsų projektui?",
                subtitle: "Dirbame su YAWAL ir PONZIO — gauti komercinį pasiūlymą.",
              }
            : {})}
        />
        <SiteFooter />
      </main>
    </div>
  );
}

