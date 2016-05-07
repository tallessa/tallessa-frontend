const
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CompressionPlugin = require("compression-webpack-plugin"),
  env = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: __dirname + "/app/main.js",
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
      'redux-logger',
      'redux-promise',
      'redux-thunk',
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css?modules!postcss' }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${env}"`,
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
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
