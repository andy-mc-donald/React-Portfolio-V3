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
        font-size: 1.7rem;
        color: #424242;
    }

    ul {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 2rem;
        color: #212121;
    }

    @media(max-width: 425px){
        h1 {
            font-size: 5.5rem;
        }
        h2 {
            font-size: 2.5rem;
        }
        h3 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1.3rem;
        }
        ul {
             font-size: 1.5rem;
        }
    }
    @media(max-width: 320px){
        h1 {
            font-size: 4.5rem;
        }

        p {
            font-size: 1.2rem;
        }
    }

`;

export default GlobalStyle;
