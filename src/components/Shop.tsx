import React from "react";
import { SHO } from "../models/Interfaces";

export const Shop = ({ children }: SHO) => {
    return (
        <React.Fragment>
            <section id="shop">
                <h2>Elegant Clothing for Everyone</h2>
                <ul id="products">
                    { children }
                </ul>
            </section>
        </React.Fragment>
    );
};


