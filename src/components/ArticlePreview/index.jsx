import React from "react";
import { Container } from "./styles.jsx";

export const ArticlePreview = ({ image, title }) => {
    return (
        <Container>
            <header>
                <img src={image} alt={title} />
            </header>
            <main>
                <h4>{title}</h4>

                <a href="/">
                    Continue Reading
                    <img src="/assets/icons/arrow-blue.svg" alt="" />
                </a>
            </main>
        </Container>
    );
};
