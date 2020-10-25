import noop from 'lodash/noop'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

export const StyledInput = styled.input`
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
    
    ${props => props.size === 'medium' && `
        margin-top: 0;
        margin-bottom: 0;
        font-size: 14px;
        padding: 4px 12px;
    `}
`

const cleanValue = (value, kind) => {
    if (kind === 'float') {
        return value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    }
    if (kind === 'int') {
        return value.replace(/\D/g, '')
    }
    return value
}

const Input = props => {
    const onChange = event => {
        const value = cleanValue(event.target.value, props.kind)
        props.onChange(value)
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
        onChange={onChange}
        {...(props.kind === 'int' ? intProps : {})}
        {...(props.kind === 'float' ? floatProps : {})}
    />
}

Input.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    kind: PropTypes.oneOf(['text', 'float', 'int']),
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string
}

Input.defaultProps = {
    size: 'large',
    kind: 'text',
    onChange: noop,
    value: '',
    type: 'text'
}

export default Input
