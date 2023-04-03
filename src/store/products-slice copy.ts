import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../components/Product/IProductItem";
interface IOrder {
    type: string;
    order: string;
}
interface IPriceRange {
    from: string | number;
    to: string | number;
}
interface ICare {
    care: string;
}
interface IFilter {
    priceRange: { from: number; to: number };
    care: string;
    manufacturer: string;
}

interface ProductsState {
    originProducts: IProductItem[];
    products: IProductItem[];
    order: IOrder;
    filter: IFilter;
}

const initialState: ProductsState = {
    products: [],
    originProducts: [],
    order: {
        type: "name",
        order: "increase",
    },
    filter: {
        priceRange: { from: 0, to: 10000 },
        care: "",
        manufacturer: "",
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
        /*         filterProducts(state, action: PayloadAction<{ filter: string, value: any }>) {
                    if (action.payload.filter === "care") {
                        state.filter.care = action.payload.value;
                    }
                    if (action.payload.filter === "price") {
                        state.filter.priceRanfe.from = action.payload.value.from;
                        state.filter.priceRanfe.to = action.payload.value.to;
                    }
                    if (action.payload.filter === "manufacturer") {
                        state.filter.manufacturer = action.payload.value;
                    }
                    state.products = state.originProducts.filter(prod => {
                        return prod.price >= state.filter.priceRanfe.from && prod.price <= state.filter.priceRanfe.to;
                    });
                    state.products = state.products.filter(prod => { return prod.care.includes(state.filter.care) });
                    if (state.filter.manufacturer) {
                        state.products = state.products.filter(prod => { return prod.manufacturer === state.filter.manufacturer })
                    }
                } */
        filterByPrace(state, action: PayloadAction<any>) {
            state.filter.priceRange.from = action.payload.value.from;
            state.filter.priceRange.to = action.payload.value.to;

            state.products = state.originProducts.filter(prod => {
                return prod.price >= state.filter.priceRange.from && prod.price <= state.filter.priceRange.to;
            });
            state.products = state.products.filter(prod => { return prod.manufacturer === state.filter.manufacturer });
            state.products = state.products.filter(prod => { return prod.care.includes(state.filter.care) });
        },
        filterByCare(state, action: PayloadAction<any>) {
            state.filter.care = action.payload.value;

            state.products = state.originProducts.filter(prod => {
                return prod.price >= state.filter.priceRange.from && prod.price <= state.filter.priceRange.to;
            });
            state.products = state.products.filter(prod => { return prod.manufacturer === state.filter.manufacturer });
            state.products = state.products.filter(prod => { return prod.care.includes(state.filter.care) });
        },
        filterByManufact(state, action: PayloadAction<any>) {
            state.filter.manufacturer = action.payload.value;

            state.products = state.originProducts.filter(prod => {
                return prod.price >= state.filter.priceRange.from && prod.price <= state.filter.priceRange.to;
            });
            state.products = state.products.filter(prod => { return prod.manufacturer === state.filter.manufacturer });
            state.products = state.products.filter(prod => { return prod.care.includes(state.filter.care) });
        },
    }
});

export const { initProds, sortProds, setOrderType, setOrder, filterByCare, filterByManufact, filterByPrace } = productsSlice.actions;
export default productsSlice.reducer;



