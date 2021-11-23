import styled from "styled-components";
import { DefaultContainer } from "../imports";

export const Wrapper = styled.div`
    background: linear-gradient(
        0deg,
        rgba(241, 246, 253, 0) 1.63%,
        #f1f6fd 20.5%,
        #f1f6fd 58.57%,
        #ffffff 100%
    );
`;

export const Container = styled(DefaultContainer)`
    header {
        margin-inline: auto;
        margin-bottom: 2rem;

        h2 {
            max-width: 30rem;
        }
    }

    > div {
        display: grid;
        gap: 2rem;

        @media (min-width: 40rem) {
            grid-template-columns: 1fr 1fr;
        }
    }
`;
