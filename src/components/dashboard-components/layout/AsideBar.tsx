'use client'
import {
    Bell,
    Package2
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import DashboardLinks from "./DashboardLinks"
import { cn } from "@/lib/utils"
function AsideBar({className}:{className?:string}) {
    return (
        <div className={cn("hidden border-r bg-muted/40 ",className)} >
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span className="">StrixInvoice</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <DashboardLinks/>
            </div>
        </div >
    )
}

export default AsideBar