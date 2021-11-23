import styled from "styled-components";
import { DefaultContainer } from "../../components/DefaultContainer";

export const Container = styled(DefaultContainer)`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    button {
        margin-top: 1rem;
    }

    > div:first-child {
        flex: 1;
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        flex: 1.75;

        @media (min-width: 40rem) {
            flex-direction: row;
        }
    }

    @media (min-width: 60rem) {
        flex-direction: row-reverse;
    }
`;

export const AchievementCard = styled.article`
    width: 100%;
    max-width: 20rem;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    padding: 2rem;
    border-radius: 14px;

    header {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        h3 {
            font-weight: 600;
            font-size: 1.25rem;
        }
    }

    main {
        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            span {
                margin-top: -0.5rem;
                font-weight: 500;

                strong {
                    color: ${(props) => props.theme.blue};
                }
            }
        }
    }

    footer {
        a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${(props) => props.theme.blue};
        }

        img {
            margin-bottom: -0.15rem;
        }
    }
`;
