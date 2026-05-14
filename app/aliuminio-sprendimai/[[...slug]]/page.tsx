import type { Metadata } from "next";

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
import { getSystem, systemDescription, systemTitle } from "@/lib/product-systems";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug?: string[] }> };

function pathFromAliuminioSegments(segments: string[] | undefined): string {
  if (!segments?.length) return "/aliuminio-sprendimai";
  return `/aliuminio-sprendimai/${segments.join("/")}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const segments = slug ?? [];
  const path = pathFromAliuminioSegments(segments);

  if (segments.length === 0) {
    return pageMeta({
      title: "Aliuminio sprendimai Šiauliuose – fasadai, pertvaros",
      description:
        "Aliuminio fasadai ir pertvaros Šiauliuose – komerciniai ir gyvenamieji projektai. Modernus dizainas, energijos efektyvumas, individualūs sprendimai.",
      path,
    });
  }

  if (segments.length === 1 && segments[0] === "aliuminio-fasadai") {
    return pageMeta({
      title: "Aliuminio fasadai Šiauliuose",
      description:
        "Aliuminio fasadai Šiauliuose – komercinių ir gyvenamųjų pastatų fasadai. Modernus dizainas, šilumos izoliacija, individualus projektavimas.",
      path,
    });
  }

  if (segments.length === 1 && segments[0] === "aliuminio-pertvaros") {
    return pageMeta({
      title: "Aliuminio pertvaros Šiauliuose",
      description:
        "Aliuminio pertvaros Šiauliuose – ofisų ir patalpų zonavimas, stiklo užpildai, sklandus dizainas. Individualus projektavimas ir montavimas.",
      path,
    });
  }

  if (segments.length === 2 && segments[0] === "aliuminio-fasadai") {
    const innerSlug = segments[1];
    const sys = getSystem(innerSlug);
    if (sys) {
      return pageMeta({
        title: systemTitle(sys),
        description: systemDescription(sys),
        path,
      });
    }
    return pageMeta({
      title: `${labelFromKebab(innerSlug)} – aliuminio fasadai`,
      description: `Aliuminio fasadai Šiauliuose. ${labelFromKebab(innerSlug)} – konsultacija nemokamai.`,
      path,
      noindex: true,
    });
  }

  if (segments.length === 2 && segments[0] === "aliuminio-pertvaros") {
    const innerSlug = segments[1];
    const sys = getSystem(innerSlug);
    if (sys) {
      return pageMeta({
        title: systemTitle(sys),
        description: systemDescription(sys),
        path,
      });
    }
    return pageMeta({
      title: `${labelFromKebab(innerSlug)} – aliuminio pertvaros`,
      description: `Aliuminio pertvaros Šiauliuose. ${labelFromKebab(innerSlug)} – konsultacija nemokamai.`,
      path,
      noindex: true,
    });
  }

  const trail = segments.map((s) => labelFromKebab(s)).join(" — ");
  return pageMeta({
    title: `${trail} – Langana`,
    description: `Aliuminio sprendimai: ${trail}. Konsultacija ir montavimas Šiauliuose.`,
    path,
    noindex: true,
  });
}

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

