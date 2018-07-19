const madge = require('madge');

/*
taken from madge/api.js

const defaultConfig = {
	baseDir: null,
	excludeRegExp: false,
	fileExtensions: ['js'],
	includeNpm: false,
	requireConfig: null,
	webpackConfig: null,
	rankdir: 'LR',
	layout: 'dot',
	fontName: 'Arial',
	fontSize: '14px',
	backgroundColor: '#111111',
	nodeColor: '#c6c5fe',
	nodeShape: 'box',
	nodeStyle: 'rounded',
	noDependencyColor: '#cfffac',
	cyclicNodeColor: '#ff6c60',
	edgeColor: '#757575',
	graphVizOptions: false,
	graphVizPath: false,
	dependencyFilter: false
};
*/

const config = {
	backgroundColor: '#E0E0E0',
	noDependencyColor: '#66CE9D',
	edgeColor: '#339B6A',
	nodeColor: '#006837'
};

madge('../src/index.js', config)
	.then((res) => res.image('custom-image.svg'))
	.then((writtenImagePath) => {
		console.log('Image written to ' + writtenImagePath);
	});
