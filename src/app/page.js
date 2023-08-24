import FeaturedProducts from "@/components/sections/featured/FeaturedProducts";
import HeroSection from "@/components/sections/heroSection/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProducts/>
    </div>
  );
}
