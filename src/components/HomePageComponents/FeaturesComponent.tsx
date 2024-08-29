
import { HERO_PAGE_CONTENT } from "@/lib/place-holder-data";
import Image from "next/image";
import { CustomButton, FeatureCard, MotionxInView } from "../ui/Utility";


export function FeaturesImage() {
    return (
        <div className="bg-custom-blue text-white py-12 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between rounded-lg space-y-8 lg:space-y-0 lg:space-x-16">

            {/* Left side: Image and customization preview */}
            <div className="relative">
                {/* Background image  */}
                <MotionxInView>
                    <div className="relative w-full max-w-xs mx-auto">
                        <Image
                            src={HERO_PAGE_CONTENT.FeatureImage.imagePath}
                            alt="Invoice preview"
                            width={350}
                            height={350}
                            priority={true}
                            className="rounded-lg" />

                        {/* <div className="absolute top-4 right-4">
                            <Image
                                src="/img/invoice.png" // Add your image path
                                alt="Color Customization"
                                width={60}
                                height={60}
                                priority
                            />
                        </div> */}
                    </div>
                </MotionxInView>
            </div>

            {/* Right side: Text and bullet points */}
            <div className="md:text-left max-w-lg mb-10 md:mb-0 text-center">
                <h1 className="text-3xl font-bold mb-4">{HERO_PAGE_CONTENT.FeatureImage.title}</h1>
                <p className="mb-6">{HERO_PAGE_CONTENT.FeatureImage.description}</p>

                {HERO_PAGE_CONTENT.FeatureImage.tagliens.map((item, index) => (
                    <div key={index * 5} className="flex mb-5" >
                        <span className="bg-teal-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
                            {/* <img src="/icons/svgs/right-mark.svg" alt="" className="invert" /> */}
                            <Image src="/icons/svgs/right-mark.svg" alt="" width={100} height={100} priority={true} className="invert" />
                        </span>
                        {item}
                    </div>
                ))}

                <CustomButton className="mb-8  bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full">Learn More</CustomButton>
            </div>
        </div>
    );
}

export function Features() {
    return (
        <div>
            <section className="bg-white py-8">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold">{HERO_PAGE_CONTENT.featuresHeading.title}</h1>
                    <p className="text-gray-600 mt-2">{HERO_PAGE_CONTENT.featuresHeading.description}</p>
                    <CustomButton className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 font-medium">
                        Try Strix Invoice for FREE
                    </CustomButton>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {HERO_PAGE_CONTENT.features.map((item, index) => (
                        <FeatureCard
                        key={index*5}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

