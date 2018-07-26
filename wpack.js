const webpack = require("webpack");

const config = require('./webpack.config.js');

config.mode = process.env.NODE_ENV || 'development';

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) console.error(err.details);
    process.exit(1);
  }

  const summary = stats.toString({chunks: false, colors: true});
  // remove lines with [built]
  const report = summary.split('\n').filter(line => !line.includes('[built]')).join('\n');
  process.stdout.write(report + '\n');

  if (stats.hasErrors()) {
    process.exit(2);
  }
});
