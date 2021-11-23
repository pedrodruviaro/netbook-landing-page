import React from "react";
import { Container, Wrapper } from "./styles.jsx";
import { Button } from "../../components/Button";

export const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <span>Netbook community</span>
                    <h1>Your Solutions For Community!</h1>
                    <p>
                        More than 2 billion people in over countries use
                        socibook to stay in touch with friends &#38; family.
                    </p>
                    <div>
                        <Button primary>About us</Button>
                        <Button secondary>Invite a friend</Button>
                    </div>
                </div>
                <div>
                    <img src="/assets/images/hero.svg" alt="" />
                </div>
            </Container>
        </Wrapper>
    );
};
