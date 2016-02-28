const path = require('path');
const merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'src/public/js')
};

const common = {
  entry: [
    'babel-polyfill',
    './src/client-app'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          PATHS.app
        ],
        exclude: [
          path.join(__dirname, 'src/public'),
          path.join(__dirname, 'src/api'),
          path.join(__dirname, 'src/lib'),
          path.join(__dirname, 'src/views')
        ],
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
};

module.exports = merge(common, {});
