const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map", 
  optimization: {
    // We no not want to minimize our code.
    //minimize: true
  },
};
