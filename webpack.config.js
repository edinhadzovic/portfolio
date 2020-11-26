const path = require("path");
const yaml = require("yamljs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Edin Hadzovic | Full-Stack Developer | Portfolio',
      cache: false,
      template: './src/app.page.ejs'
    }),
  ],
  watch: true,
  watchOptions: {
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};