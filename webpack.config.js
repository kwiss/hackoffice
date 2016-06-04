var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader?' },
      { test: /\.svg$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', 'scss']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, require('node-neat').includePaths[0][0]),
      path.resolve(__dirname, require('node-neat').includePaths[1]),
      path.resolve(__dirname, require('node-normalize-scss').includePaths)
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
