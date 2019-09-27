var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'lower-case.js',
    library: 'toLowerCase',
    libraryTarget: 'umd'
  }
}