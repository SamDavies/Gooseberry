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
`

export default GlobalTypography
