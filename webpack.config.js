module.exports = {
  entry: './static/boot.ts',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  debug: true,
  resolve: {
    modulesDirectories: ['node_modules'],
    root: './static',
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
    noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/]
  }
};
