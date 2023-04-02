import { IProductItem } from "../../components/IProductItem";

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
