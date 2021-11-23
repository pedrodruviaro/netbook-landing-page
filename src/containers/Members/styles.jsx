import styled from "styled-components";
import { DefaultContainer } from "../imports";

export const Container = styled(DefaultContainer)`
    display: grid;
    gap: 2rem;

    > header {
        margin-inline: auto;
    }

    > div {
        margin-inline: auto;
        display: flex;
        align-items: center;
        max-width: max-content;
        border-radius: 0.75rem;
        /* gap: 2rem; */
        padding: 0.5rem;
        gap: 0.5rem;

        background-color: ${(props) => props.theme.lightBlue};

        > button {
            border: none;
            outline: none;
            background-color: transparent;
            font-size: 1rem;
            font-weight: 500;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            cursor: pointer;
            position: relative;

            &:hover {
                outline: 1px solid #ccc;
                outline-offset: 3px;
            }

            &:nth-child(3) {
                background-color: ${(props) => props.theme.blue};
                color: #fff;
                box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            }
        }
    }

    ul {
        display: grid;
        gap: 2rem;

        list-style: none;

        @media (min-width: 43.75rem) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 58.125rem) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;
