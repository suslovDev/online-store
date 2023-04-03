import { IProductItem } from "../../components/Product/IProductItem";


export interface IOrder {
    type: string;
    order: string;
}

export interface IFilter {
    priceRange: { from: number; to: number; };
    care: string;
    manufacturer: string[];
    products: IProductItem[];

}

export interface IByPrice {
    from: number;
    to: number;
}
export interface IByCare {
    value: string;
}

export interface ProductsState {
    originProducts: IProductItem[];
    products: IProductItem[];
    order: IOrder;
    filter: IFilter;
}