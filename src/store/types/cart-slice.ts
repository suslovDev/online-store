import { IProductItem } from "../../components/Product/product-item/IProductItem";

interface ICartItem extends IProductItem {
    quantity: number;
}

export interface ICartState {
    cart: ICartItem[];
    total: number;
}

export interface IActionPlus {
    product: IProductItem;
    quantity: number;
};
export interface IActionMinus {
    id: number | string;
};
