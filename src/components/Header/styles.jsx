import styled, { css } from "styled-components";

export const Wrapper = styled.header`
    border-bottom: 1px solid ${(props) => props.theme.lightBlue};

    position: sticky;
    top: -2px;
    left: 0;
    z-index: 999;
    background-color: #fff;
`;

export const Container = styled.header`
    max-width: 75rem;
    padding-inline: 2rem;
    margin-inline: auto;

    height: 4rem;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        background-color: ${(props) => props.theme.light};
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        z-index: 9999;
        padding: 1rem;

        position: fixed;
        top: 4.25rem;
        right: 2rem;

        transform: scale(0);
        transition: transform 250ms ease;
        transform-origin: top right;

        > div:first-child {
            display: grid;
            margin-top: 0.5rem;

            a {
                font-size: 1rem;
                padding: 0.5rem;
            }
        }

        > div:last-child {
            display: grid;
            gap: 1rem;
            margin-top: 1rem;
            > div {
                display: flex;
                gap: 0.25rem;
                padding: 0.25rem;
                border-bottom: 1px solid ${(props) => props.theme.lightBlue};

                input {
                    font-size: 1rem;
                    border: none;
                    outline: none;
                    background-color: transparent;
                }
            }

            button {
                padding: 0.5rem 1rem;
                min-width: 10rem;
                margin: auto;
            }
        }
    }

    ${(props) =>
        props.active &&
        css`
            nav {
                transform: scale(1);
            }
        `}

    @media screen and (min-width: 60rem) {
        nav {
            background-color: transparent;
            box-shadow: none;
            z-index: 1;

            padding: 0;
            position: static;
            transform: initial;

            flex: 1;
            margin-left: 2rem;

            display: flex;

            > div:first-child {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-right: auto;

                margin-top: 0;

                a {
                    font-size: 1rem;
                    padding: 0 0.15rem;

                    &:hover {
                        color: #000;
                        font-weight: 700;
                    }
                }
            }

            > div:last-child {
                display: flex;
                gap: 1rem;
                margin-top: 0;
                margin-left: auto;
                justify-content: flex-end;

                flex: 1;

                > div {
                    display: flex;
                    gap: 0.25rem;
                    padding: 0.25rem;
                    border-bottom: 1px solid ${(props) => props.theme.lightBlue};

                    input {
                        font-size: 1rem;
                        border: none;
                        outline: none;
                        background-color: transparent;
                    }
                }

                button {
                    padding: 0.5rem 1rem;
                    min-width: 10rem;
                    margin: 0;
                }
            }
        }
    }
`;

export const MenuToggle = styled.div`
    display: grid;
    justify-items: end;
    gap: 5px;

    cursor: pointer;

    &:hover,
    &:focus {
        outline: 1px solid ${(props) => props.theme.lightBlue};
        outline-offset: 5px;
    }

    &::before {
        content: "";
        background: ${(props) => props.theme.heading};
        width: 25px;
        height: 2px;
        display: block;
    }

    &::after {
        content: "";
        background: ${(props) => props.theme.heading};
        width: 25px;
        height: 2px;
        display: block;
        transition: width 250ms ease;
    }

    span {
        background: ${(props) => props.theme.heading};
        width: 25px;
        height: 2px;
        display: block;
        transition: width 250ms ease;
    }

    ${(props) =>
        props.active &&
        css`
            span {
                width: 20px;
            }

            &::after {
                width: 15px;
            }
        `}

    @media screen and (min-width: 60rem) {
        display: none;
    }
`;
