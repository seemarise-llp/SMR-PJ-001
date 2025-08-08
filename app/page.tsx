import HeroCarousel from "@/components/Slider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the website",
};

export default function Home() {
  return <>
  <HeroCarousel></HeroCarousel>
  </>;
}
