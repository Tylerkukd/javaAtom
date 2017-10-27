import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
export default {

  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new htmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
      // new webpack.LoaderOptionsPlugin({
      //  debug: true,
      //  noInfo: false
     //})
   ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
