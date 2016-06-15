'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: __dirname,
    filename: 'src/main/resources/mrkm4ntr/gitbucket/network/controller/bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['stage-0', 'es2015', 'react'],
          plugins: ['transform-object-assign']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
