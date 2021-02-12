import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ${normalize}

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fontFamily};
    }

    /* Full Height Layout */
    html,
    body {
        display: flex;
        min-height: 100vh;
        width: 100%;
    }
    #__next{
        display:flex;
        flex:1;
        flex-direction: column;
    }
`;

export default GlobalStyle;
