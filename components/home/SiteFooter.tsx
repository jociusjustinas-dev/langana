import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { FooterBrandWordmark } from "@/components/home/FooterBrandWordmark";
import { PRIVACY_POLICY_HREF } from "@/lib/contact-href";
import { MEGA_MENU } from "@/lib/mega-menu-data";

const productLinks = MEGA_MENU.map((s) => ({ label: s.label, href: s.href }));

const navLinks = [
  { label: "Kodėl Langana?", href: "/kodel-langana" },
  { label: "Produktai ir paslaugos", href: "/katalogas" },
  { label: "Įgyvendinti projektai", href: "/igyvendinti-projektai" },
  { label: "Kontaktai", href: "/kontaktai" },
];

export function SiteFooter() {
  return (
    <footer className="mt-0 w-full bg-[#080808] text-white" id="kontaktai">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        {/* Viršutinė juosta — Figma: px-[70px] py-[24px], justify-between */}
        <div className="flex flex-col gap-8 bg-[#191c1f] px-6 py-8 md:flex-row md:flex-nowrap md:items-center md:justify-between md:gap-6 md:px-[70px] md:py-6">
          <Feature
            description="Efektyvaus montavimo procesas"
            icon={Zap}
            title="Greitas įrengimas vos per 5 dienas"
          />
          <Feature
            description="Aukščiausius kokybės ir saugos standartai"
            icon={BadgeCheck}
            title="Sertifikuota kokybė ir sauga"
          />
          <Feature
            description="Ilgalaikė Jūsų investicijų apsauga"
            icon={Shield}
            title="Visapusiška garantija"
          />
        </div>

        <div className="px-6 pt-16 md:px-[70px] md:pt-[100px]">
          {/* Pagrindinė eilutė: kontaktai | Produktai + Nav | naujienlaiškis — grid, kad NL blokas neperliptų ant kaimyninio stulpelio */}
          <div className="grid min-w-0 w-full max-w-full grid-cols-1 gap-12 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)_minmax(0,280px)] lg:items-start lg:gap-8 xl:grid-cols-[minmax(0,320px)_minmax(0,1fr)_minmax(0,340px)] xl:gap-12 2xl:grid-cols-[minmax(0,320px)_minmax(0,1fr)_minmax(0,400px)] 2xl:gap-16">
            <div className="flex max-w-full min-w-0 flex-col gap-[10px] border-b border-white/[0.12] pb-10 lg:border-b-0 lg:pb-0 lg:pr-8 lg:border-r lg:border-white/[0.14] xl:pr-12 2xl:pr-14">
              <ContactRow
                detail="+370 606 20 666"
                detailHref="tel:+37060620666"
                icon={Phone}
                label="Turite klausimų?"
              />
              <ContactRow
                detail="uablangana@gmail.com"
                detailHref="mailto:uablangana@gmail.com"
                icon={Mail}
                label="Parašykite mums"
              />
              <ContactRow detail="Tilžės g. 83b, Šiauliai" icon={MapPin} label="Adresas" />
              <ContactRow
                detail="Pr–Pt 8:00–17:00, Š 9:00–13:00"
                icon={Clock}
                label="Darbo laikas"
              />
            </div>

            <div className="flex min-w-0 max-w-full flex-col gap-12 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-10 md:gap-x-16 lg:min-w-0 lg:gap-x-12 lg:gap-y-10 xl:gap-x-20">
              <FooterLinkColumn links={productLinks} title="Produktai" />
              <FooterLinkColumn links={navLinks} title="Navigacija" />
            </div>

            <div className="flex min-w-0 w-full max-w-full flex-col gap-5 lg:min-w-0 lg:max-w-none">
              <div className="min-w-0 max-w-full space-y-[5px]">
                <h3 className="text-[25px] font-semibold leading-[normal] tracking-[-0.04em]">
                  Prenumeruokite naujienlaiškį
                </h3>
                <p className="max-w-full text-pretty text-[14px] leading-[1.5] text-[#c2c2c2]">
                  Sezono pasiūlymai, montavimo patarimai ir naujienos — kartą per mėnesį.
                </p>
              </div>
              <form className="flex min-w-0 w-full max-w-full flex-col gap-2 overflow-hidden" noValidate>
                <div className="flex min-w-0 max-w-full flex-col gap-2 rounded-2xl bg-white p-3 shadow-[0_1px_2px_rgba(160,168,166,0.4),0_0_0_1px_#c7cfcd] md:h-[50px] md:flex-row md:items-center md:gap-2 md:rounded-[45px] md:p-1 md:pl-5 md:pr-2">
                  <input
                    aria-label="Jūsų el. paštas"
                    className="min-h-[44px] min-w-0 w-full max-w-full flex-1 bg-transparent text-[14px] leading-[1.5] text-[#191c1f] outline-none placeholder:text-zinc-400 md:min-h-0"
                    name="email"
                    placeholder="Jūsų el. paštas"
                    type="email"
                  />
                  <button
                    className="flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-[#191c1f] px-4 text-[13px] font-semibold text-white transition hover:bg-black md:h-[41px] md:w-auto md:shrink-0 md:whitespace-nowrap"
                    type="submit"
                  >
                    Prenumeruoti
                  </button>
                </div>
                <p className="max-w-full px-[10px] text-[13px] leading-[1.5] text-[#c2c2c2]">
                  Pateikdami užklausą sutinkate su mūsų{" "}
                  <Link className="underline underline-offset-2 hover:text-white" href={PRIVACY_POLICY_HREF}>
                    privatumo politika.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Wordmark: Figma 1324 px 1440 juostoje → po (1440−1324)/2 simetriškai; be neigiamų margin — išvengia išbalansuoto calc */}
        <div className="mt-[100px] w-full px-6 md:mt-[150px] md:px-[58px]">
          <FooterBrandWordmark />
        </div>

        <div className="mt-[50px] flex flex-col gap-6 px-6 py-px pb-12 md:px-[70px] md:pb-[50px]">
          <div className="flex flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex flex-1 justify-start gap-[10px]">
              <a
                aria-label="Facebook"
                className="flex h-[35px] w-[34px] shrink-0 items-center justify-center rounded-[23px] border border-solid border-[#c2c2c2] text-[#c2c2c2] transition hover:border-white hover:text-white"
                href="https://www.facebook.com/uablangana/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookGlyph className="size-[12px]" />
              </a>
            </div>
            <p className="text-center text-[15px] font-semibold text-[#c2c2c2] sm:flex-1">
              © {new Date().getFullYear()} UAB Langana
            </p>
            <div className="flex flex-1 justify-end">
              <Link className="text-[15px] font-semibold text-[#c2c2c2] hover:text-white" href={PRIVACY_POLICY_HREF}>
                Privatumo politika
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex w-full min-w-0 max-w-full flex-col gap-[6px] sm:max-w-[11.5rem]">
      <p className="py-0.5 text-[15px] font-semibold text-white">{title}</p>
      <ul className="flex flex-col">
        {links.map((item) => (
          <li className="py-2" key={item.label}>
            <Link
              className="text-[15px] font-semibold text-[#c2c2c2] transition hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex max-w-md gap-[18px] py-1.5 md:max-w-none md:shrink md:py-[6px]">
      <Icon aria-hidden className="mt-0.5 size-6 shrink-0 text-white" strokeWidth={2} />
      <div className="min-w-0 space-y-[3px]">
        <p className="text-[15px] font-semibold leading-normal text-white">{title}</p>
        <p className="text-[14px] leading-[1.5] text-[#c2c2c2]">{description}</p>
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  detail,
  detailHref,
}: {
  icon: LucideIcon;
  label: string;
  detail: string;
  detailHref?: string;
}) {
  return (
    <div className="flex gap-[18px] py-[6px]">
      <Icon aria-hidden className="mt-0.5 size-6 shrink-0 text-white" strokeWidth={2} />
      <div className="min-w-0 space-y-[3px]">
        <p className="text-[15px] font-semibold text-white">{label}</p>
        {detailHref ? (
          <a
            className="block text-[14px] leading-[1.5] text-[#c2c2c2] transition hover:text-white"
            href={detailHref}
          >
            {detail}
          </a>
        ) : (
          <p className="text-[14px] leading-[1.5] text-[#c2c2c2]">{detail}</p>
        )}
      </div>
    </div>
  );
}

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
