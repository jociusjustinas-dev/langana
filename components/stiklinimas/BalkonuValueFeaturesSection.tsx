import { ValueFeaturesSplitSection } from "@/components/ui/ValueFeaturesSplitSection";

const FEATURES = [
  {
    title: "Konstrukcija pagal poreikį",
    description: "Galite rinktis plastikines arba aliuminines sistemas pagal norimą komfortą, estetiką ir biudžetą.",
  },
  {
    title: "Skirtingi stiklo variantai",
    description: "Parenkami skirtingo storio stiklai pagal triukšmo, apsaugos ir naudojimo poreikį.",
  },
  {
    title: "Patogus kasdienis naudojimas",
    description: "Judančios konstrukcijos, atsidarančios į šonus, leidžia patogiai vėdinti balkoną ir valdyti erdvę.",
  },
  {
    title: "Lengva priežiūra",
    description: "Sprendimai suprojektuojami taip, kad konstrukcijos būtų lengvai valomos ir patogios eksploatuoti.",
  },
] as const;

export function BalkonuValueFeaturesSection() {
  return (
    <ValueFeaturesSplitSection
      features={FEATURES}
      headingLead="Judančios konstrukcijos, "
      headingRest="stiklo pasirinkimas ir paprasta priežiūra"
      imageAlt="Balkonų stiklinimo konstrukcija"
      imageSrc="/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (2).png"
    />
  );
}
