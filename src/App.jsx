import React from "react";
import { Header } from "./components/Header";
import { Achievements } from "./containers/Achievements";
import { Community } from "./containers/Community";
import { CTA } from "./containers/CTA";
import { Hero } from "./containers/Hero";
import { Members } from "./containers/Members";
import { WhoWeAre } from "./containers/WhoWeAre";
import { News } from "./containers/News";
import { Footer } from "./components/Footer";
import { SocialFooter } from "./components/SocialFooter";

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
            <News />
            <Footer />
            <SocialFooter />
        </>
    );
};
