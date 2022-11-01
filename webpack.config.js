const path = require('path');
const HtmlWebpackPlugin = required('html-webpack-plugin');
module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js'
    }
}
module.exports = {
    mode: 'development',
  };