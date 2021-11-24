import React from "react";
import { Header } from "./components/Header";
import { Achievements } from "./containers/Achievements";
import { Community } from "./containers/Community";
import { CTA } from "./containers/CTA";
import { Hero } from "./containers/Hero";
import { Members } from "./containers/Members";
import { WhoWeAre } from "./containers/WhoWeAre";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <WhoWeAre />
            <Achievements />
            <Community />
            <Members />
            <CTA />
        </>
    );
};
