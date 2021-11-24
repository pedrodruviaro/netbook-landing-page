import styled from "styled-components";

export const DefaultContainer = styled.section`
    max-width: 75rem;
    padding: 2rem;
    margin-top: 6rem;
    margin-inline: auto;

    @media (max-width: 45rem) {
        margin-top: 4.5rem;
        padding: 1.5rem;
    }
`;
