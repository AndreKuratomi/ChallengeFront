import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, main, section, form, input, div, button, a, span, p, h1, h2, h3, nav, figure, img{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
    }

    :root {
        --blue: #2d7cf9;
        --light-blue: #afdcfe;
        --dark-blue: #9480a0;
        --gray: #b6bbcb;
        --light-gray: #eeeeee;
        --white: #FFF
    }

    input {
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        text-align: left;
    }

    button {
        background-color: var(--blue);
        border: none;
        border-radius: 2.5%;
        color: var(--white);
        font-weight: bold;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        text-align: center;
    }

    a {
        color: var(--gray);
        text-decoration: none;
    }
`;
