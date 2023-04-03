import { IProductItem } from "../Product/IProductItem";

export interface IPagination {
    products: IProductItem[];
    perPage: number;
    onShowSlice: (prods: any) => void;
}