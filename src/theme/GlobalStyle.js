import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
     font-size: 62.5%;
    }

    body {
        margin: 1%;
        margin-top: 0;
    }

    h1 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 6.5rem;
        color: #212121;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 3rem;
        color: #212121;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 2rem;
        color: #424242;
    }

    p {
        font-family: 'Karla', sans-serif;
        font-size: 2rem;
        color: #424242;
    }

    ul {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 2rem;
        color: #212121;
    }
`;

export default GlobalStyle;
