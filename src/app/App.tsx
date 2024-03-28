import React from "react";
import "./App.css";
import Ravens from "@public/Ravens.webp";

export const App = () => {
    return (
        <React.Fragment>
            <img
                alt="Baltimore Ravens" src={Ravens}  
                height="500px" width="auto"
            />
        </React.Fragment>
    );
};


