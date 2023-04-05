/* import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IByCare, IByPrice, IOrder, ProductsState } from "./types/product-slice";



const initialState: ProductsState = {
    products: [],
    originProducts: [],
    order: {
        type: "name",
        order: "increase",
    },
    filter: {
        priceRange: { from: 0, to: 0 },
        care: "",
        manufacturer: [],
        products: [],

    }
}

const predicate = (arr: any[], str: string) => {
    for (let i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) return true;
    }
    return false;
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        initProds(state, action) {
            state.originProducts = action.payload;
            state.products = action.payload;
            state.filter.products = action.payload;
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
        filterByPrace(state, action: PayloadAction<IByPrice>) {
            state.filter.priceRange.from = action.payload.from;
            state.filter.priceRange.to = action.payload.to;

            if (state.filter.priceRange.to) {
                state.products = state.originProducts.filter(prod => (
                    prod.price >= state.filter.priceRange.from &&
                    prod.price <= state.filter.priceRange.to))
            } else {
                state.products = state.originProducts
            }
            if (state.filter.care) {
                state.products = state.products.filter(prod => (
                    prod.care.includes(state.filter.care)))
            }
            state.filter.products = state.products;
            if (state.filter.manufacturer.length) {
                state.products = state.products.filter(
                    prod => state.filter.manufacturer.includes(prod.manufacturer))
            }
        },
        filterByCare(state, action: PayloadAction<IByCare>) {
            state.filter.care = action.payload.value

            if (state.filter.care) {
                state.products = state.originProducts.filter(prod => prod.care.includes(state.filter.care))
            } else {
                state.products = state.originProducts
            }
            if (state.filter.priceRange.to) {
                state.products = state.products.filter(prod => (
                    prod.price >= state.filter.priceRange.from &&
                    prod.price <= state.filter.priceRange.to)
                )
            }

            state.filter.products = state.products;

            if (state.filter.manufacturer.length) {
                state.products = state.products.filter(
                    prod => state.filter.manufacturer.includes(prod.manufacturer))
            }
        },
        filterByManufact(state, action: PayloadAction<string>) {
            if (state.filter.manufacturer.includes(action.payload) == false) {
                state.filter.manufacturer.push(action.payload)
            } else {
                state.filter.manufacturer = state.filter.manufacturer.filter(item => item !== action.payload)
            }
            if (state.filter.manufacturer.length && action.payload) {
                state.products = state.originProducts.filter(
                    prod => predicate(state.filter.manufacturer, prod.manufacturer))
            } else {
                state.products = state.originProducts
            }
            if (state.filter.priceRange.to) {
                state.products = state.products.filter(prod => (
                    prod.price >= state.filter.priceRange.from &&
                    prod.price <= state.filter.priceRange.to)
                )
            }
            if (state.filter.care) {
                state.products = state.products.filter(prod => prod.care.includes(state.filter.care)
                )
            }
        }
    }
});

export const { initProds,
    addProduct,
    replaceProduct,
    removeProduct,
    sortProds,
    setOrderType,
    setOrder, filterByCare,
    filterByManufact,
    filterByPrace } = productsSlice.actions;

export default productsSlice.reducer;



 */


























import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IByCare, IByPrice, IOrder, ProductsState } from "./types/product-slice";



const initialState: ProductsState = {
    products: [],
    originProducts: [],
    order: {
        type: "name",
        order: "increase",
    },
    filter: {
        priceRange: { from: 0, to: 0 },
        care: "",
        manufacturer: [],
        products: [],

    }
}

const predicate = (arr: any[], str: string) => {
    for (let i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) return true;
    }
    return false;
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        initProds(state, action) {
            state.originProducts = action.payload;
            state.products = action.payload;
            state.filter.products = action.payload;
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
        filterByPrace(state, action: PayloadAction<IByPrice>) {
            state.filter.priceRange.from = action.payload.from;
            state.filter.priceRange.to = action.payload.to;

            if (state.filter.priceRange.to) {
                state.products = state.originProducts.filter(prod => (
                    prod.price >= state.filter.priceRange.from &&
                    prod.price <= state.filter.priceRange.to))
            } else {
                state.products = state.originProducts
            }
            if (state.filter.care) {
                state.products = state.products.filter(prod => (
                    prod.care.includes(state.filter.care)))
            }
            state.filter.products = state.products;
            if (state.filter.manufacturer.length) {
                state.products = state.products.filter(
                    prod => state.filter.manufacturer.includes(prod.manufacturer))
            }
        },
        filterByCare(state, action: PayloadAction<IByCare>) {
            state.filter.care = action.payload.value

            if (state.filter.care) {
                state.products = state.originProducts.filter(prod => prod.care.includes(state.filter.care))
            } else {
                state.products = state.originProducts
            }
            if (state.filter.priceRange.to) {
                state.products = state.products.filter(prod => (
                    prod.price >= state.filter.priceRange.from &&
                    prod.price <= state.filter.priceRange.to)
                )
            }

            state.filter.products = state.products;

            if (state.filter.manufacturer.length) {
                state.products = state.products.filter(
                    prod => state.filter.manufacturer.includes(prod.manufacturer))
            }
        },
        filterByManufact(state, action: PayloadAction<string>) {
            if (state.filter.manufacturer.includes(action.payload) == false) {
                state.filter.manufacturer.push(action.payload)
            } else {
                state.filter.manufacturer = state.filter.manufacturer.filter(item => item !== action.payload)
            }
            if (state.filter.manufacturer.length && action.payload) {
                state.products = state.originProducts.filter(
                    prod => predicate(state.filter.manufacturer, prod.manufacturer))
            } else {
                state.products = state.originProducts
            }
            if (state.filter.priceRange.to) {
                state.products = state.products.filter(prod => (
                    prod.price >= state.filter.priceRange.from &&
                    prod.price <= state.filter.priceRange.to)
                )
            }
            if (state.filter.care) {
                state.products = state.products.filter(prod => prod.care.includes(state.filter.care)
                )
            }
        }
    }
});

export const { initProds,
    addProduct,
    replaceProduct,
    removeProduct,
    sortProds,
    setOrderType,
    setOrder, filterByCare,
    filterByManufact,
    filterByPrace } = productsSlice.actions;

export default productsSlice.reducer;



