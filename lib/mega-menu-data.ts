const I = {
  w: "/images/Langai/ChatGPT Image May 7, 2026, 02_58_42 PM (6).png",
  wPlastic: "/images/Langai/ChatGPT Image May 7, 2026, 02_55_35 PM (6).png",
  wAluminum: "/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (4).png",
  d: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_39 PM (1).png",
  dMetal: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_41 PM (4).png",
  dSpecial: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_08 PM (5).png",
  s: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (3).png",
  sAl: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (2).png",
  sPlastic: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (2).png",
  b: "/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (1).png",
  t: "/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_46_08 PM (3).png",
  z: "/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (4).png",
  a: "/images/alium4.png",
  aFacade: "/images/alium3.png",
  aPartitions: "/images/alium2.png",
} as const;

export type MegaLeaf = { label: string; href: string; image: string };
export type MegaGroup = { type: "group"; label: string; children: MegaLeaf[] };
export type MegaChild = MegaLeaf | MegaGroup;

export type MegaSection = {
  id: string;
  label: string;
  href: string;
  introTitle: string;
  introBody: string;
  introCta: { label: string; href: string };
  defaultImage: string;
  /** Tik intro + nuotrauka (be vidurinio stulpelio) */
  single?: boolean;
  children: MegaChild[];
};

export const MEGA_MENU: MegaSection[] = [
  {
    id: "langai",
    label: "Langai",
    href: "/langai",
    introTitle: "Viskas apie langus",
    introBody:
      "Kokybiški langai – šilumai, tylai ir ilgaamžiškumui. Pasirinkite medžiagą ir sprendimą savo namams.",
    introCta: { label: "Sužinoti daugiau", href: "/langai" },
    defaultImage: I.w,
    children: [
      { label: "Plastikiniai langai", href: "/langai/plastikiniai-langai", image: I.wPlastic },
      { label: "Aliuminio langai", href: "/langai/aliuminio-langai", image: I.wAluminum },
    ],
  },
  {
    id: "durys",
    label: "Durys",
    href: "/durys",
    introTitle: "Viskas apie duris",
    introBody:
      "Aukštos kokybės durys, skirtos ilgaamžiškumui, saugumui ir stiliui užtikrinti.",
    introCta: { label: "Sužinoti daugiau", href: "/durys" },
    defaultImage: I.d,
    children: [
      { label: "Plastikinės durys", href: "/durys/plastikines-durys", image: I.d },
      { label: "Aliuminio durys", href: "/durys/aliuminio-durys", image: I.a },
      { label: "Metalinės durys", href: "/durys/metalines-durys", image: I.dMetal },
      { label: "Specialios paskirties durys", href: "/durys/specialios-paskirties-durys", image: I.dSpecial },
    ],
  },
  {
    id: "stumdomos",
    label: "Stumdomos sistemos",
    href: "/stumdomos-sistemos",
    introTitle: "Stumdomos sistemos",
    introBody: "Efektyvūs stumdomų sistemų sprendimai terasoms ir stiklintoms erdvėms.",
    introCta: { label: "Sužinoti daugiau", href: "/stumdomos-sistemos" },
    defaultImage: I.s,
    children: [
      {
        label: "Aliuminės stumdomos sistemos",
        href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
        image: I.sAl,
      },
      {
        label: "Plastikinės stumdomos sistemos",
        href: "/stumdomos-sistemos/plastikines-stumdomos-sistemos",
        image: I.sPlastic,
      },
    ],
  },
  {
    id: "stiklinimas",
    label: "Stiklinimas",
    href: "/stiklinimas",
    introTitle: "Stiklinimo sprendimai",
    introBody: "Balkonai, terasos – šilti ir šalti stiklinimo variantai jūsų erdvėms.",
    introCta: { label: "Sužinoti daugiau", href: "/stiklinimas" },
    defaultImage: I.b,
    children: [
      { label: "Balkonų stiklinimas", href: "/stiklinimas/balkonu-stiklinimas", image: I.b },
      { label: "Terasų stiklinimas", href: "/stiklinimas/terasu-stiklinimas", image: I.t },
    ],
  },
  {
    id: "ziemos",
    label: "Žiemos sodai",
    href: "/ziemos-sodai",
    introTitle: "Žiemos sodai",
    introBody: "Individualus architektūrinis sprendimas – šviesi erdvė poilsiui, augalams ir jaukumui visus metus.",
    introCta: { label: "Sužinoti daugiau", href: "/ziemos-sodai" },
    defaultImage: I.z,
    children: [],
  },
  {
    id: "aliuminiai",
    label: "Aliuminio sprendimai",
    href: "/aliuminio-sprendimai",
    introTitle: "Aliuminio sprendimai",
    introBody: "Fasadai ir pertvaros iš aliuminio – tvirtumas, estetika ir ilgaamžiškumas.",
    introCta: { label: "Sužinoti daugiau", href: "/aliuminio-sprendimai" },
    defaultImage: I.a,
    children: [
      { label: "Aliuminio fasadai", href: "/aliuminio-sprendimai/aliuminio-fasadai", image: I.aFacade },
      { label: "Aliuminio pertvaros", href: "/aliuminio-sprendimai/aliuminio-pertvaros", image: I.aPartitions },
    ],
  },
];

