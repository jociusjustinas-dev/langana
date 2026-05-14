import { HomePageView } from "@/components/home/HomePageView";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata();

export default function Home() {
  return <HomePageView />;
}
