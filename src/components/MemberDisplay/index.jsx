import React from "react";
import { Container } from "./styles.jsx";

export const MemberDisplay = ({ img, name, username }) => {
    return (
        <Container>
            <header>
                <img src={img} alt={name} />
                <span>
                    <img src="/assets/icons/verified.svg" alt="" />
                </span>
            </header>

            <h4>{name}</h4>
            <p>{username}</p>
        </Container>
    );
};
