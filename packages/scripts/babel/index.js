const { MODULES_FORMAT } = process.env

const format = {
  esm: false,
  cjs: 'commonjs',
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { modules: format[MODULES_FORMAT], loose: true, useBuiltIns: 'entry' },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        fileName: false,
      },
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
  ],
}
