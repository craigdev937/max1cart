import React from "react";
import { Cart } from "./Cart";

export const Header = () => {
    const [cartIsVisible, setCartIsVisible] = 
        React.useState(false);

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
                    <h1>Elegant Redux</h1>
                </section>
                <p>
                    <button 
                        onClick={handleOpenCartClick}
                        >Cart (0)
                    </button>
                </p>
            </header>
        </React.Fragment>
    );
};


