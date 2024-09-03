

export interface FormInputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className?: string;
}

export interface FormSelectProps {
    value: string;
    name: string;
    option: string[];
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    className?: string;
}


// Types for Table Columns

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
    isHidden?:boolean
}


export type Business = {
    id: string
    businessLogo: string
    BusinessName: String
    revenue: number
    totalInvoices: number
}

export type Customers = {
    id: string
    name: String
    city: string
    shippingAddress: string
    billingAddress: string
    GSTIN: string
    phone: number
    email: string
    state: string
    zip: number
}

export type GSTDetail = {
    type: "IGST" | "GST" | "UGST";
    rate: number;
};

export type Product = {
    SKU: string;
    name: string;
    desc: string;
    price: number;
    discount: number;
    GST: string;
    GST_VALUE:number;
    status : string;
};

// (property) DataTableProps<{ SKU: string; name: string; desc: string; price: number; discount: number; GST: { type: string; rate: number; }; }, unknown>.data: {
//     SKU: string;
//     name: string;
//     desc: string;
//     price: number;
//     discount: number;
//     GST: {
//         type: string;
//         rate: number;
//     };
// }[]