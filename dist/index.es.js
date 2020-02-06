import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

var colours = {
    white: '#fff',
    black: '#000',
    blackText: '#0f0f0f',
    grey8: '#fafafa',
    grey7: '#eaeaea',
    greyBorder: '#d0d0d0',
    grey6: '#999',
    grey5: '#888',
    grey4: '#666',
    grey3: '#444',
    grey2: '#333',
    grey1: '#111',
    squirt: '#008BF3'
};

var Button = styled.button.withConfig({
    displayName: 'Button',
    componentId: 'sc-1gkpwcg-0'
})(['appearance:none;position:relative;display:inline-flex;align-items:center;justify-content:center;text-align:center;text-decoration:none;line-height:38px;white-space:nowrap;font-weight:500;min-width:200px;height:50px;;padding:0 25px 0 25px;border-radius:5px;flex-shrink:0;margin:0;color:', ';background-color:', ';border:1px solid ', ';transition:all 0.2s ease;user-select:none;cursor:pointer;overflow:hidden;outline:none;--button-border:var(--geist-foreground);&:hover{color:', ';background-color:transparent;border-color:', ';}', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], colours.white, colours.black, colours.black, colours.black, colours.black, function (props) {
    return props.small && '\n        min-width: auto;\n        height: 24px;\n        line-height: 22px;\n        padding: 0 10px;\n    ';
}, function (props) {
    return props.medium && '\n        min-width: auto;\n        height: 32px;\n        line-height: 0;\n        font-size: 0.875rem;\n        padding: 6px 12px;\n    ';
}, function (props) {
    return props.ghost && '\n        color: ' + colours.grey5 + ';\n        background-color: transparent;\n        border-color: transparent;\n    \n        &:hover {\n            color: ' + colours.grey3 + ';\n            background-color: transparent;\n            border-color: transparent;\n        }\n    ';
}, function (props) {
    return props.frost && '\n        &:hover {\n            color: ' + colours.white + ';\n            background-color: ' + colours.grey2 + ';\n            border-color: ' + colours.grey2 + ';\n        }\n    ';
}, function (props) {
    return props.secondary && '\n        color: ' + colours.grey4 + ';\n        background-color: ' + colours.white + ';\n        border-color: ' + colours.grey7 + ';\n        \n        &:hover {\n            color: ' + colours.black + ';\n            background-color: ' + colours.white + ';\n            border-color: ' + colours.black + ';\n        }\n        \n        ' + (props.shadow && '\n            border-color: transparent;\n        ') + '\n    ';
}, function (props) {
    return props.shadow && '\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n        &:hover {\n            color: ' + colours.white + ';\n            background-color: ' + colours.black + ';\n            border-color: ' + colours.black + ';\n            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n            transform: translate3d(0px, -1px, 0px);\n        }\n    ';
}, function (props) {
    return props.white && '\n        color: ' + colours.black + ';\n        background-color: ' + colours.white + ';\n        border-color: ' + colours.white + ';\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n        \n        &:visited {\n            color: ' + colours.black + ';\n        }\n        \n        &:hover {\n            text-decoration: none;\n            color: ' + colours.black + ';\n            background-color: ' + colours.white + ';\n            border-color: ' + colours.white + ';\n            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n            transform: translate3d(0px, -1px, 0px);\n        }\n    ';
}, function (props) {
    return props.disabled && '\n        background: ' + colours.grey8 + ';\n        border-color: ' + colours.grey7 + ';\n        color: ' + colours.grey5 + ';\n        cursor: not-allowed;\n        filter: grayscale(1);\n        &:hover {\n            background: ' + colours.grey8 + ';\n            border-color: ' + colours.grey7 + ';\n            color: ' + colours.grey5 + ';\n        }\n        \n        ' + (props.shadow && '\n            &:hover {\n                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n                transform: unset;\n            }\n        ') + '\n    ';
}, function (props) {
    return props.loading && '\n        background: ' + colours.grey8 + ';\n        border-color: ' + colours.grey7 + ';\n        color: ' + colours.grey5 + ';\n        cursor: default;\n        pointer-events: none;\n        filter: grayscale(1);\n    ';
});

