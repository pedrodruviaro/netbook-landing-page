import React from "react";
import { Container } from "./styles.jsx";

export const CommunityCard = ({ icon, text, title }) => {
    return (
        <Container>
            <div>
                <img src={icon} alt={text} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </Container>
    );
};
