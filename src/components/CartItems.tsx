import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { addToCart, removeFromCart } from "../global/CartSlice";
import { ICart } from "../models/Interfaces";

export const CartItems = () => {
    

    return (
        <React.Fragment>
            <p>No items in cart!</p>
        </React.Fragment>
    );
};


