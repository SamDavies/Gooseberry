import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import variables from '../../constants/fonts'

const StyledText = props => `
    font-family: ${variables.sansSerifFont};
    font-weight: ${props.bold ? 800 : 400};
    font-style: ${props.italic ? 'italic' : 'normal'};
    text-transform: ${props.uppercase ? 'uppercase' : 'none'};
    margin-top: 0.67em;
    margin-bottom: 0.67em;
`

const Heading1 = styled.h1`
    ${StyledText}
    font-size: 42px;
`

const Heading2 = styled.h1`
    ${StyledText}
    font-size: 32px;
`

const Heading3 = styled.h2`
    ${StyledText}
    font-size: 24px;
`

const Heading4 = styled.h3`
    ${StyledText}
    font-size: 18px;
`

const Heading5 = styled.h4`
    ${StyledText}
    font-size: 16px;
`

const Heading = props => {
    if (props.level === 2) {
        return <Heading2 {...props}>
            {props.children}
        </Heading2>
    }

    if (props.level === 3) {
        return <Heading3 {...props}>
            {props.children}
        </Heading3>
    }

    if (props.level === 4) {
        return <Heading4 {...props}>
            {props.children}
        </Heading4>
    }

    if (props.level === 5) {
        return <Heading5 {...props}>
            {props.children}
        </Heading5>
    }

    return <Heading1 {...props}>
        {props.children}
    </Heading1>
}

Heading.propTypes = {
    level: PropTypes.number.isRequired,
    bold: PropTypes.bool,
    uppercase: PropTypes.bool,
    italic: PropTypes.bool,
    children: PropTypes.any.isRequired
}

Heading.defaultProps = {
    size: 'normal',
    bold: false,
    italic: false,
    uppercase: false
}

export default Heading
