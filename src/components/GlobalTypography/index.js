import { createGlobalStyle } from 'styled-components'
import fonts from '../../constants/fonts'
import colours from '../../constants/colours'

const GlobalTypography = createGlobalStyle`
    html, div, button {
        color: ${colours.blackText};
        font-size: 16px;
        font-family: ${fonts.sansSerifFont};
    }
    
    a:visited {
        color: ${colours.squirt};
    }
    
    a {
        color: ${colours.squirt};
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: none;
    }
`

export default GlobalTypography
