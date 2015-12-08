module.exports = {
 entry: './entry.js',
 output: {
  path: './public',
  filename: 'bundle.js'
 },
 module: {
  loaders: [
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   { test: /\.(png|woff2)$/, loader: 'url-loader?limit=20000' },
   { test: /\.js$/, loader: 'babel-loader?presets[]=es2015', exclude: /node_modules/ }]
 }
}
