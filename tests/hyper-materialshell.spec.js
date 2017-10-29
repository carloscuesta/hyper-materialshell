/* global describe, expect, it */

const colors = require('../colorschemes/colors.js')
const oceanicTheme = require('../colorschemes/oceanic.js')
const darkTheme = require('../colorschemes/dark.js')
const theme = require('../index.js')
const stubs = require('./stubs.js')

describe('hyper-materialshell', () => {
  describe('theme', () => {
    it('should match the oceanicTheme when selected at the config file', () => {
      expect(theme.getColorScheme(stubs.oceanicConfig)).toEqual(oceanicTheme)
    })

    it('should match the darkTheme when selected at the config file', () => {
      expect(theme.getColorScheme(stubs.darkConfig)).toEqual(darkTheme)
    })

    it('should match the darkTheme as a default', () => {
      expect(theme.getColorScheme(stubs.defaultConfig)).toEqual(darkTheme)
    })

    it('should match for decorateConfig', () => {
      expect(theme.decorateConfig(stubs.defaultConfig)).toMatchSnapshot()
    })
  })

  describe('color schemes', () => {
    it('should match for the darkTheme color palette', () => {
      expect(darkTheme).toMatchSnapshot()
    })

    it('should match for the oceanicTheme color palette', () => {
      expect(oceanicTheme).toMatchSnapshot()
    })
  })

  describe('global colors', () => {
    it('should match for the global colors', () => {
      expect(colors).toMatchSnapshot()
    })
  })
})
