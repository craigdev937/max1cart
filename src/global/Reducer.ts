import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./CartSlice";

export const Reducer = configureStore({
    reducer: {
        cart: CartReducer
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


