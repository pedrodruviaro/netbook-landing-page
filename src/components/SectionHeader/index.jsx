import React from "react";
import { Container } from "./styles.jsx";

export const SectionHeader = ({ span, title, text = "", ...props }) => {
    return (
        <Container {...props}>
            <span>{span}</span>
            <h2>{title}</h2>
            <p>{text}</p>
        </Container>
    );
};
