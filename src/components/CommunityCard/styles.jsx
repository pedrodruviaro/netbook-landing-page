import styled from "styled-components";

export const Container = styled.article`
    border-radius: 0.8rem;
    padding: 2rem;
    padding-left: 1rem;

    background-color: #fff;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    display: grid;
    column-gap: 0.5rem;
    row-gap: 0.25rem;
    grid-template-columns: max-content 1fr;
    grid-template-rows: min-content min-content;
    grid-template-areas:
        "icon title"
        "icon text";

    > div {
        grid-area: icon;
        max-width: 6rem;
    }

    h3 {
        grid-area: title;
        align-self: end;
        font-weight: 700;
        font-size: clamp(1.325rem, 3vw, 1.5rem);
    }

    p {
        grid-area: text;
        align-self: start;
    }
`;
