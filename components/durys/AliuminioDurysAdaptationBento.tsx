import Link from "next/link";

import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";

/** Skirtingos nuotraukos bento tinklei (kiti kadrai nei „Sprendimai pagal paskirtį“ tabuose). */
const BENTO_IMAGES = {
  tall: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_41 PM (4).png",
  tile: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_39 PM (2).png",
} as const;

type TopicCard = {
  eyebrow: string;
  title: string;
  body: string;
  toneClass: string;
  variant?: "soft" | "dark";
};

const TOPICS: TopicCard[] = [
  {
    eyebrow: "Dizainas",
    title: "Spalvos ir dizainas",
    body: "Aliuminio profiliai gali būti dažomi skirtingomis spalvomis, todėl duris galima derinti prie klasikinio arba modernaus pastato stiliaus.",
    toneClass: "",
    variant: "dark",
  },
  {
    eyebrow: "Apsauga",
    title: "Saugumo mechanizmai",
    body: "Galima rinktis dvigubas spynas, sklendes, grandinėles ir kitus mechanizmus, kurie padidina saugumo jausmą.",
    toneClass: "bg-[#eef0fb]",
  },
  {
    eyebrow: "Komfortas",
    title: "Garso komfortas",
    body: "Tinkamai parinktos durys padeda izoliuoti garsą ir sukurti ramesnę gyvenamąją ar darbo aplinką.",
    toneClass: "bg-[#f6f7ff]",
  },
];

const ATPARUMAS = {
  eyebrow: "Aplinka",
  title: "Atsparumas aplinkai",
  body: "Aliuminio durys gali būti dengiamos vandeniui atspariomis medžiagomis, o pati konstrukcija yra nedegi.",
};

function TopicTile({ eyebrow, title, body, toneClass, variant = "soft" }: TopicCard) {
  const isDark = variant === "dark";
  const surface = isDark ? "bg-[#16216b]" : toneClass;

  return (
    <div
      className={`relative flex h-full min-h-[220px] flex-col justify-between gap-5 overflow-hidden rounded-2xl p-6 md:gap-6 md:p-8 ${surface}`}
    >
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${isDark ? "text-white/75" : "text-[#16216b]"}`}
      >
        {eyebrow}
      </p>
      <div className="flex flex-col gap-3">
        <h3 className={`text-xl font-semibold leading-snug tracking-[-0.03em] md:text-2xl ${isDark ? "text-white" : "text-[#16216b]"}`}>
          {title}
        </h3>
        <p className={`text-[15px] font-normal leading-relaxed md:text-base ${isDark ? "text-white/90" : "text-[#16216b]"}`}>{body}</p>
      </div>
    </div>
  );
}

function ImageTile({ alt, objectPosition, src }: { alt: string; objectPosition: string; src: string }) {
  return (
    <div className="relative h-full min-h-[240px] w-full overflow-hidden rounded-2xl bg-[#e8ebfa]">
      <ParallaxCoverImage alt={alt} fill sizes="(max-width: 1023px) 100vw, 22vw" src={src} style={{ objectPosition }} />
    </div>
  );
}

export function AliuminioDurysAdaptationBento({ sectionId = "pritaikymas-aliuminio" }: { sectionId?: string }) {
  const [spalvos, saugumas, garsas] = TOPICS;

  return (
    <section className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id={sectionId}>
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col gap-4 md:mb-20 lg:mb-24 lg:flex-row lg:items-end lg:justify-between lg:gap-[100px]">
          <h2 className="max-w-[min(100%,44rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Spalvos, saugumas </span>
            <span className="text-[#16216b]">ir papildomi mechanizmai</span>
          </h2>
          <p className="max-w-[min(100%,36rem)] text-base leading-relaxed text-[#16216b]">
            Aliuminio durys gali būti pritaikomos pagal pastato stilių, saugumo poreikį ir naudojimo intensyvumą.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:grid lg:auto-rows-auto lg:grid-cols-4 lg:gap-5">
          <div className="min-h-0 lg:col-start-1 lg:row-start-1">
            <TopicTile {...spalvos} />
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#dde4fc] lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full lg:min-h-[520px]">
            <ParallaxCoverImage
              alt="Aliuminio durys – konstrukcija ir estetika"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 23vw"
              src={BENTO_IMAGES.tall}
              style={{ objectPosition: "48% 40%" }}
            />
          </div>

          <div className="min-h-0 lg:col-start-3 lg:row-start-1">
            <TopicTile {...saugumas} />
          </div>

          <div className="min-h-0 lg:col-start-4 lg:row-start-1">
            <TopicTile {...garsas} />
          </div>

          <div className="h-[260px] min-h-0 lg:col-start-1 lg:row-start-2 lg:h-full lg:min-h-[260px]">
            <ImageTile
              alt="Aliuminio profiliai ir fasadai"
              objectPosition="40% 52%"
              src={BENTO_IMAGES.tile}
            />
          </div>

          <div className="relative flex h-full min-h-[260px] flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-[#263cd0] p-6 md:gap-6 md:p-8 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <div
              className="pointer-events-none absolute bottom-[-140px] right-[-100px] size-[260px] rounded-full border border-dashed border-white/25 md:bottom-[-160px] md:right-[-110px] md:size-[320px]"
              aria-hidden
            />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">{ATPARUMAS.eyebrow}</p>
            <div className="relative flex flex-col gap-4">
              <h3 className="text-xl font-semibold leading-snug tracking-[-0.03em] text-white md:text-2xl">{ATPARUMAS.title}</h3>
              <p className="max-w-[640px] text-[15px] font-normal leading-relaxed text-white/90 md:text-base">{ATPARUMAS.body}</p>
              <Link
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-[13px] text-[14px] font-semibold text-[#263cd0] transition hover:bg-[#f6f7ff] md:text-[15px]"
                href="/kontaktai#uzklausa"
              >
                Gauti pasiūlymą
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
