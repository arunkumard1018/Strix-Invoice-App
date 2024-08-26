'use client'
import {
    CircleUser,
    Menu,
    Package2,
    Search
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import DashboardLinks from "./DashboardLinks"
import { useState } from "react"
function NavBar() {

    const [sheetOpen, setsheetOpen] = useState(false)
    function closeSheet(){
        setsheetOpen(!sheetOpen);
    }

    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet open={sheetOpen} onOpenChange={setsheetOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link href="#"
                            className="flex items-center gap-2 text-lg font-semibold">
                            <SheetTitle className="flex items-center space-x-3">
                                <Package2 className="h-6 w-6" />
                                <span className="" >StrixInvoice</span>
                            </SheetTitle>
                        </Link>
                        <SheetDescription />
                        <DashboardLinks navClassName="px-0" LinkClassName="px-2" onLinkClick={closeSheet}/>
                    </nav>
                </SheetContent>
            </Sheet>

            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="#"><DropdownMenuItem>Profile</DropdownMenuItem></Link>
                    <Link href="#"><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                    <Link href="#"><DropdownMenuItem>Support</DropdownMenuItem></Link>
                    <DropdownMenuSeparator />
                    <Link href="/"><DropdownMenuItem>Logout</DropdownMenuItem></Link>
                </DropdownMenuContent>
            </DropdownMenu>


        </header>
    )
}

export default NavBar