import styled, { css } from "styled-components";

export const Container = styled.header`
    display: grid;
    gap: 1rem;

    span {
        color: ${(props) => props.theme.blue};
        font-size: 1.125rem;
        font-weight: 500;
    }

    h2 {
        font-weight: 700;
        font-size: clamp(2rem, 2vw, 2.25rem);
        max-width: 25.375rem;
    }

    p {
        max-width: 25.375rem;
        line-height: 1.5rem;
        font-size: 1rem;
    }

    ${(props) =>
        props.center &&
        css`
            text-align: center;
            width: max-content;
        `}
`;
