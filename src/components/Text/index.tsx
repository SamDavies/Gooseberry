import styled from 'styled-components'
import Color from '../../constants/colors'
import Font from '../../constants/fonts'
import AbstractText from '../AbstractText'

type Props = {
    size?: 'normal' | 'small';
    font?: Font;
    color?: Color;
    bold?: boolean;
    center?: boolean;
    uppercase?: boolean;
    italic?: boolean;
}

const Text = styled.div<Props>`
    ${AbstractText};
    font-size: ${(props: Props): string => props.size === 'small' ? '13px' : '16px'};
`

Text.defaultProps = {
    color: Color.blackText,
    font: Font.sansSerif,
    size: 'normal',
    bold: false,
    center: false,
    uppercase: false,
    italic: false
}

export default Text
