import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Wrapper = styled.div`
    background: linear-gradient(
        0deg,
        rgba(241, 246, 253, 0) 1.63%,
        #f1f6fd 20.5%,
        #f1f6fd 58.57%,
        #ffffff 100%
    );

    padding-bottom: 2rem;
`;

export const Container = styled(DefaultContainer)`
    margin-top: 0;
    display: grid;

    gap: 4.315rem;

    > div:first-child {
        display: grid;
        gap: 1rem;
        text-align: left;
        justify-self: start;

        span {
            display: inline-block;
            width: fit-content;
            display: grid;
            justify-items: center;
            font-size: 0.9rem;
            color: ${(props) => props.theme.blue};
            border-radius: 0.5rem;
            background: #217cf41c;
            padding: 0.75rem 1.875rem;
        }

        h1 {
            font-size: clamp(2.65rem, 2vw, 3.75rem);
            max-width: 450px;
        }

        p {
            font-size: 1.125rem;
            max-width: 30.6875rem;
        }

        div {
            display: flex;
            gap: 1rem;
            align-items: center;
            flex-wrap: wrap;
        }
    }

    > div:last-child {
        display: grid;
        place-items: center;
        img {
            margin-left: -1rem;
        }
    }

    @media (min-width: 50rem) {
        grid-template-columns: 1fr 1fr;
        align-items: start;
        place-items: center;
        gap: 2rem;

        > div:first-child {
            gap: 2rem;
        }
    }
`;
