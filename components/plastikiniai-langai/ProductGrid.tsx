import type { ProductCardProps } from "@/components/catalog/ProductCard";
import { ProductCard } from "@/components/catalog/ProductCard";

export type ProductGridProps = {
  sectionEyebrow?: string;
  /** Antraštė po eyebrow (pvz. aliuminio sistemos). */
  sectionTitle?: string;
  /** Paaiškinimas po antrašte. */
  sectionDescription?: string;
  products: ProductCardProps[];
  /** Inkaras hero mygtukui „Ieškoti sprendimų“ ir pan. */
  id?: string;
};

export function ProductGrid({
  sectionEyebrow,
  sectionTitle,
  sectionDescription,
  products,
  id,
}: ProductGridProps) {
  const list = products.slice(0, 12);

  return (
    <section
      className="w-full scroll-mt-28 bg-white px-4 pb-8 pt-12 md:scroll-mt-32 md:px-[70px] md:pb-12 md:pt-16"
      id={id}
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {sectionEyebrow ? (
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.12em] text-[#16216b]">
            {sectionEyebrow}
          </p>
        ) : null}
        {sectionTitle ? (
          <h2 className="mb-4 max-w-3xl text-3xl font-semibold leading-[1.18] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]">
            {sectionTitle}
          </h2>
        ) : null}
        {sectionDescription ? (
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-[#16216b] md:mb-12">
            {sectionDescription}
          </p>
        ) : null}
        <div className="flex flex-col gap-10">
          {list.map((p) => (
            <ProductCard key={p.href} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
