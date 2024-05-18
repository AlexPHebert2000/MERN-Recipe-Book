const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIST_PATH = path.resolve(__dirname, 'client/dist')
const SRC_PATH = path.resolve(__dirname, 'client/src/index.js')
const TEMPLATE_PATH = path.resolve(__dirname, 'client/index.html')

module.exports = {
  mode: 'development',
  entry: SRC_PATH,
  output: {
    path: DIST_PATH,
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: TEMPLATE_PATH})
  ]
};
