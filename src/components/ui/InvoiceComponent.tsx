"use client"
import Image from "next/image";
import { motion } from 'framer-motion'
export default function InvoiceComponent() {
    return (
        <div className="bg-teal-900 text-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between rounded-lg space-y-8 lg:space-y-0 lg:space-x-16">

            {/* Left side: Image and customization preview */}
            <div className="relative">
                {/* Background image for invoice */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative w-full max-w-xs mx-auto">
                        
                        <Image
                            src="/img/invoice.png" // Add your image path
                            alt="Invoice preview"
                            width={350}
                            height={350}
                            className="rounded-lg"
                        />
                        <div className="absolute top-4 right-4">
                            <Image
                                src="/img/invoice.png" // Add your image path
                                alt="Color Customization"
                                width={60}
                                height={60}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right side: Text and bullet points */}
            <div className="text-left max-w-lg">
                <h1 className="text-3xl font-bold mb-4">
                    Look like a pro. Make your invoices stand out.
                </h1>
                <p className="mb-6">
                    Your invoice is also part of what makes you look like a professional (or not!). EasyInvoice lets you put your best foot forward with its customisable invoices.
                </p>

                <ul className="space-y-4">
                    <li className="flex items-center">
                        <span className="bg-teal-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
                            <svg className="text-white w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                        No watermark ever. Just your logo.
                    </li>
                    <li className="flex items-center">
                        <span className="bg-teal-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
                            <svg className="text-white w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                        Choose colours that match your brand.
                    </li>
                    <li className="flex items-center">
                        <span className="bg-teal-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
                            <svg className="text-white w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                        Pick the template that works best for your type of business.
                    </li>
                    <li className="flex items-center">
                        <span className="bg-teal-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
                            <svg className="text-white w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                        Put your stamp on all your customer-facing documents.
                    </li>
                </ul>

                <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full">
                    Learn more
                </button>
            </div>
        </div>
    );
}
