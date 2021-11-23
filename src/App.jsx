import React from "react";
import { Header } from "./components/Header";
import { Achievements } from "./containers/Achievements";
import { Hero } from "./containers/Hero";
import { WhoWeAre } from "./containers/WhoWeAre";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <WhoWeAre />
            <Achievements />
        </>
    );
};
