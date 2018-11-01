const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')

const buildRollupConfig = ({ name, input, pkg }) => {
  const { dependencies = [], peerDependencies = [] } = pkg

  const external = [
    ...Object.keys(dependencies),
    ...Object.keys(peerDependencies),
  ]

  const plugins = [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      configFile: '../../babel.config.js',
    }),
  ]

  const cjs = {
    input,
    output: {
      file: `lib/${name}.js`,
      format: 'cjs',
      sourcemap: true,
    },
    external,
    plugins,
  }

  const es = {
    input,
    output: {
      file: `es/${name}.js`,
      format: 'es',
      sourcemap: true,
    },
    external,
    plugins,
  }

  return [cjs, es]
}

const config = buildRollupConfig({
  name: 'components',
  input: 'src/index.js',
  pkg: require('./package.json'),
})

export default config
