const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.ts',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      http: require.resolve('stream-http'),
      os: require.resolve('os-browserify/browser'),
      path: require.resolve('path-browserify'),
      buffer: require.resolve("buffer/"),
      url: require.resolve("url/"),
    },
  },
};