'use client'
import { HERO_PAGE_CONTENT } from '@/lib/place-holder-data'
import Image from 'next/image'
import { CustomButton, CustomDeatisCard, MotionXStatic, MotionYStatic } from '../ui/Utilitys'

export function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-between bg-custom-blue">
            {/* Hero Text */}
            <MotionXStatic x={-50} duration={0.5}>
                <div className="order-1 md:order-1 md:w-auto text-center md:text-left mb-12 md:mb-0 md:space-y-10">
                    <div>
                        <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">{HERO_PAGE_CONTENT.HeroContent.mainText}</h2>
                        <p className="text-sm text-muted mb-4">{HERO_PAGE_CONTENT.HeroContent.description}</p>
                    </div>
                    <CustomButton className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>GET STARTED NOW</CustomButton>
                </div>
            </MotionXStatic>

            {/* Image */}
            <div className="order-1 md:order-2 md:w-1/2">
                <MotionXStatic x={50} duration={0.5}>
                    <Image
                        src="/img/invoice.png" // Replace with the actual path to your image
                        alt="Invoice Template"
                        width={300}
                        height={300}
                        className="mx-auto"
                        priority={true} />
                </MotionXStatic>
            </div>
        </div>

    )
}

export function SecondaryHeroSection() {
    return (
        <>
            <div className='p-6 space-y-2 h-[20vh]' >
                <h2 className='text text-black text-center font-medium text-xl sm:text-3xl'>{HERO_PAGE_CONTENT.secondaryHeroContent.mainText}</h2>
                <p className='text-sm text-center'>{HERO_PAGE_CONTENT.secondaryHeroContent.description}</p>
            </div>
            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {HERO_PAGE_CONTENT.secondaryCardDetails.map((card, index) => (
                    <MotionYStatic y={100} key={index} duration={0.5}>
                        <CustomDeatisCard icon={card.icon}
                            title={card.title}
                            description={card.description}
                            className='p-6 rounded-lg shadow-none border-b bg-white' />
                    </MotionYStatic>
                ))}
            </div>

        </>
    )
}