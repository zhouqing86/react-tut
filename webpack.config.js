var HTMLWebpackPlugin = require('html-webpack-plugin');

var config = {
   entry: [
      './src/index.js'
   ],

   output: {
      path: __dirname + '/dist',
      publicPath: 'http://localhost:8080/', //publicPath可以是url,也可以是目录如/assets/
      filename: 'index.js'
   },

   devServer: {
      inline: true,
      port: 8080
   },

   plugins: [
      new HTMLWebpackPlugin({
         template: './public/index.html'
      })
   ],

   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
};

module.exports = config;
