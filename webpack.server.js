const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const WebpachNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we a building a bundle for node rather than webpack
  target: 'node',
  // tell webpack the root file for our server application
  entry: './src/server/index.js',
  // Tell webpack where to put the output that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [WebpachNodeExternals()]
}

module.exports = merge(baseConfig, config);