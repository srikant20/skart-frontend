import { configureStore } from "@reduxjs/toolkit";
import Products from "../../components/products/Products";
import { productReducer } from "./ProductReducers";
import { errorReducer } from "./errorReducers";

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
    },
    preloadedState: {},
});

export default store;