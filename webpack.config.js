const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const env = process.env.NODE_ENV || 'development';


module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: `${__dirname}/app/main.js`,
    vendor: [
      'blueimp-md5',
      'isomorphic-fetch',
      'material-ui',
      'promise-props',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-tap-event-plugin',
      'redux',
      'redux-promise',
      'redux-connect',
      'core-js',
      'redux-actions',
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    loaders: [
      {test: /\.json$/, loader: 'json'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, loader: 'style!css?modules!postcss'},
    ],
  },
  postcss: [autoprefixer],

  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': `'${env}'`}),
    new HtmlWebpackPlugin({template: `${__dirname}/app/index.tmpl.html`}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8000',
      },
    },
  },
}
