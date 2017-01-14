const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'public');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel',
    },
    {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass!toolbox'),
    }],
  },
  toolbox: { theme: 'app/theme/config.scss' },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
};

module.exports = config;
