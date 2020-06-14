import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'
import AbstractText from '../AbstractText'

const Heading1 = styled.h1`
    ${AbstractText}
    font-size: 42px;
`

const Heading2 = styled.h2`
    ${AbstractText}
    font-size: 32px;
`

const Heading3 = styled.h3`
    ${AbstractText}
    font-size: 24px;
`

const Heading4 = styled.h4`
    ${AbstractText}
    font-size: 18px;
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

    return <Heading1 {...props}>
        {props.children}
    </Heading1>
}

Heading.propTypes = {
    color: PropTypes.string,
    font: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4]),
    bold: PropTypes.bool,
    center: PropTypes.bool,
    uppercase: PropTypes.bool,
    italic: PropTypes.bool,
    children: PropTypes.any.isRequired
}

Heading.defaultProps = {
    color: colors.blackText,
    font: fonts.sansSerifFont,
    level: 1,
    bold: false,
    center: false,
    uppercase: false,
    italic: false
}

export default Heading
