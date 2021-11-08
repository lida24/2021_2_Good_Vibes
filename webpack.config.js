const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './public/main.js',
  entry: './src/main.ts',
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      minify: {
        minifyCSS: true,
        minifyJS: true,
      },
    }),
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.handlebars', '.scss'],
    // alias: {
    //   // template: `${__dirname}/src/templates`,
    //   template: `${__dirname}/hood`,
    // },
  },
  module: {
    rules: [
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.handlebars$/, use: 'handlebars-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader',
      //     {
      //       loader: 'css-loader',
      //     },
      //     'postcss-loader',
      //     'sass-loader',
      //   ],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    // path: path.resolve(__dirname, './public/bundle'),
    path: path.resolve(__dirname, './dist'),
    filename: 'main_bundle.js',
  },
  mode: 'production',
};
