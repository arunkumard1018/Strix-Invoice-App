import { Features, FeaturesImage } from "@/components/HomePageComponents/FeaturesComponent";
import FooterComponent from "@/components/HomePageComponents/FooterComponent";
import HeaderComponent from "@/components/HomePageComponents/HeaderComponent";
import { HeroSection, SecondaryHeroSection } from "@/components/HomePageComponents/HeroComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent className="px-3 sm:px-8 md:px-12 lg:px-48" />
      <div className="bg-custom-blue mx-0 text-white mt-[64px] px-3 sm:px-8 md:px-12 lg:px-48 py-8"> <HeroSection /></div>

      <div className="mx-3 sm:mx-8 md:mx-12 lg:mx-48 ">
        <SecondaryHeroSection />
        <FeaturesImage />
        <Features />
      </div>
      <FooterComponent className="px-4 sm:px-8 md:px-12 lg:px-48 bg-custom-blue" />
    </>
  );
}
