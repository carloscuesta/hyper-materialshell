'use strict';

const backgroundColor = '#151515';
const foregroundColor = '#A1B0B8';
const borderColor = '#252525';
const fonts = 'Consolas, "Source Code Pro", monospace';
const fontSize = '15';

const black = '#252525';
const red = '#FF5252';
const green = '#C3D82C';
const yellow = '#FFC135';
const blue = '#42A5F5';
const magenta = '#D81B60';
const cyan = '#00ACC1';
const white = '#F5F5F5';
const lightBlack = '#708284';
const lightRed = '#FF5252';
const lightGreen = '#C3D82C';
const lightYellow = '#FFC135';
const lightBlue = '#42A5F5';
const lightMagenta = '#D81B60';
const lightCyan = '#00ACC1';
const lightWhite = '#F5F5F5';

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        cursorColor: red,
        cursorShape: 'UNDERLINE',
        foregroundColor: foregroundColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        fontSize: `${fontSize}px`,
        fontFamily: fonts,
        css: `${config.css || ''}
        .tab_tab:before {border-left: 1px solid;}
        .tab_active {background: rgba(255,255,255,0.05);}
        .tab_active:before {border-color: ${red};}
        `,
        colors: {
            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            white,
            lightBlack,
            lightRed,
            lightGreen,
            lightYellow,
            lightBlue,
            lightMagenta,
            lightCyan,
            lightWhite,
        }
    });
};
