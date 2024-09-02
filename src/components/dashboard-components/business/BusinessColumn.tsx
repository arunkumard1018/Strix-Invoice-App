"use client"

import {
    ColumnDef
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Business } from "@/types/CustomTypes"
import { ChevronsUpDown, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import { TableColumnHeader } from "@/components/reusable/table-elements/TableColumnHeader"

// This type is used to define the shape of our data.
// we can use a Zod schema here if we want.




// export type Business = {
//     id: string
//     businessLogo:string
//     BusinessName: String
//     revenue:number
//     totalInvoices:number
// }

export const Businesscolumns: ColumnDef<Business>[] = [

    {
        accessorKey: "businessLogo",
        header: "Logo",
        cell: ({ row }) => (
            <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src={row.getValue("businessLogo")}
                width="64"
            />
        ),
        
    },


    {
        accessorKey: "BusinessName",
        header: ({ column }) => {
            return (
                <div className="flex items-center justify-start cursor-pointer capitalize" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
                    Business Name
                    <ChevronsUpDown className="h-4 w-4" />
                </div>
            )
        },
    cell: ({ row }) => <div className="capitalize">{row.getValue("BusinessName")}</div>,
    },

    {
        accessorKey: "totalInvoices",
        header: "Total Invoices",
        cell: ({ row }) => (
            <div className="capitalize table-cell">{row.getValue("totalInvoices")}</div>
        ),
    },
    
    {
        accessorKey: "revenue",
        header: ({column}) => <TableColumnHeader column={column} title="Revenue" isMobileHidden/>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("revenue"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        },
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const business = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(business.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]