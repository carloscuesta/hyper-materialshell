'use strict';

const foregroundColor = '#A1B0B8';
const borderColor = '#252525';
const oceanicColors = require('./colorschemes/oceanic.js');
const defaultColors = require('./colorschemes/regular.js');

const getColorScheme = cfg => {
	if (cfg.materialshell) {
		switch (cfg.materialshell.theme) {
			case 'oceanic': return oceanicColors;
			case 'dark': return defaultColors;
			default: return defaultColors;
		}
	}
};

exports.decorateConfig = config => {
	const colors = getColorScheme(config);
	const backgroundColor = colors.background;
	return Object.assign({}, config, {
		cursorColor: colors.palette.red,
		cursorShape: 'UNDERLINE',
		foregroundColor,
		backgroundColor,
		borderColor,
		css: `${config.css || ''}
		.tab_tab:before {border-left: 1px solid;}
		.tab_active {background: rgba(255,255,255,0.05);}
		.tab_active:before {border-color: ${colors.palette.red};}
		`,
		colors: colors.palette
	});
};
