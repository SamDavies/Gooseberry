import PropTypes from 'prop-types'
import styled from 'styled-components'
import colours from '../../constants/colours'

const getStyles = props => {
    const primaryColours = {
        black: colours.black,
        blue: colours.squirt,
        white: colours.white
    }

    const secondaryColours = {
        black: colours.white,
        blue: colours.white,
        white: colours.black
    }

    const primaryColour = primaryColours[props.colour]
    const secondaryColour = secondaryColours[props.colour]

    if (props.kind === 'secondary') {
        return `
            color: ${colours.grey4};
            background-color: ${colours.white};
            border-color: ${colours.grey7};
            
            &:hover {
                color: ${colours.black};
                background-color: ${colours.white};
                border-color: ${colours.black};
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
    border: 1px solid ${colours.black};
    
    ${props => props.size === 'small' && `
        height: 24px;
        line-height: 24px;
        font-size: 12px;
    `}
    
    ${props => props.size === 'medium' && `
        height: 32px;
        line-height: 32px;
        font-size: 14px;
    `}
    
    ${props => getStyles(props)}
    
    ${props => props.disabled && `
        background: ${colours.grey8};
        border-color: ${colours.grey7};
        color: ${colours.grey5};
        cursor: not-allowed;
        
        &:hover {
            opacity: 1;
        }
    `}
    
    ${props => props.loading && `
        background: ${colours.grey8};
        border-color: ${colours.grey7};
        color: ${colours.grey5};
        cursor: default;
        pointer-events: none;
        filter: grayscale(1);
    `}
`

Button.propTypes = {
    kind: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'frost']),
    colour: PropTypes.oneOf(['black', 'blue', 'white']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool
}

Button.defaultProps = {
    kind: 'primary',
    colour: 'black',
    size: 'large',
    disabled: false,
    fullWidth: false
}

export default Button
