import PropTypes from 'prop-types'
import styled from 'styled-components'
import colours from '../../constants/colours'

const Button = styled.button`
    appearance: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    line-height: 38px;
    white-space: nowrap;
    font-weight: 500;
    min-width: 200px;
    height: 50px;;
    padding: 0 25px 0 25px;
    border-radius: 5px;
    flex-shrink: 0;
    margin: 0;
    color: ${colours.white};
    background-color: ${colours.black};
    border: 1px solid ${colours.black};
    transition: all 0.2s ease;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    --button-border: var(--geist-foreground);
    
    &:hover {
        color: ${colours.black};
        background-color: transparent;
        border-color: ${colours.black};
    }
    
    ${props => props.size === 'small' && `
        min-width: auto;
        height: 24px;
        line-height: 22px;
        padding: 0 10px;
    `}
    
    ${props => props.size === 'medium' && `
        min-width: auto;
        height: 32px;
        line-height: 0;
        font-size: 0.875rem;
        padding: 6px 12px;
    `}
    
    ${props => props.type === 'ghost' && `
        color: ${colours.grey5};
        background-color: transparent;
        border-color: transparent;
    
        &:hover {
            color: ${colours.grey3};
            background-color: transparent;
            border-color: transparent;
        }
    `}
    
    ${props => props.type === 'frost' && `
        &:hover {
            color: ${colours.white};
            background-color: ${colours.grey2};
            border-color: ${colours.grey2};
        }
    `}
    
    ${props => props.type === 'secondary' && `
        color: ${colours.grey4};
        background-color: ${colours.white};
        border-color: ${colours.grey7};
        
        &:hover {
            color: ${colours.black};
            background-color: ${colours.white};
            border-color: ${colours.black};
        }
        
        ${props.type === 'shadow' && `
            border-color: transparent;
        `}
    `}
    
    ${props => props.type === 'shadow' && `
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
        &:hover {
            color: ${colours.white};
            background-color: ${colours.black};
            border-color: ${colours.black};
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            transform: translate3d(0px, -1px, 0px);
        }
    `}
    
    ${props => props.type === 'white' && `
        color: ${colours.black};
        background-color: ${colours.white};
        border-color: ${colours.white};
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
        
        &:visited {
            color: ${colours.black};
        }
        
        &:hover {
            text-decoration: none;
            color: ${colours.black};
            background-color: ${colours.white};
            border-color: ${colours.white};
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            transform: translate3d(0px, -1px, 0px);
        }
    `}
    
    ${props => props.disabled && `
        background: ${colours.grey8};
        border-color: ${colours.grey7};
        color: ${colours.grey5};
        cursor: not-allowed;
        filter: grayscale(1);
        &:hover {
            background: ${colours.grey8};
            border-color: ${colours.grey7};
            color: ${colours.grey5};
        }
        
        ${props.type === 'shadow' && `
            &:hover {
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                transform: unset;
            }
        `}
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
    type: PropTypes.oneOf(['primary', 'secondary', 'shadow', 'frost', 'ghost', 'danger']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    loading: PropTypes.bool
}

Button.defaultProps = {
    type: 'primary',
    size: 'large',
    disabled: false,
    loading: false
}

export default Button
