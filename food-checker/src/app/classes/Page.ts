import { Produit } from "./Produit";

export interface Page {
    page: number
    page_count: number
    page_size: number
    products: Produit[]
}

export interface PageDetail {
    code:string
    product: Produit
    status: number
    status_verbose: string
}
