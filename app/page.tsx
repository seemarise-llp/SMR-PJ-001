import ContactSection from "@/components/Contactform";
import HeroCarousel from "@/components/Slider";
import CallToAction from "@/components/CalltoAction";import FeaturedProducts from "@/components/FeaturedProduct";
import AboutSection from "@/components/About";
import CoreServices from "@/components/Serviceslist";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the website",
};
export const products = [
    {
      id: "1",
      title: "Precision Power Drill XP–500",
      image: "https://images.pexels.com/photos/4487364/pexels-photo-4487364.jpeg",
      price: 299.99,
      rating: 4,
      reviews: 24,
      badge: "BEST SELLER",
    },
    {
      id: "2",
      title: "Advanced Circuit Protection System",
      image: "https://images.pexels.com/photos/4567378/pexels-photo-4567378.jpeg",
      price: 549.99,
      rating: 5,
      reviews: 18,
    },
    {
      id: "3",
      title: "Laser Cutting System Pro–X",
      image: "https://images.pexels.com/photos/31850029/pexels-photo-31850029.jpeg",
      price: 1299.99,
      rating: 4,
      reviews: 12,
      badge: "NEW",
    },
    {
      id: "4",
      title: "Safety Equipment Kit Premium",
      image: "https://images.pexels.com/photos/12234109/pexels-photo-12234109.jpeg",
      price: 399.99,
      rating: 4,
      reviews: 32,
    },
    {
      id: "5",
      title: "Safety Equipment Kit Premium",
      image: "https://images.pexels.com/photos/8377802/pexels-photo-8377802.jpeg",
      price: 399.99,
      rating: 4,
      reviews: 32,
    },
  ];
export default function Home() {
  return <>
    {/* <JKSkyPreloader></JKSkyPreloader> */}
    <HeroCarousel></HeroCarousel>
    <FeaturedProducts products={products}></FeaturedProducts>
    <AboutSection></AboutSection>
    <CoreServices></CoreServices>
    <CallToAction></CallToAction>
    <ContactSection></ContactSection>
  </>;
}
