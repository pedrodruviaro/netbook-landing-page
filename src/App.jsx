import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./containers/Hero";
import { WhoWeAre } from "./containers/WhoWeAre";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <WhoWeAre />
        </>
    );
};
