const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].bundle.js',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'public' }]),
    new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval',
};