function normPath(p: string): string {
  const t = p.trim();
  if (!t || t === "/") return "/";
  return t.endsWith("/") ? t.slice(0, -1) : t;
}

function walkMegaLeaves(children: MegaChild[], visit: (leaf: MegaLeaf) => void): void {
  for (const c of children) {
    if (isMegaGroup(c)) {
      walkMegaLeaves(c.children, visit);
    } else {
      visit(c);
    }
  }
}

/**
 * Vidinių produktų breadcrumbs: kelias nuo mega skyriaus šaknies iki giliausio atitinkančio lapo
 * (pvz. `/langai/plastikiniai-langai` → Langai → Plastikiniai langai).
 */
export function breadcrumbTrailFromBackHref(backHref: string): { label: string; href: string }[] {
  const b = normPath(backHref);

  for (const section of MEGA_MENU) {
    const sh = normPath(section.href);
    if (b !== sh && !b.startsWith(`${sh}/`)) continue;

    const trail: { label: string; href: string }[] = [{ label: section.label, href: section.href }];

    const leaves: MegaLeaf[] = [];
    walkMegaLeaves(section.children, (leaf) => {
      leaves.push(leaf);
    });

    let bestMatch: { label: string; href: string } | null = null;
    let bestLen = -1;
    for (const leaf of leaves) {
      const ch = normPath(leaf.href);
      if (b === ch || b.startsWith(`${ch}/`)) {
        if (ch.length > bestLen) {
          bestLen = ch.length;
          bestMatch = { label: leaf.label, href: leaf.href };
        }
      }
    }

    if (bestMatch != null && normPath(bestMatch.href) !== sh) {
      trail.push(bestMatch);
    }

    return trail;
  }

  const first = b.split("/").filter(Boolean)[0];
  if (!first) return [{ label: "Pradžia", href: "/" }];
  const label = first
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return [{ label, href: `/${first}` }];
}

/** Ar dabartinis kelias priklauso mega skyriaus šakniai (pvz. `/langai`, `/langai/kommerling-76`). */
export function megaSectionPathActive(pathname: string | null | undefined, sectionHref: string): boolean {
  if (!pathname || !sectionHref || sectionHref === "/") return false;
  const norm = (p: string) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);
  const p = norm(pathname);
  const h = norm(sectionHref);
  return p === h || p.startsWith(`${h}/`);
}

/** Ar dabartinis kelias patenka į bet kurį mega meniu skyrių (pvz. `/langai`, `/durys/...`). */
export function isAnyMegaSectionPathActive(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return MEGA_MENU.some((s) => megaSectionPathActive(pathname, s.href));
}

export function isMegaGroup(c: MegaChild): c is MegaGroup {
  return "type" in c && c.type === "group";
}

/** Turi atsidarančią mega panelę (submeniu) */
export function sectionHasMegaMenu(s: MegaSection): boolean {
  return !s.single && s.children.length > 0;
}
