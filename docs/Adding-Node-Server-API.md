

## Prerequisites

- You already have the latest node, npm (or yarn), and atom editor installed.
- You have already created your project using the `create-react-app` command.

as of this writing

| | |
| ----- | ------ |
| node | v6.9.4 |
| npm | 3.10.10 |
| yarn | v0.19.1 |
| atom | 1.13.0 |

## Adding Node to serve an API behind your React frontend
__create-react-app__ already has __Webpack Development Server__ running on port 3000 and serving up live changes to the front end.

We just need a few changes to your project:

1) Add the proxy configuration inside package.json
```
"proxy": "http://localhost:3001/",
```
2) add the `babel-node` command to launch the server.js **(with ES6!)**
```
yarn add babel-cli    (npm install --save babel-cli)
yarn add --dev babel-watch  (npm install --save-dev babel-watch)
```

3) Since we will need two thing running at the same time.
```
yarn add npm-run-all --dev    (npm install --save-dev npm-run-all)
```
4) In the `package.json`'s script section, change

 ~~"start"~~"run:react": "react-scripts start", <br/>
 "run:server": "cd server ; babel-watch server.js", <br/>
 "start": "npm-run-all --parallel run:*",



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
