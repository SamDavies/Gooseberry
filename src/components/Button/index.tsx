import styled, { keyframes } from 'styled-components'
import Color from '../../constants/colors'
import React, { PropsWithChildren } from 'react'
import { FaSpinner } from 'react-icons/fa'

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Spinner = styled(FaSpinner)`
    animation: ${rotate360} 2s linear infinite;
    transform: translateZ(0);
    margin-right: 10px;
`

const primaryColors: {
    black: string;
    blue: string;
    white: string;
} = {
    black: Color.black,
    blue: Color.squirt,
    white: Color.white
}

const secondaryColors: {
    black: string;
    blue: string;
    white: string;
} = {
    black: Color.white,
    blue: Color.black,
    white: Color.black
}

type Props = {
    color?: 'black' | 'blue' | 'white';
    kind?: 'primary' | 'secondary' | 'ghost' | 'frost';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
}

const getStyles = (props: Props): string => {
    const primaryColor: string = props.color ? primaryColors[props.color] : Color.black
    const secondaryColor: string = props.color ? secondaryColors[props.color] : Color.white

    if (props.kind === 'secondary') {
        return `
            color: ${Color.grey2};
            background-color: ${Color.white};
            border-color: ${Color.grey3};
            
            
            &:hover {
                opacity: 0.8;
            }
        `
    }

    if (props.kind === 'ghost') {
        return `
            color: ${primaryColor};
            background-color: transparent;
            border-color: transparent;

            &:hover {
                opacity: 0.8;
            }
        `
    }

    if (props.kind === 'frost') {
        return `
            color: ${secondaryColor};
            background-color: ${primaryColor};
            border-color: ${primaryColor};
            
            &:hover {
                opacity: 0.8;
            }
        `
    }

    return `
        color: ${secondaryColor};
        background-color: ${primaryColor};
        border: 1px solid ${primaryColor};
        
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
        &:hover {
            color: ${secondaryColor};
            background-color: ${primaryColor};
            border-color: ${primaryColor};
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            transform: translate3d(0px, -1px, 0px);
        }
    `
}

const StyledButton = styled.button<Props>`
    ${(props: Props): string | null => props.fullWidth ? `
        width: 100%;
    ` : null};

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
    border: 1px solid ${Color.black};

    ${(props: Props): string | null => props.size === 'small' ? `
        height: 24px;
        line-height: 24px;
        font-size: 12px;
    ` : null}

    ${(props: Props): string | null => props.size === 'medium' ? `
        height: 34px;
        line-height: 34px;
        font-size: 14px;
    ` : null}

    ${(props: Props): string => getStyles(props)}

    ${(props: Props): string | null => props.disabled ? `
        filter: grayscale(1);
        cursor: not-allowed;

        &:hover {
            opacity: 0.3;
        }
    ` : null}

    ${(props: Props): string | null => props.loading ? `
        cursor: default;
        pointer-events: none;
    ` : null}
`

const Button: React.FC = (
    props: PropsWithChildren<Props>
) => {
    const { children, ...other } = props
    return <StyledButton {...other}>
        {props.loading && <Spinner/>}
        {children}
    </StyledButton>
}

Button.defaultProps = {
    kind: 'primary',
    color: 'black',
    size: 'large',
    disabled: false,
    loading: false,
    fullWidth: false
}

export default Button
