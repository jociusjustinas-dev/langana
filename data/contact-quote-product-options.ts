import type { ProductCardProps } from "@/components/catalog/ProductCard";

import { ALUMINUM_SLIDING_PRODUCTS } from "@/data/aliumines-stumdomos-sistemos-products";
import { ALUMINUM_FACADES_PRODUCTS } from "@/data/aliuminio-fasadai-products";
import { ALUMINUM_LANGAI_PRODUCTS } from "@/data/aliuminio-langai-products";
import { ALUMINUM_PARTITIONS_PRODUCTS } from "@/data/aliuminio-pertvaros-products";
import { catalogProductSlugFromHref, PLASTIC_LANGAI_PRODUCTS } from "@/data/catalog";

export type ContactQuoteProductOption = {
  /** Unikalus identifikatorius formoje (`produktas=` / select value) — paskutinis `href` segmentas. */
  value: string;
  label: string;
  group: string;
};

const ALL_PRODUCTS: ProductCardProps[] = [
  ...PLASTIC_LANGAI_PRODUCTS,
  ...ALUMINUM_LANGAI_PRODUCTS,
  ...ALUMINUM_FACADES_PRODUCTS,
  ...ALUMINUM_PARTITIONS_PRODUCTS,
  ...ALUMINUM_SLIDING_PRODUCTS,
];

function productRows(): ContactQuoteProductOption[] {
  const seen = new Set<string>();
  const out: ContactQuoteProductOption[] = [];
  for (const p of ALL_PRODUCTS) {
    const value = catalogProductSlugFromHref(p.href);
    if (!value || seen.has(value)) continue;
    seen.add(value);
    out.push({
      value,
      label: p.title,
      group: p.categoryLabel?.trim() || "Produktai",
    });
  }
  return out.sort((a, b) => a.group.localeCompare(b.group, "lt") || a.label.localeCompare(b.label, "lt"));
}

export function getContactQuoteProductOptions(): ContactQuoteProductOption[] {
  return productRows();
}

export type ContactQuoteProductGroup = { group: string; options: { value: string; label: string }[] };

/** Segmentuotas `<optgroup>` sąrašui kontaktų formoje. */
export function getContactQuoteProductGroups(): ContactQuoteProductGroup[] {
  const rows = productRows();
  const map = new Map<string, { value: string; label: string }[]>();
  for (const r of rows) {
    const list = map.get(r.group) ?? [];
    list.push({ value: r.value, label: r.label });
    map.set(r.group, list);
  }
  return [...map.entries()]
    .sort(([a], [b]) => a.localeCompare(b, "lt"))
    .map(([group, options]) => ({
      group,
      options: options.sort((x, y) => x.label.localeCompare(y.label, "lt")),
    }));
}

/** Ilgiausio atitinkančio katalogo `href` parinkimas (vidiniai produktų keliai). */
export function contactQuoteProductFromPathname(pathname: string): ContactQuoteProductOption | null {
  const path = pathname.trim().replace(/\/+$/, "") || "/";
  const candidates = [...ALL_PRODUCTS].sort((a, b) => b.href.length - a.href.length);
  for (const p of candidates) {
    const h = p.href.replace(/\/+$/, "");
    if (path === h || path.startsWith(`${h}/`)) {
      return {
        value: catalogProductSlugFromHref(p.href),
        label: p.title,
        group: p.categoryLabel?.trim() || "Produktai",
      };
    }
  }
  return null;
}
