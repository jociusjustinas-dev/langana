import type { ProductCardProps } from "@/components/catalog/ProductCard";
import { catalogProductSlugFromHref } from "@/data/catalog";

export const pbi50nSistemaProduct: ProductCardProps = {
  id: "pbi-50n-sistema",
  title: "PBI 50N sistema",
  categoryLabel: "Aliuminio pertvaros",
  energyClass: "Vidaus pertvaroms",
  description:
    "Aliuminio profilių sistema šilumos izoliacijos nereikalaujančioms vidinėms pertvaroms, švytuoklinėms durims, aptarnavimo langeliams ir atitvertoms patalpų dalims.",
  image: "/images/products/pbi-50n-sistema.png",
  gallery: ["/images/products/pbi-50n-sistema.png"],
  operationTypes: [
    { label: "Vidinės pertvaros", icon: "PanelTop" },
    { label: "Švytuoklinės durys", icon: "DoorOpen" },
    { label: "Aptarnavimo langeliai", icon: "Square" },
    { label: "Atitvertos patalpos", icon: "LayoutGrid" },
    { label: "Stiklinės durys", icon: "PanelsTopLeft" },
  ],
  benefits: [
    { label: "50 mm profilio gylis", icon: "Ruler" },
    { label: "Tvirta konstrukcija", icon: "ShieldCheck" },
    { label: "Dūmų nepraleidžiančios konstrukcijos", icon: "CloudOff" },
    { label: "Vienvėrės ir dvivėrės durys", icon: "DoorOpen" },
    { label: "Lanko formos konstrukcijos", icon: "Orbit" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/aliuminio-sprendimai/aliuminio-pertvaros/pbi-50n-sistema",
};

export const pbi40eSistemaProduct: ProductCardProps = {
  id: "pbi-40e-sistema",
  title: "PBI 40E sistema",
  categoryLabel: "Aliuminio pertvaros",
  energyClass: "Ekonomiškas interjeras",
  description:
    "Aliuminio sistema šilumos izoliacijos nereikalaujančioms vidinėms pertvaroms, durims, langams, vitrinoms ir atitvertoms patalpų dalims.",
  image: "/images/products/pbi-40e-sistema.png",
  gallery: ["/images/products/pbi-40e-sistema.png"],
  operationTypes: [
    { label: "Vidinės pertvaros", icon: "PanelTop" },
    { label: "Vidaus durys", icon: "DoorOpen" },
    { label: "Vidaus langai", icon: "Square" },
    { label: "Vitrinos", icon: "PanelsTopLeft" },
    { label: "Atitvertos patalpos", icon: "LayoutGrid" },
  ],
  benefits: [
    { label: "Ekonomiškas sprendimas", icon: "BadgeEuro" },
    { label: "Patogus interjeras", icon: "Sparkles" },
    { label: "Dūmų nepraleidžiančios konstrukcijos", icon: "CloudOff" },
    { label: "Lanko formos konstrukcijos", icon: "Orbit" },
    { label: "Pasirinktas sienų kampas", icon: "Shapes" },
    { label: "Suderinami apkaustai", icon: "Settings" },
  ],
  href: "/aliuminio-sprendimai/aliuminio-pertvaros/pbi-40e-sistema",
};

export const ALUMINUM_PARTITIONS_PRODUCTS: ProductCardProps[] = [pbi50nSistemaProduct, pbi40eSistemaProduct];

export function getAluminumPartitionProductBySlug(slug: string): ProductCardProps | undefined {
  return ALUMINUM_PARTITIONS_PRODUCTS.find((p) => catalogProductSlugFromHref(p.href) === slug);
}

