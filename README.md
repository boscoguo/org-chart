# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project structure 

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── chartNode
│   │   ├── orgChart
│   │   └── service
│   ├── data
│   │   └── data.json
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── utils
│       ├── dataAdaptor.test.ts
│       ├── dataAdaptor.ts
│       ├── jsonDiggerUtils.test.ts
│       └── jsonDiggerUtils.ts
├── tree.text
└── tsconfig.json

8 directories, 23 files

```

## `After clone the project`

In the project directory, please run:


### `npm install`

In order to install all dependencies that the project needs to use


## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Project Introduction`
This application is a draggable orgnization chart. There are three states for this chart including the initial state, the mouse hover state and drag and drop state.

#### `the intial state`

1. Show on chrome 
<img width="1148" alt="屏幕快照 2021-10-04 下午11 31 32" src="https://user-images.githubusercontent.com/20954764/135851823-37089ccd-1753-489f-a3aa-d0eb18e8e2d2.png">

2. Show on firefox
<img width="1444" alt="屏幕快照 2021-10-04 下午11 29 40" src="https://user-images.githubusercontent.com/20954764/135851496-3068268a-85f9-4408-a3bf-4a05a22d24f7.png">

#### `hover state`

1. Hover effect on chrome

2. Hover effect on firefox

#### `drag and drop state`

1. When drag an item or the zones can be dorpped should have a special effect.

  (1) chrome

  (2) firefox

2. When a node drop to another nodes, it would be its son node. Especially, if the node is hierarchy, its son elements would move with it.
  
  (1) chrome

  (2) firefox



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `the specific states of each employee`

#### `data adaptor`
#### `json data digger function`




### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
