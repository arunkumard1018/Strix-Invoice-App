

import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function Dashboard() {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>
            <AddInvoiceComponent/>
        </>
    )
}

export default Dashboard

export function AddInvoiceComponent() {
    return (
        <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription className="text-balance max-w-lg leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless Management and
                    Insightful Analysis.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button>Create New Order</Button>
            </CardFooter>
        </Card>
    )
}
