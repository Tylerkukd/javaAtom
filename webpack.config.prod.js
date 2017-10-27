import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {

  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vedor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
      // Use CommonsChunkPlugin to create a seperate bundle
      // of vendor libraries so that they're cached seperately
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      // Create HTML file that includes reference to bundled JS.
      new htmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          romoveComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        inject: true
      }),
      // Minify JS
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      })
   ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
