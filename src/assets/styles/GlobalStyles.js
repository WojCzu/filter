import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,input, button {
        box-sizing: border-box;
    }
    *, *::after, *::before{
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;
    }
    button, a, input {
        font-family: 'Montserrat', sans-serif;
    }
`;
