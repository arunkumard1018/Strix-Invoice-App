"use client"
import { NAV_LINKS } from '@/lib/place-holder-data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'


function HeaderComponent({ className }: { className?: string }) {
    return (
        <div className={cn(className)}>
            <nav className='px-3 sm:px-8 md:px-12 lg:px-48 flex justify-between bg-white  items-center h-16 border-b-2 fixed z-50 top-0 left-0  w-full'>
                <div className='flex space-x-1 items-center justify-center'>
                    <Link href="/" >
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className='w-[30px] h-[40px] relative sm:hidden'><Image src="/icons/svgs/hamburger.svg" alt='' fill sizes='w-40px h-40px' quality={100} /></div>
                            </DropdownMenuTrigger>
                            <DropDownContnt />
                        </DropdownMenu>
                    </Link>
                    <div className='w-[40px] h-[40px] relative z-10'><Image src="/icons/nav-logo.jpg" alt='' fill sizes='w-40px h-40px' quality={100}  /></div>
                    <div className='hidden md:block w-[100px] h-[45px] relative'><Image src="/icons/nav-logo-text-black.png" alt='' fill sizes='w-100px h-45px' quality={100} /></div>
                    <div className='md:hidden flex flex-col p-0 m-0 justify-center'>
                        <span className='p-0 m-0 leading-snug font-bold'>Strix</span>
                        <span className='p-0 m-0 text-3xl leading-[20px] font-extrabold'>Invoice</span>
                    </div>
                </div>
                <div className='flex space-x-4 items-center justify-between mr-3 md:mr-0'>
                    <div className='hidden md:flex space-x-4'>
                        {NAV_LINKS.map((item, index) => (
                            <Link key={index * 5} href={item.navLinkUrl}>{item.title}</Link>
                        ))}
                    </div>
                    <button className='px-3 py-1  text-custom-blue font-bold hover:bg-slate-100'>Log In</button>
                    <button className='px-3 py-1 bg-custom-blue text-white font-bold'>SIGN UP</button>
                </div>
            </nav>
        </div>
    )
}

function DropDownContnt() {
    return (
        <>
            <DropdownMenuContent className='w-screen mt-1 rounded-none h-screen '>
                <DropdownMenuLabel><Link href='/'>Logout</Link></DropdownMenuLabel>
                <DropdownMenuSeparator />
                {NAV_LINKS.map((items, index) => (
                    <DropdownMenuItem key={index * 5}>{items.title}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </>
    )
}

export default HeaderComponent