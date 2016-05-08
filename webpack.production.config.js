const
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CompressionPlugin = require("compression-webpack-plugin"),
  env = process.env.NODE_ENV || 'production'


module.exports = {
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
      'redux-promise',
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name]-[hash].js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      }
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
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor-[hash].js"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css"),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "zopfli",
        test: /\.js$|\.html$/,
        minRatio: 0.8
    })
  ]
}
