import { CategoryPageStub, labelFromKebab } from "@/components/CategoryPageStub";

type Props = { params: Promise<{ slug: string }> };

export default async function ZiemosSodaiSubPage({ params }: Props) {
  const { slug } = await params;
  return <CategoryPageStub label={labelFromKebab(slug)} />;
}
