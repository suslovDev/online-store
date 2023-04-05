import { IProductItem } from "../../components/Product/IProductItem";

export interface IOrder {
    type: string;
    order: string;
}

export interface IFilter {
    priceRange: { from: number; to: number; };
    substr: string;
    care: string;
    manufacturer: string[];
}

export interface ProductsState {
    originProducts: IProductItem[];
    products: IProductItem[];
    order: IOrder;
    filter: IFilter;
}