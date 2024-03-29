import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, ICartState } from "../models/Interfaces";

const initialState: ICartState = {
    items: JSON.parse(
        localStorage.getItem("items")!
    ) || []
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IData>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({
                    ...action.payload, 
                    quantity: 1
                });
                localStorage.setItem(
                    "items", 
                    JSON.stringify(state.items)
                );
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload);
            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
                localStorage.setItem(
                    "items", 
                    JSON.stringify(state.items)
                );
            } else {
                state.items[itemIndex].quantity--;
            }
        },
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export const CartReducer = CartSlice.reducer;


