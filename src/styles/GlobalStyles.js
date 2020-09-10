import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};

    a {
        text-decoration : none;
    }

    *{
        box-sizing : border-box; 
    }
    
    body {
        background-color: #070c1f;
        font-family: 'Barlow', sans-serif;
        color : white;
    }
`;

export default globalStyles;
