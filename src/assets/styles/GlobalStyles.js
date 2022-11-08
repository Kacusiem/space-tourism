import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Bellefair' sans-serif;
        margin: 0;
        padding: 0;
    }
    a, button {
        font-family: 'Bellefair' sans-serif;
    }
`