import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import fonts from '../../constants/fonts'
import AbstractText from '../AbstractText'

const Normal = styled.div`
    ${AbstractText}
    font-size: 16px;
`

const Small = styled.div`
    ${AbstractText}
    font-size: 13px;
`

const Text = props => {
    if (props.size === 'small') {
        return <Small {...props}>
            {props.children}
        </Small>
    }

    return <Normal {...props}>
        {props.children}
    </Normal>
}

Text.propTypes = {
    colour: PropTypes.string,
    font: PropTypes.string,
    size: PropTypes.oneOf(['normal', 'small']),
    bold: PropTypes.bool,
    center: PropTypes.bool,
    uppercase: PropTypes.bool,
    italic: PropTypes.bool,
    children: PropTypes.any.isRequired
}

Text.defaultProps = {
    colour: colors.blackText,
    font: fonts.sansSerifFont,
    size: 'normal',
    bold: false,
    center: false,
    uppercase: false,
    italic: false
}

export default Text
