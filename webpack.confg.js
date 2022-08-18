const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = {
    module: {
      loaders: [
        // This applies the loader to all of your dependencies,
        // and not any of the source files in your project:
        {
          test: /node_modules/,
          loader: 'ify-loader'
        }
      ]
    }
  }