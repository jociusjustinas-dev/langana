import type { ProductCardProps } from "@/components/catalog/ProductCard";
import { catalogProductSlugFromHref } from "@/data/catalog";
import { aluminumFacadeProductImages } from "@/lib/figma-assets";

export const fa50nSistemaProduct: ProductCardProps = {
  id: "fa-50n-sistema",
  title: "FA 50N sistema",
  categoryLabel: "Aliuminio fasadai",
  energyClass: "Fasadų sistema",
  description:
    "Lengvų fasadinių statinių-skersinių konstrukcijų sistema, skirta aliuminio fasadų projektavimui ir įrengimui.",
  image: aluminumFacadeProductImages.fa50n,
  gallery: [aluminumFacadeProductImages.fa50n],
  operationTypes: [
    { label: "Fasadinės sienos", icon: "Building2" },
    { label: "Aliuminio fasadai", icon: "PanelsTopLeft" },
    { label: "Komerciniai pastatai", icon: "Landmark" },
    { label: "Viešieji pastatai", icon: "Building" },
    { label: "Dideli stiklo plotai", icon: "Maximize2" },
  ],
  benefits: [
    { label: "Gera šilumos izoliacija", icon: "ThermometerSun" },
    { label: "Gera garso izoliacija", icon: "VolumeX" },
    { label: "Vandens nepralaidumas", icon: "Droplets" },
    { label: "Atsparumas vėjui", icon: "Wind" },
    { label: "Įvairios fasado formos", icon: "Shapes" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/aliuminio-sprendimai/aliuminio-fasadai/fa-50n-sistema",
};

export const fa50nHiSistemaProduct: ProductCardProps = {
  id: "fa-50n-hi-sistema",
  title: "FA 50N HI sistema",
  categoryLabel: "Aliuminio fasadai",
  energyClass: "Energiją tausojanti sistema",
  description:
    "Moderni aliuminio fasadų sistema su geresnėmis šilumos izoliacijos savybėmis. Tinka biurams, viešosios paskirties pastatams ir architektūriniams sprendimams.",
  image: aluminumFacadeProductImages.fa50nHi,
  gallery: [aluminumFacadeProductImages.fa50nHi],
  operationTypes: [
    { label: "Aliuminio fasadai", icon: "PanelsTopLeft" },
    { label: "Stiklo fasadai", icon: "Building2" },
    { label: "Biurų pastatai", icon: "BriefcaseBusiness" },
    { label: "Viešieji pastatai", icon: "Landmark" },
    { label: "Architektūriniai fasadai", icon: "Shapes" },
  ],
  benefits: [
    { label: "Geresnė šilumos izoliacija", icon: "ThermometerSun" },
    { label: "Atsparumas vėjui", icon: "Wind" },
    { label: "Vandens nepralaidumas", icon: "Droplets" },
    { label: "Įvairios formos ir dydžiai", icon: "Shapes" },
    { label: "Galimos saulės baterijos", icon: "Sun" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/aliuminio-sprendimai/aliuminio-fasadai/fa-50n-hi-sistema",
};

export const ALUMINUM_FACADES_PRODUCTS: ProductCardProps[] = [fa50nSistemaProduct, fa50nHiSistemaProduct];

export function getAluminumFacadeProductBySlug(slug: string): ProductCardProps | undefined {
  return ALUMINUM_FACADES_PRODUCTS.find((p) => catalogProductSlugFromHref(p.href) === slug);
}

