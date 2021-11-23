import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Container = styled(DefaultContainer)`
    display: grid;
    gap: 2rem;

    @media (min-width: 40rem) {
        grid-template-columns: 1fr 1fr;
    }

    ul {
        margin-top: 2rem;
        list-style: none;
        display: grid;
        gap: 1rem;

        li {
            display: flex;
            align-items: center;
            gap: 0.75rem;

            &::before {
                content: "";
                width: 8px;
                aspect-ratio: 1;
                display: block;
                background-color: ${(props) => props.theme.blue};
                border-radius: 50%;

                box-shadow: 0 0 0px 5px ${(props) => props.theme.lightBlue};
            }
        }
    }
`;

export const SocialContainer = styled.div`
    display: grid;
    gap: 1rem;

    justify-items: center;
    place-items: center;

    > * {
        justify-self: start;

        border-radius: 14px;
        overflow: hidden;
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content;
    grid-template-areas:
        "one two"
        "one three";

    > div:nth-child(1) {
        grid-area: one;
        justify-self: end;
    }

    > div:first-child {
        position: relative;

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
