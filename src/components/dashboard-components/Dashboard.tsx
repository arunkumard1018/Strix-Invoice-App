import { BarChartComponent } from "./dashboard/ChartComponent"
import { AddInvoiceCard, LatestInvoices, PriceCard } from "./dashboard/DashboardCards"
import { LineChartComponent } from "./dashboard/LineChartComponent"
import { PieChartComponent } from "./dashboard/PieChartComponent"

function Dashboard() {
    return (
        <div className="grid gap-2 p-2 md:p-4">
            <div className=" grid grid-cols-1 gap-2 lg:grid lg:grid-cols-3 lg:gap-4">
                <div className="grid gap-2 lg:gap-0">
                    <AddInvoiceCard />
                    <div className="grid grid-cols-3 gap-2">
                        <PriceCard />
                        <PriceCard />
                        <PriceCard />
                    </div>
                </div>
                <PieChartComponent />
                <BarChartComponent />
            </div>
            <LatestInvoices />
            <LineChartComponent />
        </div>
    )
}

export default Dashboard


