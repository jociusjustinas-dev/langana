import type { ReactNode } from "react";

/**
 * Skaido antraštę į akcentinę (ryškiai mėlyna) ir antrinę dalį, kaip /langai blokai.
 * - Jei yra `: ` — skaida prie dvitaškio.
 * - Ilgiems sakiniams (>36 simb.) — prie pirmos `, `.
 * - Kitu atveju — po pirmo žodžio.
 */
export function splitProductHeading(text: string): { lead: string; rest: string | null } {
  const t = text.trim();
  const cs = t.indexOf(": ");
  if (cs !== -1) {
    return {
      lead: t.slice(0, cs).trim(),
      rest: `: ${t.slice(cs + 2).trim()}`,
    };
  }
  const comma = t.indexOf(", ");
  if (comma !== -1 && t.length > 36) {
    return {
      lead: t.slice(0, comma).trim(),
      rest: t.slice(comma).trim(),
    };
  }
  const sp = t.indexOf(" ");
  if (sp === -1) return { lead: t, rest: null };
  return {
    lead: t.slice(0, sp).trim(),
    rest: ` ${t.slice(sp + 1).trim()}`,
  };
}

type ProductSectionHeadingProps = {
  children: string;
  className?: string;
  /** Šviesus fonas: #263cd0 + #16216b. Tamsi juosta: visas tekstas baltas (#263cd0 / tamsus fonas). */
  variant?: "onLight" | "onDark";
  as?: "h2" | "h3";
  /**
   * Jei nurodyta ir sutampa su antraštės pradžia — visa ši dalis ryškiai mėlyna,
   * likusi dalis pagal `variant`. Kitu atveju — automatinis skaidymas (`splitProductHeading`).
   */
  accentLead?: string;
};

/** Antraštė produktų viduje: `onLight` — #263cd0 + #16216b; `onDark` — visas tekstas baltas. */
export function ProductSectionHeading({
  children,
  className = "",
  variant = "onLight",
  as = "h2",
  accentLead,
}: ProductSectionHeadingProps): ReactNode {
  const leadClass = variant === "onLight" ? "text-[#263cd0]" : "text-white";
  const restClass = variant === "onLight" ? "text-[#16216b]" : "text-white";
  const Tag = as;

  const trimmed = children.trim();
  const accent = accentLead?.trim();
  if (accent && trimmed.startsWith(accent)) {
    const restText = trimmed.slice(accent.length);
    return (
      <Tag className={className}>
        <span className={leadClass}>{accent}</span>
        {restText ? <span className={restClass}>{restText}</span> : null}
      </Tag>
    );
  }

  const { lead, rest } = splitProductHeading(children);
  return (
    <Tag className={className}>
      <span className={leadClass}>{lead}</span>
      {rest ? <span className={restClass}>{rest}</span> : null}
    </Tag>
  );
}
