const merge = require('webpack-merge');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'vue-style-loader!less-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: 4,
        uglifyOptions: {
          warnings: false,
          compress: {
            warnings: false
          },
        },
      })
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-easy-polls-plugin.js',
      libraryTarget: 'window',
      library: 'VueEasyPolls',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vue-easy-polls.js',
      libraryTarget: 'umd',
      library: 'vue-easy-polls',
      umdNamedDefine: true
    }
  })
];
