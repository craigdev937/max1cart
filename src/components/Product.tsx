import React from "react";
import { PRO } from "../models/Interfaces";
import { useAppDispatch } from "../global/Hooks";
import { addToCart } from "../global/CartSlice";

export const Product = ({ 
    id, image, title, price, description 
}: PRO) => {
    const dispatch = useAppDispatch();
    function handleAddToCart() {
        dispatch(addToCart({ id, title, price }));
    };

    return (
        <React.Fragment>
            <article className="product">
                <img src={image} alt={title} />
                <section className="product-content">
                    <div>
                        <h3>{title}</h3>
                        <p className="product-price">${price}</p>
                        <p>{description}</p>
                    </div>
                    <p className="product-actions">
                        <button 
                            onClick={handleAddToCart}
                            >Add to Cart
                        </button>
                    </p>
                </section>
            </article>
        </React.Fragment>
    );
};


