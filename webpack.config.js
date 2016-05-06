var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: __dirname + "/app/main.js",
    vendor: [
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
    path: __dirname + "/build",
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
