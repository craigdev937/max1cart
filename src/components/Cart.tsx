import React from "react";
import ReactDOM from "react-dom";
import { CartItems } from "./CartItems";

type CAR = {
    onClose: () => void;
};

export const Cart = ({ onClose }: CAR) => {
    return ReactDOM.createPortal (
        <React.Fragment>
            <section className="cart-backdrop">
                <dialog id="cart-modal" open>
                    <h2>Your Cart</h2>
                    <CartItems />
                    <p id="cart-actions">
                        <button onClick={onClose}>
                            Close
                        </button>
                    </p>
                </dialog>
            </section>
        </React.Fragment>,
        document.getElementById("modal")!
    );
};


