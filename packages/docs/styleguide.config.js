// const path = require('path')
const webpackConfig = require('./webpack.config')

module.exports = {
  title: 'Selene',
  components: '../components/src/**/[A-Z]*.jsx',
  // styleguideComponents: {
  //   Wrapper: path.join(__dirname, "./components/Wrapper")
  // },
  webpackConfig,
}
