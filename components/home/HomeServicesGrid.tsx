import Link from "next/link";

import { HOME_SERVICES } from "@/data/home-page-content";

/** Pagrindinio puslapio paslaugų tinklelis — server-rendered SEO turinys. */
export function HomeServicesGrid() {
  return (
    <section aria-labelledby="home-services-heading" className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-14 md:px-[70px] md:py-[100px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]"
            id="home-services-heading"
          >
            <span className="text-[#263cd0]">Mūsų paslaugos</span>
            <span className="text-[#16216b]"> jūsų namams</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Sprendimai Šiauliuose – nuo plastikinių ir aliuminio langų bei durų iki balkonų ir terasų
            stiklinimo, stumdomų sistemų, žiemos sodų ir aliuminio fasadų.
          </p>
        </div>

        <ul className="grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {HOME_SERVICES.map((service) => (
            <li key={service.href}>
              <Link
                className="flex h-full flex-col rounded-2xl border border-[rgba(163,170,214,0.28)] bg-[#f6f7ff] p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(22,33,107,0.08)] md:p-8"
                href={service.href}
              >
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#16216b] md:text-[25px] md:leading-[30px]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-6 text-[#16216b]">{service.description}</p>
                <span className="mt-5 text-[15px] font-semibold text-[#263cd0]">Sužinokite daugiau →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
