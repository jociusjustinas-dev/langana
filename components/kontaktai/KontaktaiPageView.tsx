"use client";

import { Clock, Gift, Handshake, Mail, MapPin, Phone, Users } from "lucide-react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { OfferRequestForm } from "@/components/kontaktai/OfferRequestForm";
import { googleMapsSearchUrl } from "@/lib/google-maps-url";

/** Telefonas / el. paštas / adresas – viena vizualinė linija kaip visur kontaktų bloke. */
const contactRowLinkClass =
  "group flex items-start gap-3 font-medium text-[#16216b]/90 no-underline transition-colors hover:text-[#263cd0] hover:no-underline";
const contactRowIconClass = "mt-0.5 size-[18px] shrink-0 text-[#263cd0] md:size-5";

const FORM_TRUST_POINTS = [
  { Icon: Clock, label: "Atsakome per 24 val." },
  { Icon: Gift, label: "Nemokamai" },
  { Icon: Handshake, label: "Jokių įsipareigojimų" },
  { Icon: Users, label: "500+ klientų pasirinko Langana" },
] as const;

const formTrustIconClass = "size-4 shrink-0 text-[#263cd0]";

function ContactBlock({
  title,
  address,
  tel,
  telHref,
  email,
}: {
  title: string;
  address: string;
  tel: string;
  telHref: string;
  email: string;
}) {
  return (
    <div className="rounded-2xl bg-white/90 p-5 shadow-[0_2px_16px_rgba(22,33,107,0.06)] ring-1 ring-[rgba(163,170,214,0.35)] md:p-6">
      <h2 className="text-[17px] font-semibold leading-snug tracking-[-0.02em] text-[#16216b] md:text-[18px]">
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-3 text-[14px] leading-relaxed md:text-[15px]">
        <li>
          <a className={contactRowLinkClass} href={telHref}>
            <Phone aria-hidden className={contactRowIconClass} strokeWidth={2} />
            <span>{tel}</span>
          </a>
        </li>
        <li>
          <a className={contactRowLinkClass} href={`mailto:${email}`}>
            <Mail aria-hidden className={contactRowIconClass} strokeWidth={2} />
            <span>{email}</span>
          </a>
        </li>
        <li>
          <a
            aria-label={`Atidaryti adresą Google žemėlapyje: ${address}`}
            className={contactRowLinkClass}
            href={googleMapsSearchUrl(address)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MapPin aria-hidden className={contactRowIconClass} strokeWidth={2} />
            <span>{address}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export function KontaktaiPageView() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <AnimatedSection
        as="section"
        className="langana-flush-under-site-header relative overflow-x-clip border-b border-[rgba(163,170,214,0.2)] bg-[#f6f7ff] px-4 pb-14 pt-0 md:px-[70px] md:pb-[88px]"
      >
        <div className="langana-site-header-clearance mx-auto max-w-[1440px]">
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.026em] text-[#16216b] md:text-[52px] md:leading-[1.08]">
            Kontaktai
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-[#16216b] md:text-[17px]">
            Skambinkite, rašykite arba užpildykite užklausos formą – atsakysime ir paruošime pasiūlymą pagal jūsų
            projektą.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
            <div className="flex flex-col gap-6">
              <ContactBlock
                address="Tilžės g. 83b, Šiauliai"
                email="uablangana@gmail.com"
                tel="+370 606 20 666"
                telHref="tel:+37060620666"
                title="Pardavimo salonas"
              />
              <ContactBlock
                address="Oro uosto g. 11, Šiauliai"
                email="stiklinu@gmail.com"
                tel="+370 607 39 999"
                telHref="tel:+37060739999"
                title="Langų gamyba"
              />
              <ContactBlock
                address="Oro uosto g. 11, Šiauliai"
                email="stiklinu@gmail.com"
                tel="+370 607 39 999"
                telHref="tel:+37060739999"
                title="Aliuminio konstrukcijų projektavimas"
              />
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(22,33,107,0.08)] ring-1 ring-[rgba(163,170,214,0.25)] md:p-8" id="uzklausa">
              <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.03em] text-[#16216b] md:text-[25px]">
                Gaukite pasiūlymą savo projektui
              </h2>
              <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-[#16216b] md:mt-5 md:text-[16px]">
                Parašykite, kokio sprendimo reikia – langų, durų, stiklinimo ar aliuminio konstrukcijų. Peržiūrėsime
                jūsų užklausą, patikslinsime detales ir paruošime tinkamiausią pasiūlymą.
              </p>
              <div className="mt-4 flex flex-col gap-4 md:mt-5">
                <ul className="flex list-none flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium text-[#59799f]">
                  {FORM_TRUST_POINTS.map(({ Icon, label }) => (
                    <li className="flex items-center gap-2" key={label}>
                      <Icon aria-hidden className={formTrustIconClass} strokeWidth={2} />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
                <OfferRequestForm />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
