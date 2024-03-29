import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { addToCart, removeFromCart } from "../global/CartSlice";
import type { ICart } from "../models/Interfaces";

export const CartItems = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();

    const totalPrice = cartItems.reduce(
        (val, item) => 
            val + item.price * item.quantity, 
            0
    );

    const formattedTotalPrice = totalPrice.toFixed(2);

    function handleAdd(item: ICart) {
        dispatch(addToCart(item));
    };

    function handleRemove(id: string) {
        dispatch(removeFromCart(id));
    };

    return (
        <React.Fragment>
            <main id="cart">
                <ul className="cart-items">
                    {cartItems.length === 0 && <p>No items in cart!</p>}
                    {cartItems.map((item) => {
                        const formattedPrice = `${item.price.toFixed(2)}`;

                        return (
                            <li key={item.id}>
                                <section>
                                    <span>{item.title}</span>
                                    <span>({formattedPrice})</span>
                                </section>
                                <section className="cart-item-actions">
                                    <button 
                                        onClick={() => handleRemove(item.id)}
                                        >-
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button 
                                        onClick={() => handleAdd(item)}
                                        >+
                                    </button>
                                </section>
                            </li>
                        );
                    })}
                </ul>
                

                <p id="cart-total-price">
                    Cart Total: <strong>${formattedTotalPrice}</strong>
                </p>
            </main>
        </React.Fragment>
    );
};


