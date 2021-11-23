import styled from "styled-components";

export const Container = styled.li`
    display: grid;
    justify-content: center;
    gap: 0.5rem;
    text-align: center;

    padding: 2rem;

    border-radius: 0.875rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    header {
        width: 7.75rem;
        margin-inline: auto;
        aspect-ratio: 1;
        position: relative;
        margin-bottom: 1rem;

        > img {
            border: 4px dashed #ffaf2e;
            border-radius: 50%;
        }

        > span {
            display: block;
            position: absolute;
            z-index: 2;
            left: calc(50% - 0.75rem);
            bottom: -0.75rem;
        }
    }

    h4 {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;
