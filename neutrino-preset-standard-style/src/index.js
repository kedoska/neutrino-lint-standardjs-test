'use strict'

const path = require('path')
const lint = require('neutrino-lint-base')
const merge = require('deepmerge')

const MODULES = path.join(__dirname, '../node_modules')

module.exports = (neutrino) => {
  lint(neutrino)
  const { config } = neutrino
  config.module
    .rule('lint')
    .test(/\.(js|jsx)$/)
    .pre()
    .include(path.join(process.cwd(), 'src'))
    .loader('eslint', props => merge(props, {
      options: {
        plugins: ['babel'],
        baseConfig: {
          extends: ['standard', 'standard-jsx']
        }
      }
    }))
  config.resolve.modules.add(MODULES);
  config.resolveLoader.modules.add(MODULES);
}
