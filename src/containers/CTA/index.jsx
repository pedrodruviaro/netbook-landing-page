import React from "react";
import { SectionHeader } from "../imports";
import { ButtonStores, Container, Wrapper } from "./styles.jsx";

export const CTA = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <SectionHeader
                        span="Get Our Aplication"
                        title="You Can Easily Find This App…!"
                        text="I say chapter that’s suing lavatory chip shop fish off his smashing boot are you taking the piss posh loo brilliant."
                    />
                    <div>
                        <ButtonStores>
                            <img src="/assets/icons/apple.svg" alt="" />
                            <span>Download on the</span>
                            <h6>App Store</h6>
                        </ButtonStores>

                        <ButtonStores dark>
                            <img src="/assets/icons/google-play.svg" alt="" />
                            <span>Download on the</span>
                            <h6>Play Store</h6>
                        </ButtonStores>
                    </div>
                </div>

                <div>
                    <img src="/assets/images/mobile.png" alt="" />
                </div>
            </Container>
        </Wrapper>
    );
};
