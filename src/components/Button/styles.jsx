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

    padding: 1.25em 2.6em;
    transition: filter 300ms ease;

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
