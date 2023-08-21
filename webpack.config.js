const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      components: path.resolve(__dirname, 'src/components/'),
      UI: path.resolve(__dirname, 'src/UI/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      routes: path.resolve(__dirname, 'src/routes/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ESLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/favicon.png', to: 'favicon.png' }],
    }),
  ],
  devServer: {
    static: ['./dist', './public'],
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
};
