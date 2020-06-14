import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../constants/colors'

const getStyles = props => {
    const primaryColours = {
        black: colors.black,
        blue: colors.squirt,
        white: colors.white
    }

    const secondaryColours = {
        black: colors.white,
        blue: colors.white,
        white: colors.black
    }

    const primaryColour = primaryColours[props.color]
    const secondaryColour = secondaryColours[props.color]

    if (props.kind === 'secondary') {
        return `
            color: ${colors.grey4};
            background-color: ${colors.white};
            border-color: ${colors.grey7};
            
            &:hover {
                color: ${colors.black};
                background-color: ${colors.white};
                border-color: ${colors.black};
            }
        `
    }

    if (props.kind === 'ghost') {
        return `
            color: ${primaryColour};
            background-color: transparent;
            border-color: transparent;
            
            &:hover {
                opacity: 0.8;
            }
        `
    }

    if (props.kind === 'frost') {
        return `
            color: ${secondaryColour};
            background-color: ${primaryColour};
            border-color: ${primaryColour};
            
            &:hover {
                opacity: 0.8;
            }
        `
    }

    return `
        color: ${secondaryColour};
        background-color: ${primaryColour};
        border: 1px solid ${primaryColour};
        
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
        &:hover {
            color: ${secondaryColour};
            background-color: ${primaryColour};
            border-color: ${primaryColour};
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            transform: translate3d(0px, -1px, 0px);
        }
    `
}

const Button = styled.button`
    ${props => props.fullWidth && `
        width: 100%;
    `}
    
    // font
    line-height: 38px;
    font-size: 18px;
    font-align: center;
    font-weight: 500;
    
    // default styles
    appearance: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    min-width: auto;
    height: 50px;
    padding: 0 25px 0 25px;
    flex-shrink: 0;
    margin: 0;
    transition: all 0.2s ease;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    border-radius: 5px;
    border: 1px solid ${colors.black};
    
    ${props => props.size === 'small' && `
        height: 24px;
        line-height: 24px;
        font-size: 12px;
    `}
    
    ${props => props.size === 'medium' && `
        height: 34px;
        line-height: 34px;
        font-size: 14px;
    `}
    
    ${props => getStyles(props)}
    
    ${props => props.disabled && `
        background: ${colors.grey8};
        border-color: ${colors.grey7};
        color: ${colors.grey5};
        cursor: not-allowed;
        
        &:hover {
            opacity: 1;
        }
    `}
    
    ${props => props.loading && `
        background: ${colors.grey8};
        border-color: ${colors.grey7};
        color: ${colors.grey5};
        cursor: default;
        pointer-events: none;
        filter: grayscale(1);
    `}
`

Button.propTypes = {
    kind: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'frost']),
    color: PropTypes.oneOf(['black', 'blue', 'white']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool
}

Button.defaultProps = {
    kind: 'primary',
    color: 'black',
    size: 'large',
    disabled: false,
    fullWidth: false
}

export default Button
