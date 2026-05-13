import type { ProcessStep } from "@/components/plastikiniai-langai/ProcessSteps";
import type { FaqItem } from "@/components/plastikiniai-langai/FaqSection";

export type ProductInnerFeature = {
  title: string;
  description: string;
};

export type ProductInnerSpec = {
  label: string;
  value: string;
};

export type ProductInnerOption = {
  title: string;
  description?: string;
};

export type ProductInnerAdaptationTab = {
  id: string;
  label: string;
  bullets: string[];
};

export type ProductInnerSimilarItem = {
  title: string;
  description: string;
  href: string;
};

export type ProductInnerIntro = {
  id: string;
  heading: string;
  /** Pradinė antraštės dalis — visa rodoma ryškiai mėlyna (#263cd0), likęs tekstas tamsiai mėlynas. */
  headingAccentLead?: string;
  body: string;
  /** Antraštė virš privalumų kortelių dešinėje (pvz. „Pagrindiniai privalumai“). */
  featuresHeading?: string;
  /** Papildomas CTA po intro tekstu (pvz. Kömmerling intro). */
  primaryCta?: { label: string; href: string };
};

export type ProductInnerContent = {
  slug: string;
  /** Jei true — hero tik „Gauti pasiūlymą“ (be „Sužinoti daugiau“). */
  hideHeroLearnMore?: boolean;
  intro: ProductInnerIntro;
  features: ProductInnerFeature[];
  /** Jei nenurodyta — sekcija nerodoma (pvz. Kömmerling 76). */
  useCases?: {
    heading: string;
    goodTitle: string;
    good: string[];
    badTitle: string;
    bad: string[];
  };
  /** Lentelės antraštė; numatyta „Techninė informacija“. */
  specsHeading?: string;
  /** Antraštė antro stulpelio (pvz. „Kömmerling 76“). */
  specsValueColumn?: string;
  specs: ProductInnerSpec[];
  /** Po lentelės mygtukas. */
  specsCtaAfter?: { label: string; href: string };
  options?: ProductInnerOption[];
  process?: {
    headingLine1: string;
    headingLine2: string;
    steps: ProcessStep[];
  };
  faq?: {
    headingLead: string;
    headingRest: string;
    items: FaqItem[];
  };
  /** Pritaikymo galimybės su tabais. */
  adaptation?: {
    title: string;
    intro: string;
    tabs: ProductInnerAdaptationTab[];
  };
  /** Pritaikymo galimybės be tabų (trumpesni vidiniai puslapiai). */
  adaptationSimple?: {
    title: string;
    intro: string;
    bullets: string[];
  };
  /** CTA juosta puslapio pabaigoje (po „Panašių produktų“, jei tie rodomi). */
  bottomCta?: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
  /** Panašių produktų kortelės. */
  similarProducts?: {
    heading: string;
    /** Jei nepaduota ar tuščia — automatiškai visi kiti iš `PLASTIC_LANGAI_PRODUCTS`. */
    items?: ProductInnerSimilarItem[];
    /** Kai true ir be `items` — rodomi kiti „Aliuminiai langai“ produktai iš subkategorijos. */
    fillFromAluminumCategory?: boolean;
    /** Kai true ir be `items` — rodomos kitos „Aliuminės stumdomos sistemos“ iš subkategorijos. */
    fillFromAluminumSlidingCategory?: boolean;
  };
};
