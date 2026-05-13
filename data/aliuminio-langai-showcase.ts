import type { ProductCardProps } from "@/components/catalog/ProductCard";
import { catalogProductSlugFromHref } from "@/data/catalog";
import {
  pi50nSistemaProduct,
  tm102hiSistemaProduct,
  tm62hiSistemaProduct,
  tm62SistemaProduct,
  tm74hiSistemaProduct,
  tm77hiSistemaProduct,
} from "@/data/aliuminio-langai-products";
import type { ProductInnerSimilarItem } from "@/data/product-inner/types";

/**
 * 6 Yawal aliuminio langų / durų sistemos — „Aliuminiai langai“ subkategorijos kortelės.
 */
export const aliuminioLangaiShowcaseProducts: ProductCardProps[] = [
  tm102hiSistemaProduct,
  tm77hiSistemaProduct,
  tm74hiSistemaProduct,
  tm62hiSistemaProduct,
  tm62SistemaProduct,
  pi50nSistemaProduct,
];

/** „Panašių produktų“ karuselei — visi kiti aliuminio langų produktai (be dabartinio vidinio puslapio). */
export function getOtherAluminumLangaiAsSimilarItems(excludeSlug: string): ProductInnerSimilarItem[] {
  const pathOnly = (href: string) => href.split("#")[0] ?? href;
  return aliuminioLangaiShowcaseProducts
    .filter((p) => {
      const slugFromHref = catalogProductSlugFromHref(pathOnly(p.href));
      return slugFromHref !== excludeSlug && p.id !== excludeSlug;
    })
    .map((p) => ({
      title: p.title,
      description: p.description,
      href: p.href,
    }));
}
