const colors = require('./colorschemes/colors.js')
const oceanicTheme = require('./colorschemes/oceanic.js')
const darkTheme = require('./colorschemes/dark.js')

const getColorScheme = (cfg) => {
  if (cfg.materialshell) {
    switch (cfg.materialshell.theme) {
      case 'oceanic': return oceanicTheme
      case 'dark': return darkTheme
      default: return darkTheme
    }
  }
}

const decorateConfig = (config) => {
  const theme = getColorScheme(config) || darkTheme

  return Object.assign({}, config, {
    cursorColor: theme.palette.red,
    foregroundColor: colors.foregroundColor,
    backgroundColor: theme.background,
    borderColor: colors.black,
    css: `${config.css || ''}
        .tab_tab:before {border-left: 1px solid;}
        .tab_active {background: rgba(255,255,255,0.05);}
        .tab_active:before {border-color: ${theme.palette.red};}
    `,
    colors: theme.palette
  })
}

module.exports = {
  decorateConfig,
  getColorScheme
}
