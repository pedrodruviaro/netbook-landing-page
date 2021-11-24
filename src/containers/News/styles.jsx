import styled from "styled-components";
import { DefaultContainer } from "../imports";

export const Container = styled(DefaultContainer)`
    > header {
        margin-inline: auto;
        margin-bottom: 2rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        @media (min-width: 50rem) {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-around;
        }
    }
`;
