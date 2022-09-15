const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/dist'),
      publicPath: '/dist',
    },
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
        ,
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
      // {
      //   test: /scss$/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  stats: { children: true }
};
