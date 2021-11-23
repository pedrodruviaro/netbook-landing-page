import React from "react";
import { SectionHeader } from "../../components/SectionHeader/index.jsx";
import { Container, SocialContainer } from "./styles.jsx";

export const WhoWeAre = () => {
    return (
        <Container>
            <div>
                <SectionHeader
                    span="Whats Netboks?"
                    title="Why Join to Netbook Social Network?"
                    text="Recent surveys have indicated that small businesses recognise the need they have to connect with consumer."
                />
                <ul>
                    <li>Groups</li>
                    <li>Messages</li>
                    <li>Share</li>
                </ul>
            </div>

            <SocialContainer>
                <div>
                    <img src="/assets/images/social-01.png" alt="" />
                    <span>
                        <img src="/assets/icons/play.svg" alt="" />
                    </span>
                </div>
                <div>
                    <img src="/assets/images/social-02.png" alt="" />
                </div>
                <div>
                    <img src="/assets/images/social-03.png" alt="" />
                </div>
            </SocialContainer>
        </Container>
    );
};
