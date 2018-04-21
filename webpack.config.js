const myEnv = require('dotenv-webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new myEnv()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  node: {
    fs: 'empty'
  }
};
