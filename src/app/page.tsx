import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import HeroComponent from "@/components/HeroComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <HeaderComponent className=" "/>
      <HeroComponent className="mt-[64px] bg-white z-50" />
{/*       
      <h1 className="text-blue-500">Welcome to Strix Invoice</h1>
      <FooterComponent /> */}
    </div>
  );
}
