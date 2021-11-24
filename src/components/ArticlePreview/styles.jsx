import styled from "styled-components";

export const Container = styled.article`
    max-width: 21.25rem;

    header {
        width: fit-content;
        border-radius: 20px;
        overflow: hidden;
    }

    main {
        padding: 1rem;
        display: grid;
        gap: 1rem;
        padding-left: 4.25rem;
        position: relative;

        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 2.25rem;
            left: 1rem;
            background-color: ${(props) => props.theme.yellow};
            width: 2.45rem;
            height: 2px;
        }
    }

    h4 {
        font-size: clamp(1.25rem, 2vw, 1.35rem);
        font-weight: 600;
        line-height: 2rem;
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${(props) => props.theme.blue};
    }
`;
