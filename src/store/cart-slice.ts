import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActionMinus, IActionPlus, ICartState } from "./types/cart-slice";

const initialState: ICartState = {
    cart: [],
    total: 0,
}
const productsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        plusToCart(state, action: PayloadAction<IActionPlus>) {
            const { product, quantity } = action.payload;
            const foundProduct = state.cart.find(prod => prod.barcode === product.barcode);
            if (foundProduct) {
                foundProduct.quantity += quantity;
            } else {
                const prodToCart = { ...product, quantity: quantity };
                state.cart.push(prodToCart);
            }
            state.total += quantity * product.price;
        },
        minusFromCart(state, action: PayloadAction<IActionMinus>) {
            const foundProduct = state.cart.find(prod => prod.barcode === action.payload.id);
            if (!foundProduct) return;
            foundProduct.quantity--;
            state.total -= foundProduct.price;
            if (foundProduct.quantity === 0) {
                state.cart = state.cart.filter(prod => prod.barcode !== action.payload.id);
            }
        },
        removeFromCart(state, action: PayloadAction<IActionMinus>) {
            const foundProduct = state.cart.find(prod => prod.barcode === action.payload.id);
            if (!foundProduct) return;
            state.cart = state.cart.filter(prod => prod.barcode !== action.payload.id);
            state.total -= foundProduct.price * foundProduct.quantity;
        },
        clearCart(state) {
            state.cart = [];
            state.total = 0;
        }
    }
});

export const { plusToCart, minusFromCart, removeFromCart, clearCart } = productsSlice.actions;
export default productsSlice.reducer;