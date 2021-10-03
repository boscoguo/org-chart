# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project structure 

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components                                                              
│   │   ├── commonNode
│   │   │   ├── CommonNode.test.tsx
│   │   │   └── CommonNode.tsx
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── Login.test.tsx
│   │   │   ├── Login.tsx
│   │   │   └── login.scss
│   │   └── menu
│   │       ├── Menu.test.tsx
│   │       ├── Menu.tsx
│   │       └── menu.scss
│   ├── config
│   │   └── base.ts
│   ├── context
│   │   ├── contextManager.tsx
│   │   └── provider
│   │       ├── Provider.test.tsx
│   │       └── Provider.tsx
│   ├── data
│   │   └── menuLists.json
│   ├── index.scss
│   ├── index.tsx
│   ├── layouts
│   │   ├── container
│   │   │   ├── Container.tsx
│   │   │   ├── container.scss
│   │   │   └── container.test.tsx
│   │   ├── index.ts
│   │   ├── leftPanel
│   │   │   ├── LeftPanel.tsx
│   │   │   └── leftPanel.scss
│   │   └── rightPanel
│   │       ├── RightPanel.tsx
│   │       └── rightPanel.scss
│   ├── logo.svg
│   ├── pages
│   │   ├── commonPage
│   │   │   └── CommonPage.tsx
│   │   ├── index.ts
│   │   └── loginPage
│   │       └── LoginPage.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── routers
│   │   └── RouterComponent.tsx
│   ├── setupTests.ts
│   └── utils
│       ├── MenuTitleUtils.test.ts
│       ├── MenuTitleUtils.ts
│       ├── httpUtils.ts
│       ├── htttpUtils.test.ts
│       ├── urlUtils.test.ts
│       └── urlUtils.ts
├── tree.text
└── tsconfig.json

```

21 directories, 60 files

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
This application is mainly consist of menu part and login part.

#### `menu part`
In the menu, there are some buttons including login button, add node button, button 1 and button 3.

<img width="1652" alt="屏幕快照 2021-09-30 上午9 22 16" src="https://user-images.githubusercontent.com/20954764/135361706-adb8f846-4ee5-4eb8-8a07-f5c0e3ab9431.png">


##### `login  button`
When clicking this button, the whole left menu would be hidden and login page will be displayed full screen. The url should go to the login router.

<img width="1371" alt="屏幕快照 2021-09-30 上午9 24 12" src="https://user-images.githubusercontent.com/20954764/135361840-db5c6f7e-6006-456c-b12f-7f4c3c9ffa7b.png">

##### `Add node button`
When clicking this button, the new nested menu will be generated and router can not change.

<img width="1645" alt="屏幕快照 2021-09-30 上午9 26 41" src="https://user-images.githubusercontent.com/20954764/135362042-56260b86-8439-4479-8df5-4c89c7e17d38.png">


##### `Button 1 and Button 3`
When these two buttons are clicked, the related page will be displayed and the routers should go to the related router url. 

<img width="1647" alt="屏幕快照 2021-09-30 上午9 31 12" src="https://user-images.githubusercontent.com/20954764/135362331-fdfc27e7-0226-4251-bbee-6351c5bd6d4c.png">

<img width="1229" alt="屏幕快照 2021-09-30 上午11 41 13" src="https://user-images.githubusercontent.com/20954764/135372057-3103c5c4-c6e1-4e2b-9b4d-2992d0abc98d.png">


#### `login part`
In the login form, the email and password fields should be included. Also, the submit button and cancel button are required.

##### `email and password fields`

When fields are empty, error message should be displayed as required.

<img width="1040" alt="屏幕快照 2021-09-30 上午11 47 02" src="https://user-images.githubusercontent.com/20954764/135372175-19c1b81f-673d-4c7b-b6c7-f225fdc31874.png">

when email format is incorrect, invalid message will show on the error message components.

<img width="743" alt="屏幕快照 2021-09-30 上午9 47 41" src="https://user-images.githubusercontent.com/20954764/135363566-6446d101-394c-4c29-b395-c8c7beab5afb.png">

when typing password too long or too short, error message should be displayed on error message components.

<img width="650" alt="屏幕快照 2021-09-30 上午9 48 29" src="https://user-images.githubusercontent.com/20954764/135363645-47901680-c888-4994-91f6-466f5c7e18c1.png">
<img width="905" alt="屏幕快照 2021-09-30 上午11 48 38" src="https://user-images.githubusercontent.com/20954764/135372458-377ea060-179f-40ba-a8ee-821b53bab693.png">


##### `submit button`

when the email and password fields valid, the data should be submitted to a fake end point.

##### `cancel button`

when clicking this button, the page should go back to the home page and url should recover to home url.


<img width="1652" alt="屏幕快照 2021-09-30 上午9 22 16" src="https://user-images.githubusercontent.com/20954764/135361706-adb8f846-4ee5-4eb8-8a07-f5c0e3ab9431.png">



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `container part`

test the layout switch between menu part and login page.



#### `menu part`

When clicking this button, the whole left menu would be hidden and login page will be displayed full screen. The url should go to the login router.

When clicking this button, the new nested menu will be generated and router can not change.

When these two buttons are clicked, the related page will be displayed and the routers should go to the related router url. 

<img width="749" alt="屏幕快照 2021-09-30 上午10 48 27" src="https://user-images.githubusercontent.com/20954764/135367807-aadae679-0200-40ff-a25d-489acebb0a12.png">


#### `login part`

When fields are empty, error message should be displayed as required.

when email format is incorrect, invalid message will show on the error message components.

when typing password too long or too short, error message should be displayed on error message components.

when the email and password fields valid, the data should be submitted to a fake end point.

when clicking this button, the page should go back to the home page and url should recover to home url.

<img width="752" alt="屏幕快照 2021-09-30 上午10 51 43" src="https://user-images.githubusercontent.com/20954764/135368026-1b37ae54-4a06-4b75-bc59-b9e697bf0a49.png">


#### `http module`

when request success, the data would be responsed from the server.

when request fail, unconfiguration information from the fake serve would be responsed.

<img width="832" alt="屏幕快照 2021-09-30 上午11 09 36" src="https://user-images.githubusercontent.com/20954764/135369264-c5b7bf74-7455-4597-a0aa-2e50d472a9b1.png">


#### `test for the whole application`

<img width="868" alt="屏幕快照 2021-09-30 上午11 04 53" src="https://user-images.githubusercontent.com/20954764/135369124-ef01df5b-d917-44c1-a029-e4ccf13ed203.png">


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
