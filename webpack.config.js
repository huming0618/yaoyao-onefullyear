module.exports = {
  entry: './app/index.js',
  module: {
    loaders: [
        // That will tell Webpack that EaselJS refers to `window` with `this` and exports `window.createjs`.
        { test: /node_modules\/createjs-easeljs\/.*\.js$/, loader: 'imports?this=>window!exports?window.createjs' }
    ]
  },
  output: {
    path: 'dist/',
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  }
};
