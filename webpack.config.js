var path = require('path')
var MyExampleWebpackPlugin = require('./src/plugins/index')
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
  },
  entry: '/src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new MyExampleWebpackPlugin()],
}
