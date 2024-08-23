'use client'
import { HERO_PAGE_CONTENT } from '@/lib/place-holder-data'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import InvoiceComponent from './ui/InvoiceComponent'
import { Button } from './ui/button'
import FooterComponent from './FooterComponent'
import Features from './Features'

function HeroComponent({ className }: { className?: string }) {
    return (
        <div className={cn(className)}>

            <div className="bg-custom-blue h-[calc(100vh-64px)]
            sm:h-[50vh] py-10 sm:flex items-center justify-evenly " >

                <div className='h-full w-full sm:flex sm:mx-12 lg:mx-48 sm:justify-between sm:space-x-20 xl:space-x-36'>

                    <div className='h-2/5 text-white text-center px-16 sm:px-0 md:w-auto xl:w-3/5 sm:h-full sm:text-left sm:space-y-8  md:flex md:flex-col md:justify-center space-y-2 lg:space-y-4 '>
                        <h1 className=' text-2xl sm:text-2xl md:text-3xl font-semibold '>{HERO_PAGE_CONTENT.HeroContent.mainText}</h1>
                        <p className='text-muted text-sm '>{HERO_PAGE_CONTENT.HeroContent.description}</p>
                        <div className=''><Button className='bg-custom-orange h-10 hover:bg-orange-400 md:min-w-[10vw] md:mt-10'>GET STARTED</Button></div>
                    </div>

                    <div className='sm:px-0  h-1/2 px-16 sm:h-full sm:py-0
                    sm:w-[100%] md:w-[70%] lg:w-[20%] xg:w-[20%]'>
                        <div className='h-full relative '>
                            <Image src="/img/invoice.png" alt='Sample Invoice Image'
                                fill />
                        </div>
                    </div>
                </div>

            </div>




            {/* SECONDARY HERO SECTION */}
            <div className='mx-4 sm:mx-12 lg:mx-48 '>
                <div className='p-6 space-y-2 h-[20vh]' >
                    <h2 className='text text-black text-center font-medium text-xl sm:text-3xl'>{HERO_PAGE_CONTENT.secondaryHeroContent.mainText}</h2>
                    <p className='text-sm text-center'>{HERO_PAGE_CONTENT.secondaryHeroContent.description}</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-custom-blue'>
                    {HERO_PAGE_CONTENT.secondaryCardDetails.map((item, index) => (
                        <motion.div
                            key={index + 5}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='card flex items-center justify-between h-[18vh] space-x-4 border p-2'>

                                <div className='w-1/4 h-[100%] relative p-10 '>
                                    <div><Image src="/img/HeroSecCard-3.jpg" alt='' fill className='rounded-md' /></div>
                                </div>
                                <div className='w-3/4 h-[100%] flex flex-col justify-between'>
                                    <p className='text-lg font-bold'>{item.title}</p>
                                    <p className='text-sm text-gray-500'>{item.description}</p>
                                    <Link href="/" className='flex items-center space-x-2'>
                                        <span className='pb-1'>Learn More </span><Image src="/icons/svgs/dwn-arow.svg" alt='' width={10} height={10} className='-rotate-90' />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


                <div className='my-8'><InvoiceComponent /></div>
                <div className='my-8'><Features /></div>
            </div>
            <div><FooterComponent /></div>
        </div>
    )
}


export default HeroComponent