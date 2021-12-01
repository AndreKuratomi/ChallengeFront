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

    aside, footer, header {
        min-width: 270px;
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

    form {
        max-width: 200px
    }
    
    header {
        background-color: var(--white);
        min-width: 270px;
    }

    html, body {
        background-color: var(--dark-white);
        min-width: 700px;
    }

    input {
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        text-align: left;
        max-width: 200px;
    }
`;
