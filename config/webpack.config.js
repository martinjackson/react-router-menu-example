const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
        path: path.resolve(__dirname, '../server/public/'),
        filename: 'bundle.js'
    },
  resolve:{
    modules: [
      path.join(__dirname, "src"),
    "node_modules" ]
    },
  devServer: {

     // dont include boolean equivalent of these commandline switches, it will not work here
     // these are in the package.json where the following is executed
     //  webpack-dev-server --devtool eval-source --progress --colors --hot --inline --history-api-fallback

     host: '0.0.0.0',     // allow more than localhost
     port: 8080,
     contentBase: './server/public/',

     // allow NodeJS to run side-by-side with webpack-dev-server
     proxy: {  '/api/*': 'http://localhost:8081/' }   // <- backend
  },
  module: {
    loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                      presets: ['es2015', 'react']
                   },
          },

          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          },

          // "file" loader for svg
          {
             test: /\.svg|\.png|\.gif|\.jpg$/,
             loader: 'file-loader',
             query: {
               name: 'static/media/[name].[hash:8].[ext]'
             }
          },

          // JSON is not enabled by default in Webpack but both Node and Browserify
          // allow it implicitly so we also enable it.
          {
             test: /\.json$/,
             loader: 'json-loader'
          }

    ]
  }
}
