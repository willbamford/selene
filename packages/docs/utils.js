const getPkgRoot = name => {
  const root = require.resolve(`${name}/package.json`)
  return root.substring(0, root.lastIndexOf('/'))
}

module.exports = {
  getPkgRoot,
}
