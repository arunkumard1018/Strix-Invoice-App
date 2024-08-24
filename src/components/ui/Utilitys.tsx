'use client'
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';





export function CustomButton({ children, className }:
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
            <img src={icon} alt="" className="mx-auto w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
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