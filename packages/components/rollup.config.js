const buildConfig = require('@selene/scripts/rollup')
const pkg = require('./package.json')

const config = buildConfig({
  name: 'components',
  pkg,
})

export default config
