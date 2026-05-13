import type { ProductInnerContent } from "./types";

/**
 * Visiems aliuminio langų vidiniams puslapiams (TM 102HI, TM 77HI, TM 74HI, TM 62HI, …):
 * be papildomų kontaktų juostų ir be papildomo CTA — tik pilnas kategorijos „Panašūs produktai“ (kiti produktai iš subkategorijos).
 */
export const aluminumInnerSimilarProducts: NonNullable<ProductInnerContent["similarProducts"]> = {
  heading: "Panašūs produktai",
  fillFromAluminumCategory: true,
};
