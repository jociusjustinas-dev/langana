import type { ProductInnerContent } from "./types";
import { kommerling76Inner } from "./kommerling-76";
import { kommerling88Inner } from "./kommerling-88";
import { tm102hiSistemaInner } from "./tm-102hi-sistema";
import { pi50nSistemaInner } from "./pi-50n-sistema";
import { tm62SistemaInner } from "./tm-62-sistema";
import { tm62hiSistemaInner } from "./tm-62hi-sistema";
import { tm74hiSistemaInner } from "./tm-74hi-sistema";
import { tm77hiSistemaInner } from "./tm-77hi-sistema";
import { vekaSoftline76Inner } from "./veka-softline-76";
import { witalPrestige70Inner } from "./wital-prestige-70";
import { witalThermLight80Inner } from "./wital-therm-light-80";
import { dp180SistemaInner } from "./dp-180-sistema";
import { dp150tSistemaInner } from "./dp-150t-sistema";
import { dp100SistemaInner } from "./dp-100-sistema";
import { l50SistemaInner } from "./l-50-sistema";
import { harmonicSistemaInner } from "./sulankstomos-sistemos-harmonic";
import { fa50nSistemaInner } from "./fa-50n-sistema";
import { fa50nHiSistemaInner } from "./fa-50n-hi-sistema";
import { pbi50nSistemaInner } from "./pbi-50n-sistema";
import { pbi40eSistemaInner } from "./pbi-40e-sistema";

const BY_SLUG: Record<string, ProductInnerContent> = {
  [kommerling76Inner.slug]: kommerling76Inner,
  [kommerling88Inner.slug]: kommerling88Inner,
  [vekaSoftline76Inner.slug]: vekaSoftline76Inner,
  [witalPrestige70Inner.slug]: witalPrestige70Inner,
  [witalThermLight80Inner.slug]: witalThermLight80Inner,
  [tm102hiSistemaInner.slug]: tm102hiSistemaInner,
  [tm77hiSistemaInner.slug]: tm77hiSistemaInner,
  [tm74hiSistemaInner.slug]: tm74hiSistemaInner,
  [tm62hiSistemaInner.slug]: tm62hiSistemaInner,
  [tm62SistemaInner.slug]: tm62SistemaInner,
  [pi50nSistemaInner.slug]: pi50nSistemaInner,
  [dp180SistemaInner.slug]: dp180SistemaInner,
  [dp150tSistemaInner.slug]: dp150tSistemaInner,
  [dp100SistemaInner.slug]: dp100SistemaInner,
  [l50SistemaInner.slug]: l50SistemaInner,
  [harmonicSistemaInner.slug]: harmonicSistemaInner,
  [fa50nSistemaInner.slug]: fa50nSistemaInner,
  [fa50nHiSistemaInner.slug]: fa50nHiSistemaInner,
  [pbi50nSistemaInner.slug]: pbi50nSistemaInner,
  [pbi40eSistemaInner.slug]: pbi40eSistemaInner,
};

export function getProductInnerContent(slug: string): ProductInnerContent | undefined {
  return BY_SLUG[slug];
}

export type { ProductInnerContent } from "./types";
