import { NAV_LINKS } from '@/app/lib/place-holder-data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HeaderComponent() {
    return (
        <div >
            <nav className='flex justify-between  items-center h-16 border-b-2'>
                <div>
                    <Link href="/" className='flex '>
                        <Image src="/icons/svgs/hamburger.svg" alt='' width={40} height={40} className='md:hidden px-2'/>
                        <Image src="/icons/nav-logo.jpg" alt='' width={40} height={40} />
                        <Image src="/icons/nav-logo-text-black.png" alt='' width={100} height={45} />
                    </Link>
                </div>
                <div className='flex space-x-4 items-center justify-between mr-3 md:mr-0'>
                    <div className='hidden md:flex space-x-4'>
                        {NAV_LINKS.map((item) =>(
                            <Link key={item.navLinkUrl} href={item.navLinkUrl}>{item.title}</Link>
                        ))}
                    </div>
                    <button className='px-3 py-1  text-customBg-blue font-bold hover:bg-slate-100'>Log In</button>
                    <button className='px-3 py-1 bg-customBg-blue text-white'>SIGN UP</button>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComponent