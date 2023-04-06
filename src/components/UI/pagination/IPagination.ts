import { IProductItem } from "../../Product/product-item/IProductItem";

export interface IPagination {
    products: IProductItem[];
    perPage: number;
    onShowSlice: (prods: any) => void;
}