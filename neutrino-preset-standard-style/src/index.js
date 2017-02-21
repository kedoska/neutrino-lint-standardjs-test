const path = require('path')

module.exports = neutrino => {
  neutrino.config.module
    .rule('lint')
    .pre()
    .test(/\.jsx?$/)
    .include(path.join(process.cwd(), 'src'))
    .loader('standard', require.resolve('standard-loader'), {
      snazzy: false,
      emitErrors: true
    })
}