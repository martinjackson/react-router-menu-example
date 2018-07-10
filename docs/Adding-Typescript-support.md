
# Adding TypeScript support to your React/Webpack project

## 1. Install pieces give webpack the ability to handle TypeScript

```
npm i typescript awesome-typescript-loader -D
```

## 2. Install the packages to generate the types for React and React DOM.

```
npm i @types/react @types/react-dom -D
```

## 3. Create a TypeScript config file in the project directory __tsconfig.json__ to tell webpack where to direct its search for typescript files.

```
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react",
    "module": "commonjs",
    "noImplicitAny": true,
    "outDir": "./build/",
    "preserveConstEnums": true,
    "removeComments": true,
    "sourceMap": true,
    "noImplicitAny": true,
    "target": "es5"
  },
  "include": [
    "./src/**/*"
  ]
}
```

## 4. Add the following module rules to your webpack.config.js
```
          {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
          },          
```

[Reference](https://levelup.gitconnected.com/react-typescript-with-webpack-2fceebb8faf)
