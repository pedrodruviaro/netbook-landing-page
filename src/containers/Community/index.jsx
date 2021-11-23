import React from "react";
import { Container, Wrapper } from "./styles.jsx";
import { SectionHeader } from "../imports";
import { CommunityCard } from "../../components/CommunityCard";
import { communityCards } from "./data";

export const Community = () => {
    return (
        <Wrapper>
            <Container>
                <SectionHeader
                    center
                    span="Our Community"
                    title="Community Main Feature"
                    text="The wise man therefore always holds in these matters to this principle of selection."
                />

                <div>
                    {communityCards.map((card) => (
                        <CommunityCard key={card.title} {...card} />
                    ))}
                </div>
            </Container>
        </Wrapper>
    );
};
