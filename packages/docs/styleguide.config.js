const path = require('path')
const webpackConfig = require('./webpack.config')
const { getPkgRoot } = require('./utils')

const getComponentsSource = () => `${getPkgRoot('@selene/components')}/src`

const getComponentsGlob = () => `${getComponentsSource()}/**/[A-Z]*.jsx`

module.exports = {
  title: 'Selene',
  components: getComponentsGlob(),
  styleguideComponents: {
    Wrapper: path.join(__dirname, './components/Wrapper'),
  },
  webpackConfig,
}
