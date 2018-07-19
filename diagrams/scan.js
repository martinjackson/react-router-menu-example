const madge = require('madge');

madge('../src/index.js').then((res) => {
	console.log(res.obj());
        console.log('-------------------------------------------');
	console.log(res);
        console.log('-------------------------------------------');
	console.log(res.orphans());
});
