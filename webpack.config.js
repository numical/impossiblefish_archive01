module.exports = {
 entry: './entry.js',
 output: {
  path: './build',
  filename: 'bundle.js'
 },
 module: {
  loaders: [
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   { test: /\.(png|woff2)$/, loader: 'url-loader?limit=100000000' }
  ]
 }
}
