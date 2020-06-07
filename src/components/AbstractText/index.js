const AbstractText = props => `
    color: ${props.color};
    position: relative;
    line-height: 150%;
    font-family: ${props.font};
    font-weight: ${props.bold ? 'bold' : 'normal'};
    font-style: ${props.italic ? 'italic' : 'normal'};
    font-stretch: normal;
    text-transform: ${props.uppercase ? 'uppercase' : 'none'};
    text-align: ${props.center ? 'center' : 'left'};
`

export default AbstractText
