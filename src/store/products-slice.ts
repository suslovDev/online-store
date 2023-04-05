import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, IOrder, ProductsState } from "./types/product-slice";
import { stat } from "fs";

const initialState: ProductsState = {
    products: [],
    originProducts: [],
    order: {
        type: "name",
        order: "increase",
    },
    filter: {
        priceRange: { from: 0, to: 0 },
        substr: "",
        care: "",
        manufacturer: [],
    }
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        initProds(state, action) {
            state.originProducts = action.payload;
            state.products = action.payload;
        },
        addProduct(state, action) {
            state.originProducts.push(action.payload)
        },
        replaceProduct(state, action) {
            state.originProducts = state.originProducts.map(prod => prod.id === action.payload.id ? action.payload.replacement : prod);
        },
        removeProduct(state, action) {
            state.originProducts = state.originProducts.filter(prod => prod.barcode !== action.payload);
            console.log(`Удалил ${action.payload} элемент!`)
        },
        sortProds(state) {
            let { order } = state.order;
            let { products } = state;
            switch (state.order.type) {
                case "name":
                    order === "increase" ?
                        products.sort((a, b) => a.title < b.title ? -1 : 1) :
                        products.sort((a, b) => a.title < b.title ? 1 : -1);
                    break;
                case "price":
                    order === "increase" ?
                        products.sort((a, b) => a.price - b.price) :
                        products.sort((a, b) => b.price - a.price);
                    break;
            }
        },
        setOrderType(state, action: PayloadAction<IOrder>) {
            state.order.type = action.payload.type;
        },
        setOrder(state, action: PayloadAction<IOrder>) {
            state.order.order = action.payload.order;
        },
        setFilter(state, action: PayloadAction<IFilter>) {
            state.filter = action.payload;
            state.products = state.originProducts;
        },
        filterProducts(state, action: PayloadAction<IFilter>) {
            if (state.filter.care) {
                state.products = state.products.filter(prod => prod.care.includes(state.filter.care))
            }

            if (state.filter.priceRange.to) {
                state.products = state.products.filter(prod => (
                    prod.price >= state.filter.priceRange.from &&
                    prod.price <= state.filter.priceRange.to)
                )
            }
            if (state.filter.substr) {
                state.products = state.products.filter(prod => prod.manufacturer.toLocaleLowerCase().includes(state.filter.substr.toLocaleLowerCase()));
            }
            if (state.filter.manufacturer.length) {
                state.products = state.products.filter(
                    prod => state.filter.manufacturer.includes(prod.manufacturer))
            }

        },
    }
});

export const { initProds,
    addProduct,
    replaceProduct,
    removeProduct,
    sortProds,
    setOrderType,
    setOrder,
    setFilter,
    filterProducts
} = productsSlice.actions;

export default productsSlice.reducer;