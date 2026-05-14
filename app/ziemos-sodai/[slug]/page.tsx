import type { Metadata } from "next";

import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = labelFromKebab(slug);
  return pageMeta({
    title: `${label} – žiemos sodai Šiauliuose`,
    description: `${label} – žiemos sodai ir aliuminio konstrukcijos Šiauliuose. Individualus projektas, montavimas, konsultacija nemokamai.`.slice(
      0,
      160,
    ),
    path: `/ziemos-sodai/${slug}`,
    noindex: true,
  });
}

export default async function ZiemosSodaiSubPage({ params }: Props) {
  const { slug } = await params;
  return <CategoryPageStub label={labelFromKebab(slug)} />;
}
