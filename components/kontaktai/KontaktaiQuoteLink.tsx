"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import { kontaktaiQuoteHrefFromPath, type KontaktaiQuoteHrefOptions } from "@/lib/contact-href";

export type KontaktaiQuoteLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  /** Jei nenurodytas — naudojamas dabartinis `pathname` (šaltinio puslapis). */
  fromPath?: string;
  quote?: KontaktaiQuoteHrefOptions;
};

/** Nuoroda į `/kontaktai#uzklausa` su `?from=` pagal dabartinį puslapį (arba `fromPath`). */
export function KontaktaiQuoteLink({ fromPath, quote, ...rest }: KontaktaiQuoteLinkProps) {
  const pathname = usePathname() ?? "/";
  const href = kontaktaiQuoteHrefFromPath(fromPath ?? pathname, quote);
  return <Link href={href} {...rest} />;
}
