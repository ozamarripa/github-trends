const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([
      {from: 'index.html', to: 'index.html'}
    ])
  ]
};
