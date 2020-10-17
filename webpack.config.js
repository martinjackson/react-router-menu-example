const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}

// instead of @babel/polyfill
require("core-js/stable");
require("regenerator-runtime/runtime");

/*
add the following if you want hash to be included in the file name
  output: {
        chunkFilename: '[name]-[chunkhash].js'
    },
*/

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
        path: resolve('./public/'),
        filename: '[name].js',
    },
  externals: {
      'react': 'React', // Case matters here
      'react-dom' : 'ReactDOM' // Case matters here
    },
    performance : {
      hints : false
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          },
        },
      },
    },
  devtool: 'source-map',
  resolve:{
    extensions: ['.tsx','.ts','.js'],
    modules: [ resolve('src'), "node_modules" ],
    fallback: { "path": require.resolve("path-browserify") }
    },
  devServer: {
     historyApiFallback: true,
     host: '0.0.0.0',     // allow more than localhost
     port: 8080,
     contentBase: ['./src/','./public/','./public/assets/'],
     proxy: {  '/api/*': 'http://localhost:8081/' },   // <- backend
     stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  },
  module: {
    rules: [
          {
            test: /^(?!.*\.{test,min}\.js$).*\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              configFile: './babel.config.js'
            }
          },

          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },

          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          },

          // "file" loader for svg
          {
             test: /\.svg|\.png|\.gif|\.jpg$/,
             loader: 'file-loader',
             options: {
              name: '[path][name].[ext]',
            },
          },

          {
            test: /\.html$/,
            loader: 'raw-loader'
          }
    ]
  }
}
