const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        // Setting css-scss and css/scss-modules
        test: /\.(css|scss)$/,
        exclude: /node_modules/,

        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                compileType: 'module',
                mode: 'local',
                auto: true,
                exportGlobals: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // load process.env for browser mode
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    // new ErrorOverlayPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    hot: true,
    port: 3000,
    // Routing to react-router-dom
    historyApiFallback: true,

    // diplay overlay errors
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  // devtool: 'cheap-module-source-map', // overlay Error plugin asks for this devtool option
  devtool: 'eval-source-map',
};
