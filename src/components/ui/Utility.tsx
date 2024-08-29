'use client'
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { INDIAN_STATES } from '@/lib/data';
import Image from 'next/image';





function CustomButton({ children, className }:
    { children: ReactNode, className?: string }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <div className={cn("text-black p-2 bg-gray-400 rounded-sm", className)}>{children}</div>
        </motion.button>
    )

}


export function CustomDeatisCard({ icon, title, description, className }:
    { icon: string, title: string, description: string, className?: string }) {
    return (
        <div>
            <div className={cn("bg-gray-100 p-6 rounded-lg shadow-md", className)} >
                <div className='flex space-x-4 items-center'>
                    <div className="text-4xl mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}


export function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Image src={icon} alt="" className="mx-auto w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
}


export const AccordianItems = ({ item, className }: { item: { title: string, link: string }[], className: string }) => {
    return (
        <ul className=''>
            {item.map((data, index) => (
                <li key={index * 5} className={cn(className)}>{data.title}</li>
            ))}
        </ul>
    )
}


/**
 * 
 * @returns UpgradeCard Component
 */

export function UpgradeCard() {
    return (
        <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                        Unlock all features and get unlimited access to our support
                        team.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                    <Button size="sm" className="w-full">
                        Upgrade
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

function FormInput({
    type,
    name,
    value,
    onChange,
    placeholder,
    className = '',
}: FormInputProps) {

    return (
        <div className="mb-4">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 ${className}`}
            />
        </div>
    );
}


function FormSelect({
    value,
    option,
    onChange,
    name,
    className = '',
}: FormSelectProps) {

    return (
        <div className="mb-4">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={cn("w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300", className)}
            >
                {option && option.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}

            </select>
        </div>
    );
}


function Checkbox({ checked, handleChange, name }: { checked: boolean, name: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input
            checked={checked}
            onChange={handleChange}
            type="checkbox"
            name={name}
            id="remember"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
    );
}



// Motion Animations


export function MotionYStatic({ children, delay = 0.5, y, duration = 1 }:
    { children: ReactNode, delay?: number, y: number, duration?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: delay * 0.1 }}> {children} </motion.div>
    )

}

export function MotionXStatic({ children, x, duration = 1 }:
    { children: ReactNode, x: number, duration?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: x }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: duration }}> {children} </motion.div>
    )
}
export function MotionxInView({ children, x = -100, duration = 0.5 }:
    { children: ReactNode, x?: number, duration?: number }) {
    return (
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: x }}
            transition={{ duration: duration }}

        >{children}</motion.div>
    )
}


function CustomLogo() {
    return (
        <div className="flex space-x-1 items-center justify-center">
            <div className='w-[40px] h-[40px] relative z-10'><Image src="/icons/nav-logo.jpg" alt='' fill sizes='w-40px h-40px' quality={100} /></div>
            <div className='hidden md:block w-[100px] h-[45px] relative'><Image src="/icons/nav-logo-text-black.png" alt='' fill sizes='w-100px h-45px' quality={100} /></div>
            <div className='md:hidden flex flex-col p-0 m-0 justify-center text-left'>
                <span className='p-0 m-0 leading-snug font-bold'>Strix</span>
                <span className='p-0 m-0 text-3xl leading-[20px] font-extrabold'>Invoice</span>
            </div>
        </div>
    )
}







export { FormInput, FormSelect, Checkbox, CustomButton, CustomLogo }