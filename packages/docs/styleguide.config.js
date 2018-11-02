const path = require('path')
const webpackConfig = require('./webpack.config')

const getComponentsPath = () => {
  let p = require.resolve('@selene/components')
  p = p.substring(0, p.lastIndexOf('/'))
  return `${p}/src/**/[A-Z]*.jsx`
}

module.exports = {
  title: 'Selene',
  components: getComponentsPath(),
  styleguideComponents: {
    Wrapper: path.join(__dirname, './components/Wrapper'),
  },
  webpackConfig,
}
