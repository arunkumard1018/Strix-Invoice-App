import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <div className='px-1 md:px-10 lg:px-20'>
      <HeaderComponent/>
      <h1 className={clsx("bg-green-400", "text-red-800 mt-[70vh]")}>Welcome to Strix Invoice</h1>
      <FooterComponent />
    </div>
  );
}
