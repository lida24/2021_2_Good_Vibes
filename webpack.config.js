const path = require('path');

module.exports = {
  entry: './public/main.js',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.handlebars$/, use: 'handlebars-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname, './public/bundle'),
    filename: 'main_bundle.js'
  },
  mode: 'production'
};
