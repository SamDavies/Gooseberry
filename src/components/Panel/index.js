import PropTypes from 'prop-types'
import styled from 'styled-components'
import variables from '../../constants/colours'
import sizes from '../../constants/sizes'

const Panel = styled.div`
    flex: 1;
    background-color: #ffffff;
    ${props => props.responsive && `
        border-top: 1px solid ${variables.greyBorder};
        border-bottom: 1px solid ${variables.greyBorder};
    
        @media ${sizes.tablet} {
            border-radius: 4px;
            border-right: 1px solid ${variables.greyBorder};
            border-left: 1px solid ${variables.greyBorder};
            box-shadow: rgba(0, 0, 0, 0.0470588) 0 1px 2px 0;
        }`}
        
    ${props => !props.noPadding && `
        padding: 20px;
    `}
        
    ${props => !props.responsive && `
        border-radius: 4px;
        border: 1px solid ${variables.greyBorder};
        box-shadow: rgba(0, 0, 0, 0.0470588) 0 1px 2px 0;
    `}
        
    ${props => props.mobileHidden && `
        @media ${sizes.tablet} {
            border: none;
            padding: 0px
        }
    `}
`

Panel.propTypes = {
    responsive: PropTypes.bool,
    noPadding: PropTypes.bool,
    mobileHidden: PropTypes.bool
}

Panel.defaultProps = {
    responsive: true,
    noPadding: false,
    mobileHidden: false
}

export default Panel
