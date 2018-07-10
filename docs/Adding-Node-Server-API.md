# Adding a Node server API behind your React FrontEnd


## Prerequisites

- You already have the latest node, npm (or yarn) installed.
- You already have Atom Editor (or VSCode Editor) installed.
- You have already created your project using the `create-react-app` command.

Since this writing, these notes have been tested on the following version range:

| | |
| ----- | ------ |
| node | v6.9.4 -> 10.6.0 |
| npm | 3.10.10 -> 6.1.0 |
| yarn | v0.19.1 -> 1.7.0 |
| atom | 1.13.0 -> 1.28.1 |

__create-react-app__ already has __Webpack Development Server__ running on port 3000 and serving up live changes to the front end.

We just need a few changes to your project:

#### 1) Add the proxy configuration inside package.json
```
"proxy": "http://localhost:3001/",
```
#### 2) add the `babel-node` command to launch the server.js **(with ES6!)**
```
yarn add babel-cli          (npm install --save babel-cli)
yarn add --dev babel-watch  (npm install --save-dev babel-watch)
```

#### 3) Since we will need two thing running at the same time.
```
yarn add npm-run-all --dev  (npm install --save-dev npm-run-all)
```
#### 4) In the `package.json`'s script section, change

 ~~"start"~~ "run:react": "react-scripts start", <br/>
 "run:server": "cd server ; babel-watch server.js", <br/>
 "start": "npm-run-all --parallel run:*",


#### 5) create a server directory

```bash
cd server
cd server/public
```

```bash
$ tree
.
├── docs
├── server           (BackEnd: server.js package.json for server dependancies)
│   └── public       (webpack will create a bundle.js for a single index.html)
└── src              (FrontEnd: Client Code, React Components, etc)

```

__server/server.js__
```javascript
var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs');

var port = parseInt(process.argv[2] || '3001', 10);
app.set('port', port);

var home = path.join(__dirname, 'public');
app.use(express.static(home));

// needed for when a form posts a JSON encoded body
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var server = http.createServer(app);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port')+" serving "+home);
});


// Human viewable
app.get('/api/hello/:name', function (req, res) {
  var now = new Date().toLocaleString();
  res.send(`Hello <strong>${req.params.name}</strong> on <em>${now}</em> from <strong>${req.headers.host}</strong>`);
});

```

__server/package.json__
```json
{
  "name": "serverside",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "babel-watch": "^2.0.6",
    "body-parser": "^1.16.0",
    "express": "^4.14.0"
  },
  "devDependencies": {
    "babel-cli": "^6.24.0",
    "babel-watch": "^2.0.6",
    "nodemon": "^1.17.5"
  },
  "scripts": {
    "run:server": "babel-watch server.js",
    "run:prod": "babel-node server.js"
  }
}
```

__server/public/index.html__
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="your_app.ico">
    <title>Test of React FrontEnd with Node Backend</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>

```
#### FINALLY) Tying everything together

__*project home*/webpack.config.js__
```javascript
module.exports = {
  entry: './src/index.js',                 // Where the React Single Page App starts
  output: {
        path: resolve('./server/public/'), // Where the server will server up static content
        filename: 'bundle.js'
    },
```

#### Notes:
[using-create-react-app-with-a-server]: https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/


Yarn is a faster version of the npm command. Both go to the NPM repository.

| NPM | Yarn |
| ---------- | ------------ |
npm install  | yarn install
npm install --save [package] | yarn add [package]
npm install --save-dev [package] | yarn add [package] --dev
npm install --global [package] | yarn global add [package]
npm start | yarn run start |
