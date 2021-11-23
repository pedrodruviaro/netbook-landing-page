import styled, { css } from "styled-components";

export const Container = styled.button`
    border: none;
    outline: none;
    cursor: pointer;

    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.light};
    font-size: 1rem;
    border-radius: 14px;
    border: 1px solid currentColor;

    padding: 1em 2em;
    transition: filter 300ms ease;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    &:hover,
    &:focus {
        filter: brightness(0.9);
    }

    ${(props) =>
        props.secondary &&
        css`
            background-color: ${(props) => props.theme.light};
            color: ${(props) => props.theme.blue};
        `}
`;
