import React from "react";
import { Container, Wrapper } from "./styles.jsx";

export const SocialFooter = () => {
    return (
        <Wrapper>
            <Container>
                <p>Besnik Creative Agency.</p>
                <div>
                    <img src="/assets/icons/logo-footer.svg" alt="Netbook" />
                </div>

                <nav>
                    <a href="/">
                        <img src="/assets/icons/twitter.svg" alt="" />
                    </a>
                    <a href="/">
                        <img src="/assets/icons/instagram.svg" alt="" />
                    </a>
                    <a href="/">
                        <img src="/assets/icons/facebook.svg" alt="" />
                    </a>
                    <a href="/">
                        <img src="/assets/icons/linkedin.svg" alt="" />
                    </a>
                </nav>
            </Container>
        </Wrapper>
    );
};
