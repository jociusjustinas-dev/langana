import { Mail, Phone } from "lucide-react";

import { HOME_FAQ_ITEMS } from "@/data/home-page-content";

/** DUK pagrindiniam puslapiui — server-rendered (native `details` + atsakymai HTML'e). */
export function HomeFaqSection() {
  return (
    <section
      aria-labelledby="home-faq-heading"
      className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]"
      id="duk-pagrindinis"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:gap-12 lg:flex-row lg:gap-[100px]">
        <div className="flex shrink-0 flex-col gap-14 lg:max-w-md">
          <h2
            className="text-4xl font-semibold leading-[1.2] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]"
            id="home-faq-heading"
          >
            <span className="text-[#263cd0]">Dažniausi</span>
            <span className="block text-[#16216b]">klausimai</span>
          </h2>
          <div className="hidden flex-col gap-2.5 md:flex">
            <div className="flex gap-[18px] py-1.5">
              <Phone aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold text-[#16216b]">Turite klausimų?</p>
                <a
                  className="text-sm leading-normal text-[#263cd0] underline-offset-2 hover:underline"
                  href="tel:+37060620666"
                >
                  +370 606 20 666
                </a>
              </div>
            </div>
            <div className="flex gap-[18px] py-1.5">
              <Mail aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold text-[#16216b]">Parašykite mums</p>
                <a
                  className="text-sm leading-normal text-[#263cd0] underline-offset-2 hover:underline"
                  href="mailto:uablangana@gmail.com"
                >
                  uablangana@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-4 md:space-y-6">
          {HOME_FAQ_ITEMS.map((item, i) => (
            <details
              className="group rounded-[24px] bg-[#f2f3f7] px-5 open:text-[#263cd0] md:px-6 [&_summary::-webkit-details-marker]:hidden"
              key={item.question}
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left marker:content-none md:py-7">
                <span className="flex-1 text-[16px] font-semibold leading-[1.35] tracking-[-0.015em] text-[#16216b] group-open:text-[#263cd0] md:text-[20px]">
                  {item.question}
                </span>
              </summary>
              <p className="max-w-[980px] pb-7 pr-2 text-[14px] leading-[1.55] text-[#2a2f4d] md:pb-8 md:pr-6 md:text-[15px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
