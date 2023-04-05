import { IProductItem } from "../Product/IProductItem";

export interface IHeaderCart {
    items: IProductItem[];
    total: number;
}