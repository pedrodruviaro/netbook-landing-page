import styled from "styled-components";
import { DefaultContainer } from "../DefaultContainer";

export const Wrapper = styled.div`
    background-color: #20202d;
`;

export const Container = styled(DefaultContainer)`
    margin-top: 0;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    p {
        color: #f6f6f6;
        font-size: 0.875rem;
    }

    nav {
        display: flex;
        gap: 1rem;
    }

    @media (min-width: 37.5rem) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;
