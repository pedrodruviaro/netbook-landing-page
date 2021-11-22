import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * { 
        font-family: 'Inter', sans-serif;
    }

    html {
        @media (max-width: 67.5rem){
            font-size: 93.75%; // ~ 15px
        }
        @media (max-width: 45rem){
            font-size: 87.5%; // ~ 14px
        }
    }

    body {
        background-color: ${(props) => props.theme.light};
        line-height: 1.5;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
        color: ${(props) => props.theme.heading};
    }

    p, span button, a{
        font-weight: 400;
        color: ${(props) => props.theme.text};
    }
`;
