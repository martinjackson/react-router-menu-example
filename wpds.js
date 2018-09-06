// node.js server used to serve assets bundled by Webpack
// use `npm start` command to launch the server.

// Equivalent to 
// webpack-dev-server --mode development --hot 
// except the output is in a format easier for VS Code Tasks to parse

// Ref notes :
// https://github.com/zinserjan/webpack-logging-plugin/blob/master/src/util/registerCompilerCallbacks.js
//  formatWebpackMessages(stats.toJson({}, true)) );

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

class MyWebpackFourPlugin {
    apply(compiler) {
        compiler.hooks.invalid.tap("MyWebpackFourPlugin", (fname) => {
            // console.log('[Rebuilding]', fname);        // Needs to be rebuilt
        });

        compiler.hooks.failed.tap("MyWebpackFourPlugin", (error) => {
            console.log('[Failed]', error);            

        });

        compiler.hooks.done.tap("MyWebpackFourPlugin", (stats) => {
            if (stats.hasErrors()) {
                stats.compilation.entries.forEach(item => {
                    console.log(item);                    
                    if (item.error && item.error.error && item.error.error.error) {
                        const info = item.error.error.error
                        console.log('[Error]', info.message) // , info.loc.line, info.loc.column) 
                        }
                    });                
                }        
            console.log('=======================')

        });
    }
}

const config = require('./webpack.config.js');
config.mode = process.env.NODE_ENV || 'development';
config.plugins.push(new MyWebpackFourPlugin());
// config.plugins.push(new WebpackBuildLogger());

console.log('Starting the dev web server...');
const port = 8080;
const path = require('path');

const options = {
  publicPath: config.output.publicPath,
  hot: true,
  // inline: true,
  // stats: { colors: true }

  contentBase: './server/public/',
  open: true,
  clientLogLevel: 'none',
  stats: 'errors-only',
};


const server = new WebpackDevServer(webpack(config), options);

server.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('WebpackDevServer listening at localhost:', port);
});



