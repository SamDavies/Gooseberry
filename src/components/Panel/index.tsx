import styled from 'styled-components'
import variables from '../../constants/colors'
import { MediaQuery } from '../../constants/sizes'

type Props = {
    responsive?: boolean;
    noPadding?: boolean;
    mobileHidden?: boolean;
}

const Panel = styled.div<Props>`
    flex: 1;
    background-color: #ffffff;
    ${(props: Props): string | false | undefined => props.responsive && `
        border-top: 1px solid ${variables.greyBorder};
        border-bottom: 1px solid ${variables.greyBorder};
    
        @media ${MediaQuery.tablet} {
            border-radius: 4px;
            border-right: 1px solid ${variables.greyBorder};
            border-left: 1px solid ${variables.greyBorder};
            box-shadow: rgba(0, 0, 0, 0.0470588) 0 1px 2px 0;
        }`}
        
    ${(props: Props): string | false | undefined => !props.noPadding && `
        padding: 20px;
    `}
        
    ${(props: Props): string | false | undefined => !props.responsive && `
        border-radius: 4px;
        border: 1px solid ${variables.greyBorder};
        box-shadow: rgba(0, 0, 0, 0.0470588) 0 1px 2px 0;
    `}
        
    ${(props: Props): string | false | undefined => props.mobileHidden && `
        @media (max-width: 576px) {
            border: none;
            padding: 0px
        }
    `}
`

Panel.defaultProps = {
    responsive: true,
    noPadding: false,
    mobileHidden: false
}

export default Panel
