import { IProductItem } from "../../Product/product-item/IProductItem";

export interface IHeaderCart {
    items: IProductItem[];
    total: number;
}