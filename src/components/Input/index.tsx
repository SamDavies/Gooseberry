import noop from 'lodash/noop'
import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import StyledProps from '../../types/StyledProps'

type StyledInputElementProps = {
    inputSize?: 'large' | 'medium';
}

export const StyledInput = styled.input<StyledInputElementProps>`
    width: 100%;
    font-size: 16px;
    padding: 12px 20px;
    box-sizing: border-box;
    background-color: ${colors.grey8};
    border: 1px solid ${colors.greyBorder};
    transition: 0.3s;
    outline: none;
    line-height: 24px;
    border-radius: 5px;
    margin-top: 8px;
    margin-bottom: 8px;
    
    &[type=text] {   
        appearance: none;   
    }
    
    &:focus {
       border-color: ${colors.grey1}; 
    }
    
    ${(props): string | false => props.inputSize === 'medium' && `
        margin-top: 0;
        margin-bottom: 0;
        font-size: 14px;
        padding: 4px 12px;
    `}
`

const cleanValue = (value: string, kind: string): string => {
    if (kind === 'float') {
        return value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }
    if (kind === 'int') {
        return value.replace(/\D/g, '')
    }
    return value
}

type Props = {
    inputSize?: 'large' | 'medium';
    kind?: 'text' | 'float' | 'int';
    onChange?: (value: string) => void;
}

type StyledInputProps = React.InputHTMLAttributes<HTMLInputElement> & StyledProps
type InputProps = Props & Omit<StyledInputProps, keyof Props>

const Input: React.FC<InputProps> = (
    {
        onChange = noop,
        kind = 'text',
        ...props
    }: InputProps
) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = cleanValue(event.target.value, kind)
        onChange(value)
    }

    const intProps = {
        inputmode: 'numeric',
        pattern: '[0-9]*',
        type: 'text'
    }

    const floatProps = {
        inputmode: 'decimal',
        pattern: '[0-9]+([\\.,][0-9]+)?',
        type: 'text'
    }

    return <StyledInput
        {...props}
        onChange={handleChange}
        {...(kind === 'int' ? intProps : {})}
        {...(kind === 'float' ? floatProps : {})}
    />
}

export default Input
