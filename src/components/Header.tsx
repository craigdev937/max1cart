import React from "react";
import Logo from "@public/logo.png";
import { Cart } from "./Cart";
import { useAppSelector } from "../global/Hooks";

export const Header = () => {
    const [cartIsVisible, setCartIsVisible] = 
        React.useState(false);
    const cartQuantity = useAppSelector(
        (state) => state.cart.items.reduce(
            (val, item) => val + item.quantity, 0)
    );

    function handleOpenCartClick() {
        setCartIsVisible(true);
    };

    function handleCloseCartClick() {
        setCartIsVisible(false);
    };

    return (
        <React.Fragment>
            {
                cartIsVisible && 
                <Cart 
                    onClose={handleCloseCartClick} 
                />
            }
            <header id="main-header">
                <section id="main-title">
                    <img src={Logo} alt="Logo" />
                    <h1>Elegant Redux</h1>
                </section>
                <p>
                    <button 
                        onClick={handleOpenCartClick}
                        >Cart ({cartQuantity})
                    </button>
                </p>
            </header>
        </React.Fragment>
    );
};


