import React from "react";
import { Header } from "../components/Header";
import { Shop } from "../components/Shop";
import { Product } from "../components/Product";
import { dBase } from "../data/dBase";

export const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <Shop>
                {dBase.map((product) => (
                    <li key={product.id}>
                        <Product {...product} />
                    </li>
                ))}
            </Shop>
        </React.Fragment>
    );
};


