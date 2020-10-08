import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};

    html {
	@media (max-width: 1250px) {
        font-size : 15px
	}

    }
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
