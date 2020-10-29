import { createGlobalStyle } from 'styled-components'
import Color from '../../constants/colors'
import Font from '../../constants/fonts'

const GlobalTypography = createGlobalStyle`
    html, div, button {
        line-height: 150%;
        color: ${Color.blackText};
        font-size: 16px;
        font-family: ${Font.sansSerif};
    }
    
    h1, h2, h3, h4, h5, h6 {
        line-height: 150%;
        color: ${Color.blackText};
    }
    
    h1 {
        font-size: 42px;
    }
    
    h2 {
        font-size: 32px;
    }
    
    h3 {
        font-size: 24px;
    }
    
    h4 {
        font-size: 18px;
    }
    
    strong {
        font-weight: bold;
    }
    
    em {
        font-style: italic;
    }
    
    pre {
        display: block;
        font-family: monospace;
        white-space: pre;
        margin: 1em 0;
    }
    
    ul {
        list-style: disc;
        padding-left: 40px;
    }
    
    a:visited {
        color: ${Color.squirt};
    }
    
    a {
        line-height: 100%;
        color: ${Color.squirt};
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: none;
    }
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${Color.grey4};
        opacity: 1; /* Firefox */
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${Color.grey4};
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${Color.grey4};
    }
`

export default GlobalTypography
