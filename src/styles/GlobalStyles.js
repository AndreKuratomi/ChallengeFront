import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body, main, section, article, aside, footer, section, form, input, div, button, a, span, p, h1, h2, h3, h4, nav, figure, figcaption, img, ul, li {
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
        --dark-white: #fafafa;
        --white: #FFF
    }
    
    a {
        color: var(--gray);
        text-decoration: none;
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

        &:hover {
            cursor: pointer;
        }
    }

    figcaption {
        display: none;
    }
    
    aside, header {
        background-color: var(--white);
        /* border: 1px solid #b6bbcb; */
    }


    html, body {
        background-color: var(--dark-white)
    }

    input {
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        text-align: left;
    }

    /* span {
        color: var(--light-blue);
        font-weight: bold;
    } */
`;
