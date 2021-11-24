import styled from "styled-components";
import { DefaultContainer } from "../DefaultContainer";

export const Wrapper = styled.div`
    background-color: #2b2b39;
`;

export const Container = styled(DefaultContainer)`
    display: grid;
    gap: 2rem;

    padding-block: 4.875rem;

    > div {
        display: grid;
        gap: 1.15rem;

        /* border: 1px solid red; */
        max-width: 25rem;
    }

    h4 {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
    }

    p,
    a {
        color: #e7e7e7;
        font-size: 16px;
    }

    nav {
        display: grid;
        gap: 2rem;

        > div {
            /* border: 1px solid yellow; */
            display: grid;
            gap: 0.68rem;

            h4 {
                margin-bottom: 0.68rem;
            }
        }

        @media (min-width: 35rem) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 56.25rem) {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 68.75rem) {
        grid-template-columns: 1fr max-content;
        grid-template-areas: "links box";

        > div {
            grid-area: box;
        }
    }
`;

export const CustomForm = styled.form`
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    border: 1px solid #fff;
    border-radius: 0.75rem;
    overflow: hidden;

    input {
        font-size: 1rem;
        padding: 0.5rem;
        flex: 1;
        max-width: 100%;

        background: transparent;
        border: none;
        outline: none;

        color: #fff;

        &::placeholder {
            color: #717179;
            font-size: 0.875rem;
        }
    }

    button {
        cursor: pointer;
        outline: none;
        border: none;

        border-radius: 0.75rem 0 0 0.75rem;

        background-color: #fff;
        color: ${(props) => props.theme.heading};
        font-size: 1rem;
        font-weight: 500;
        padding: 1rem 0;
        flex: 1;
    }
`;
