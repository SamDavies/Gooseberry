import { createGlobalStyle } from 'styled-components'
import fonts from '../../constants/fonts'
import colours from '../../constants/colours'

const GlobalTypography = createGlobalStyle`
    html, div, button {
        line-height: 1.5rem;
        color: ${colours.blackText};
        font-size: 16px;
        font-family: ${fonts.sansSerifFont};
    }
    
    h1, h2, h3, h4, h5, h6 {
        line-height: 1.5rem;
        color: ${colours.blackText};
    }
    
    a:visited {
        color: ${colours.squirt};
    }
    
    a {
        line-height: 1.5rem;
        color: ${colours.squirt};
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: none;
    }
`

export default GlobalTypography
