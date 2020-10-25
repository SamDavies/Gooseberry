import { createGlobalStyle } from 'styled-components'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'

const GlobalTypography = createGlobalStyle`
    html, div, button {
        line-height: 150%;
        color: ${colors.blackText};
        font-size: 16px;
        font-family: ${fonts.sansSerifFont};
    }
    
    h1, h2, h3, h4, h5, h6 {
        line-height: 150%;
        color: ${colors.blackText};
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
        color: ${colors.squirt};
    }
    
    a {
        line-height: 100%;
        color: ${colors.squirt};
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: none;
    }
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${colors.grey4};
        opacity: 1; /* Firefox */
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${colors.grey4};
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${colors.grey4};
    }
`

export default GlobalTypography
