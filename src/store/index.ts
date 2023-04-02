import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './products-slice';
import cartReducer from './cart-slice';
import uiReducer from './ui-slice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        ui: uiReducer,
    }
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
