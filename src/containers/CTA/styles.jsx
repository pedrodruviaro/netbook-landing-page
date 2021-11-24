import styled, { css } from "styled-components";
import { DefaultContainer } from "../imports";

export const Wrapper = styled.div`
    background: #e5f0fd;
`;

export const Container = styled(DefaultContainer)`
    padding-bottom: 0;
    display: grid;
    gap: 2rem;

    > div:first-child {
        div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1rem;
        }
    }

    > div:last-child {
        max-width: 30rem;
        margin-inline: auto;
    }

    @media (min-width: 50rem) {
        grid-template-columns: 1fr 1fr;

        > div:first-child {
            align-self: center;
            div {
                padding-bottom: 2rem;
            }
        }

        > div:last-child {
            max-width: 100%;
            margin: 0;
            align-self: end;
        }
    }
`;

export const ButtonStores = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;

    display: grid;
    column-gap: 0.5rem;
    row-gap: 0.15rem;
    grid-template-columns: max-content max-content;
    grid-template-rows: min-content min-content;
    grid-template-areas:
        "icon text"
        "icon title";

    img {
        grid-area: icon;
        align-self: center;

        max-width: 2.25rem;
    }

    span {
        grid-area: text;

        color: ${(props) => props.theme.text};
        font-size: 0.9rem;
    }

    h6 {
        grid-area: title;
        font-size: 1.125rem;
        text-align: left;
        font-weight: 600;
    }

    ${(props) =>
        props.dark &&
        css`
            background-color: #29284e;

            span {
                color: #aaa;
            }

            h6 {
                color: #fafafa;
            }
        `}

    &:focus,
    &:hover {
        outline: 1px solid #bcbcbc;
        outline-offset: 4px;
    }
`;
