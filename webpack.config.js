var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    app: __dirname + '/app/main.js',
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

  resolve: {
    root: __dirname + '/app'
  },

  output: {
<<<<<<< HEAD
    path: __dirname + '/build',
    filename: 'bundle.js'
=======
    path: __dirname + "/dist",
    filename: "bundle.js"
>>>>>>> 6ff75b9c5f10e47ad4ff68d60a0d6ab2f1f45bc4
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css?modules!postcss' }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    })
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
