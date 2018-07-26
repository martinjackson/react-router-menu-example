const webpack = require("webpack");
const config = require('./webpack.config.js');

config.mode = process.env.NODE_ENV || 'development';
const compiler = webpack(config);

const toSkip = (line) => {
  return  line.includes('[built]') || line.includes('Hash:') || line.includes('Version:') || line.includes('Time:') 
}

const minimal = (summary) => {
  const report = summary.split('\n').filter(line => !toSkip(line)).join('\n') + '\n';
  return(report);
}

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) console.error(err.details);
    process.exit(1);
  }

  const summary = stats.toString({chunks: false, colors: true});
  process.stdout.write(minimal(summary));

  if (stats.hasErrors()) {
    process.exit(2);
  }
});
