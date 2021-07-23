import { Produit } from './Produit'

export interface Page {
	page: number;
	page_count: number;
	page_size: number;
	products: Produit[];
}
