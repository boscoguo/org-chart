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

<img width="1148" alt="屏幕快照 2021-10-04 下午11 33 00" src="https://user-images.githubusercontent.com/20954764/135852043-f21389c5-a73f-40e3-9e3a-8a52c6584b17.png">

2. Hover effect on firefox

<img width="1447" alt="屏幕快照 2021-10-04 下午11 34 11" src="https://user-images.githubusercontent.com/20954764/135852134-7e1ff2a7-48c4-4eca-b660-09887b501048.png">

#### `drag and drop state`

1. When drag an item or the zones can be dorpped should have a special effect.

  (1) chrome
  ![屏幕快照 2021-10-04 下午11 37 45](https://user-images.githubusercontent.com/20954764/135852716-63f8770b-f3d3-4b5b-ac11-cac4522d6a21.png)

  (2) firefox
  <img width="1247" alt="屏幕快照 2021-10-04 下午11 39 41" src="https://user-images.githubusercontent.com/20954764/135852908-019b7043-6e6d-444a-b1b6-dd7f0f2710e1.png">


2. When a node drop to another nodes, it would be its son node. Especially, if the node is hierarchy, its son elements would move with it.
  
  (1) chrome
  one node move
  
<img width="2178" alt="屏幕快照 2021-10-04 下午11 41 42" src="https://user-images.githubusercontent.com/20954764/135853176-bad0ce6c-3543-46ba-8b71-4a202e814d00.png">

  hierarchy nodes move
  <img width="2185" alt="屏幕快照 2021-10-04 下午11 44 38" src="https://user-images.githubusercontent.com/20954764/135853597-15e492b1-c643-4c5a-b607-5cdaf35ee5ae.png">


  (2) firefox
  one node move
  <img width="1443" alt="屏幕快照 2021-10-04 下午11 43 05" src="https://user-images.githubusercontent.com/20954764/135853388-3ef768cd-72b9-4240-b4e7-13da20dc954f.png">
  
  hierarchy nodes move
<img width="1441" alt="屏幕快照 2021-10-04 下午11 45 30" src="https://user-images.githubusercontent.com/20954764/135853748-9f76c583-5b73-43e2-b160-51a79ecbe769.png">




### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `the specific states of each employee`
<img width="886" alt="屏幕快照 2021-10-04 下午11 47 44" src="https://user-images.githubusercontent.com/20954764/135854047-b5aec020-8a67-47ce-9b8d-1d03d3a520fb.png">

#### `data adaptor`
<img width="727" alt="屏幕快照 2021-10-04 下午11 48 55" src="https://user-images.githubusercontent.com/20954764/135854225-591884a1-36f4-4035-94ed-7ef0008e41ac.png">

#### `json data digger function`

<img width="968" alt="屏幕快照 2021-10-04 下午11 49 49" src="https://user-images.githubusercontent.com/20954764/135854342-1b56d41c-0bd2-44ce-a6e5-2b284bb1e537.png">

#### `all test case result`

<img width="628" alt="屏幕快照 2021-10-04 下午11 50 58" src="https://user-images.githubusercontent.com/20954764/135854510-99da67cf-cb81-46e4-b043-d37ad86ef4d3.png">





### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
