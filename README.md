

## webpack cli shortcuts used in this project

| --watch, -w | Watch the filesystem for changes |
| -d | --debug --devtool cheap-module-eval-source-map --output-pathinfo |
| -p | 	--optimize-minimize --define process.env.NODE_ENV="production", see building for production |


##  Dependancies

Uses NCTR's local repository
```
 npm set registry http://dev.nctr.fda.gov:4873
 -- or --
 yarn config set registry http://dev.nctr.fda.gov:4873 -g
```

## Available Scripts

In the project directory, you can run:

### `npm start`   (runs in parallel `npm run:react` and `npm run:server`)

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs a node server in the development mode.<br>
This supply an API used by the application.
Open [http://localhost:3001](http://localhost:3001) to test it seperately in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

**Martin Note:** I don't like all the separate files this create-react-app script generated.  The config directory contains an alternative way to build for production. (see npm run dist)


### `npm run dist`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
