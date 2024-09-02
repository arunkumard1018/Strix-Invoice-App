import { BarChartComponent } from "@/components/dashboard-components/dashboard/ChartComponent"
import { AddInvoiceCard, LatestInvoices, PriceCard } from "@/components/dashboard-components/dashboard/DashboardCards"
import { LineChartComponent } from "@/components/dashboard-components/dashboard/LineChartComponent"
import { PieChartComponent } from "@/components/dashboard-components/dashboard/PieChartComponent"

function page() {
  return (
    <div className="grid gap-4 p-2 sm:p-4 -z-50">
      <div className=" grid gap-4 grid-cols-1 lg:grid lg:grid-cols-3">
        <div className="grid gap-4">
          <AddInvoiceCard />
          <div className="grid gap-4 grid-cols-3">
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

export default page
