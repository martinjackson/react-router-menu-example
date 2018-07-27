
# React-Node-Example

## Description

This is a example project: React FrontEnd and Node API back end.

It is using code from Djyde's [react-router-menu](https://github.com/djyde/react-router-menu), but
upgraded to use React-Router 4.x, React 16.x.  I haven't given the code changes back to his project.

The project is split into **_two_** sections:

- **Front-End** Single Page App with React, React-Router, React-Router-Menu components.  <br/>These modules can be found in `src/` directory.
- **Back-End** NodeJS, Express, API logic needed by application.  <br/>These modules can be found in `server/` directory.

## Getting Started

- __Clone this project__

```bash
  cd ~/projects
  git clone https://github.com/martinjackson/react-node-example.git
  cd react-node-example
```

- __yarn setup__ (or npm run setup) to fetch all the project's dependencies

for __*both*__ the __Front-End__ and the __Back-End__

```bash
  yarn setup    (or npm run setup)
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`   (live development environment)

Runs the app in the development mode with every source file save being hot-loaded into the Browser

The builds back-end and front-end; both are run in parallel
and both source directories are watched for changes.

- **"build:front-end"**:
   runs webpack-dev-server on Port 8080
   (will launch the browser http://localhost:8080)

- **"build:back-end"**:
   starts the API server (Nodejs/Express) on port 8081
   so anything /api/ the webpack dev server will forward the request to port 8081 for a response


### `yarn start`   (near production testing)

- builds the bundle.js with sourcemap and debug info
- runs the server for API calls and serving the application (`yarn server`).
- waiting on you to run `yarn run browser'

### `yarn run browser`   (near production testing, launch the browser)

### `yarn run pack` (prep for a production release)

like `yarn run build:front-end`, but optimizes the bundle.js for the best performance.  The build is minified and your app is ready to be deployed!

----------------

## Project Structure

```bash
$ tree -I node_modules
.
├── package.json                  project's npm requirements and scripts
├── README.md                     This introduction
├── server
│   ├── package.json              seperate project dependancies for the back-end
│   ├── public
│   │   ├── bundle.js             built by webpack from src/*.js
│   │   ├── bundle.js.map         sourcemaps built by webpack   
│   │   └── index.html            starter html
│   └── server.js                 logic for NodeJS back-end
├── src
│   ├── index.js                  Front-end entry
│   ├── index.css                 style modification from default menu colors
│   ├── HelloWorld.tsx            example TypeScript React Component
│   ├── Page.js                   React Component asking server API for markdown file
│   ├── ReactRouterMenu.js        code modified from react-route-menu
│   └── Status.js                 React Component asking server API for live JSON
├── tsconfig.json                 TypeScript config for webpack
├── webpack.config.js             config file for webpack
└── wpack.js                      an equivalent to `npx webpack -d --mode development --progress` with a briefer output

```

----------------

### webpack cli shortcuts used in this package.json scripts section

| Shortcut    | Replaces                         |
| ----------- | -------------------------------- |
| -w          | --watch                          |
| -d          | --debug --devtool cheap-module-eval-source-map --output-pathinfo |
| -p          | 	--optimize-minimize --define process.env.NODE_ENV="production", see building for production |

### Yarn tips

> info There appears to be trouble with your network connection. Retrying...

```bash
yarn install --network-timeout 1000000
```