import {
    FileText,
    Home,
    LineChart,
    Users,
    Landmark
} from "lucide-react";

export const DASHBOARD_SIDE_BAR_LINKS = [
    {
        title: "Dashboard",
        pathname: "/dashboard",
        icon : Home,
    },
    {
        title: "Invoices",
        pathname: "/dashboard/invoices",
        icon : FileText,
    },
    {
        title: "Customers",
        pathname: "/dashboard/customers",
        icon:Users,
    },
    {
        title: "Organizations",
        pathname: "/dashboard/organizations",
        icon : Landmark,
    },
    {
        title: "Analytics",
        pathname: "/dashboard/analytics",
        icon : LineChart,
    },
];