import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { ThemeProvider } from "styled-components";

import { ResetStyles } from "./styles/ResetStyles";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />

            <ResetStyles />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
