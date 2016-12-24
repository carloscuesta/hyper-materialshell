'use strict';

const foregroundColor = '#A1B0B8';
const borderColor = '#252525';
const oceanicColors = require('./colorschemes/oceanic.js');
const defaultColors = require('./colorschemes/regular.js');

exports.decorateConfig = config => {
	let colors;
	if (config.materialshell && config.materialshell.theme === 'oceanic') {
		colors = oceanicColors;
	} else {
		colors = defaultColors;
	}
	const backgroundColor = colors.background;
	return Object.assign({}, config, {
		cursorColor: colors.red,
		cursorShape: 'UNDERLINE',
		foregroundColor,
		backgroundColor,
		borderColor,
		css: `${config.css || ''}
		.tab_tab:before {border-left: 1px solid;}
		.tab_active {background: rgba(255,255,255,0.05);}
		.tab_active:before {border-color: ${colors.red};}
		`,
		colors: colors.palette
	});
};
