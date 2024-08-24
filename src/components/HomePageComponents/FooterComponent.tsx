import { cn } from '@/lib/utils'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { HERO_PAGE_CONTENT } from '@/lib/place-holder-data'

function FooterComponent({ className }: { className?: string }) {
  return (
    <footer className={cn("text-white py-8", className)}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h2 className="text-xl font-bold">Strix Invoice</h2>
          <p className="mt-2">Invoicing for small business owners. Focus on running your business, not your accounting.</p>

          {/* <div className="flex mt-4 space-x-2">
            <img src="/path/to/appstore-logo.png" alt="App Store" className="w-24" />
            <img src="/path/to/googleplay-logo.png" alt="Google Play" className="w-24" />
          </div> */}

        </div>

        <div >
          <h3 className="font-bold">Features</h3>
          {HERO_PAGE_CONTENT.footer.features.map((item, index) => (
            <ul className="mt-2 space-y-1" key={index}>
              <li>{item.title}</li>
            </ul>
          ))}
        </div>
        <div>
          <h3 className="font-bold">Features</h3>
          {HERO_PAGE_CONTENT.footer.features.map((item, index) => (
            <ul className="mt-2 space-y-1" key={index}>
              <li>{item.title}</li>
            </ul>
          ))}
        </div>

        <div>
          <h3 className="font-bold">Features</h3>
          {HERO_PAGE_CONTENT.footer.features.map((item, index) => (
            <ul className="mt-2 space-y-1" key={index}>
              <li>{item.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  )
}


export function AccordionCustom({ title, description }: { title: string, description: string }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FooterComponent