Button.propTypes = {
    frost: PropTypes.bool,
    ghost: PropTypes.bool,
    white: PropTypes.bool,
    secondary: PropTypes.bool,
    shadow: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool
};

Button.defaultProps = {
    frost: false,
    ghost: false,
    white: false,
    secondary: false,
    shadow: false,
    disabled: false,
    small: false,
    medium: false
};

var fonts = {
    serifFont: 'Georgia, Cambria, "Times New Roman", Times, serif',
    sansSerifFont: '-apple-system, BlinkMacSystemFont, sans-serif'
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n    html, div, button {\n        color: ', ';\n        font-size: 16px;\n        font-family: ', ';\n    \n    }\n    \n    p {\n        font-family: ', ';\n        text-rendering: optimizeLegibility;\n        color: ', ';\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 1.58;\n    }\n    \n    li {\n        font-family: ', ';\n        text-rendering: optimizeLegibility;\n        color: ', ';\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 1.58;\n    }\n    \n    h1 {\n        font-family: ', ';\n        font-size: 36px;\n        line-height: 40px;\n        font-weight: 500;\n    \n        @media (min-width: 1200px) {\n            font-size: 56px;\n            line-height: 64px;\n        }\n    }\n    \n    h2 {\n        font-family: ', ';\n        font-size: 32px;\n        font-weight: normal;\n        line-height: 1.58;\n    }\n    \n    h3 {\n        font-family: ', ';\n        font-size: 20px;\n        font-weight: 600;\n        line-height: 1.58;\n    }\n    \n    h4 {\n        font-family: ', ';\n        font-size: 20px;\n        font-weight: 600;\n        line-height: 1.58;\n    }\n    \n    h5 {\n        font-family: ', ';\n        font-size: 20px;\n        margin-top: 5px;\n        font-weight: 600;\n    }\n    \n    h6 {\n        font-family: ', ';\n        font-weight: 100;\n        font-size: 10px;\n    }\n    \n    a:visited {\n        color: ', ';\n    }\n    \n    a {\n        color: ', ';\n    }\n'], ['\n    html, div, button {\n        color: ', ';\n        font-size: 16px;\n        font-family: ', ';\n    \n    }\n    \n    p {\n        font-family: ', ';\n        text-rendering: optimizeLegibility;\n        color: ', ';\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 1.58;\n    }\n    \n    li {\n        font-family: ', ';\n        text-rendering: optimizeLegibility;\n        color: ', ';\n        font-size: 20px;\n        font-weight: 400;\n        line-height: 1.58;\n    }\n    \n    h1 {\n        font-family: ', ';\n        font-size: 36px;\n        line-height: 40px;\n        font-weight: 500;\n    \n        @media (min-width: 1200px) {\n            font-size: 56px;\n            line-height: 64px;\n        }\n    }\n    \n    h2 {\n        font-family: ', ';\n        font-size: 32px;\n        font-weight: normal;\n        line-height: 1.58;\n    }\n    \n    h3 {\n        font-family: ', ';\n        font-size: 20px;\n        font-weight: 600;\n        line-height: 1.58;\n    }\n    \n    h4 {\n        font-family: ', ';\n        font-size: 20px;\n        font-weight: 600;\n        line-height: 1.58;\n    }\n    \n    h5 {\n        font-family: ', ';\n        font-size: 20px;\n        margin-top: 5px;\n        font-weight: 600;\n    }\n    \n    h6 {\n        font-family: ', ';\n        font-weight: 100;\n        font-size: 10px;\n    }\n    \n    a:visited {\n        color: ', ';\n    }\n    \n    a {\n        color: ', ';\n    }\n']);

var GlobalTypography = createGlobalStyle(_templateObject, colours.blackText, fonts.sansSerifFont, fonts.serifFont, colours.blackText, fonts.serifFont, colours.blackText, fonts.serifFont, fonts.serifFont, fonts.serifFont, fonts.serifFont, fonts.serifFont, fonts.serifFont, colours.squirt, colours.squirt);

export { colours, Button, GlobalTypography };
//# sourceMappingURL=index.es.js.map
