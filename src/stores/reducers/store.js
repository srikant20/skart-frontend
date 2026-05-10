import { configureStore } from "@reduxjs/toolkit";
import Products from "../../components/products/Products";
import { productReducer } from "./ProductReducers";
import { errorReducer } from "./errorReducers";
import { cartReducers } from "./cartReducers";

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
    carts: { cart: cartItems },
};

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducers,
    },
    preloadedState: initialState,
});

export default store;