import { createGlobalStyle } from 'styled-components'
import fonts from '../../constants/fonts'
import colours from '../../constants/colours'

const GlobalTypography = createGlobalStyle`
    html, div, button {
        color: ${colours.blackText};
        font-size: 16px;
        font-family: ${fonts.sansSerifFont};
    
    }
    
    p {
        font-family: ${fonts.serifFont};
        text-rendering: optimizeLegibility;
        color: ${colours.blackText};
        font-size: 20px;
        font-weight: 400;
        line-height: 1.58;
    }
    
    li {
        font-family: ${fonts.serifFont};
        text-rendering: optimizeLegibility;
        color: ${colours.blackText};
        font-size: 20px;
        font-weight: 400;
        line-height: 1.58;
    }
    
    h1 {
        font-family: ${fonts.serifFont};
        font-size: 36px;
        line-height: 40px;
        font-weight: 500;
    
        @media (min-width: 1200px) {
            font-size: 56px;
            line-height: 64px;
        }
    }
    
    h2 {
        font-family: ${fonts.serifFont};
        font-size: 32px;
        font-weight: normal;
        line-height: 1.58;
    }
    
    h3 {
        font-family: ${fonts.serifFont};
        font-size: 20px;
        font-weight: 600;
        line-height: 1.58;
    }
    
    h4 {
        font-family: ${fonts.serifFont};
        font-size: 20px;
        font-weight: 600;
        line-height: 1.58;
    }
    
    h5 {
        font-family: ${fonts.serifFont};
        font-size: 20px;
        margin-top: 5px;
        font-weight: 600;
    }
    
    h6 {
        font-family: ${fonts.serifFont};
        font-weight: 100;
        font-size: 10px;
    }
    
    a:visited {
        color: ${colours.squirt};
    }
    
    a {
        color: ${colours.squirt};
    }
`

export default GlobalTypography
