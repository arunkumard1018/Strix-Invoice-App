"use client"

import {
    Column,
    ColumnDef
} from "@tanstack/react-table"

import { ActionsDropDownRow } from "@/components/reusable/table-elements/ActionDropDownRow"
import { TableColumnHeader } from "@/components/reusable/table-elements/TableColumnHeader"
import { Checkbox } from "@/components/ui/checkbox"
import { Product } from "@/types/CustomTypes"
import { Badge } from "@/components/ui/badge"
import { ChevronsUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// we can use a Zod schema here if we want.


export const ProductColumns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "SKU",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="SKU" isMobileHidden className="hidden md:table-cell" NotSortable />
            )
        },
        cell: ({ row }) => <div className="uppercase hidden md:table-cell">{row.getValue("SKU")}</div>,
    },

    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Product Name" isMobileHidden={false} />
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },

    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Price" isMobileHidden={false} />
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount)
            return <div className="font-medium">{formatted}</div>
        },
    },

    {
        accessorKey: "status",
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Status" isMobileHidden className="hidden md:table-cell" NotSortable />
        ),
        cell: ({ row }) => (
            <Badge className="text-xs capitalize hidden md:table-cell" variant="outline">
                {row.getValue("status")}
            </Badge>
        ),
    },

    {
        accessorKey: "GST",
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Status" isMobileHidden className="hidden md:table-cell" NotSortable />
        ),
        cell: ({ row }) => {
            const product = row.original
            return (
                <div className="md:flex hidden space-x-2">
                    <div className="capitalize">{row.getValue("GST")}</div>
                    <div>
                        <Badge className="text-xs capitalize hidden md:table-cell" variant="outline">
                            {product.GST_VALUE}%
                        </Badge>
                    </div>

                </div>
            )
        },
    },

    {
        accessorKey: "discount",
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Discount" isMobileHidden className="hidden md:table-cell" NotSortable />
        ),
        cell: ({ row }) => (
            <div className=" capitalize hidden md:table-cell">
                {row.getValue("discount")}%
            </div>
        ),
    },


    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const product = row.original
            return (
                <ActionsDropDownRow id={product.SKU} name="product" path="/dashboard/products" />
            )
        },
    },
]



