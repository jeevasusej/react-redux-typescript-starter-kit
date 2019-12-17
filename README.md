This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#### Sample demo page
https://jeevasusej.github.io/react-redux-typescript-starter-kit/

#### Packages used with this project.
- [redux](https://redux.js.org/) - A predictable state container for JavaScript apps
- [react-redux](https://github.com/reduxjs/react-redux) - React bindings for Redux 
- [redux-saga](https://redux-saga.js.org/) - Redux-saga is a redux middleware library, that is designed to make handling side effects in your redux app
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [redux-dynamic-modules](https://redux-dynamic-modules.js.org/#/) - Modularize Redux by dynamically loading reducers and middlewares
- [connected-react-router](https://github.com/supasate/connected-react-router) - A Redux binding for React Router v4 - This can be removed based on your need. It is not mandatory
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [material-ui](https://material-ui.com/) - React components for material design
- [clsx](https://github.com/lukeed/clsx) - A tiny utility for constructing `className` strings conditionally
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) (Need to be removed after API implementation) -  Axios adapter that allows to easily mock requests

#### Development Dependencies - Refer the below links for Static Type Checking implementation
- [react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)
- [typesafe-actions](https://github.com/piotrwitek/typesafe-actions) - Typesafe utilities for "action-creators" in Redux / Flux Architecture
- [utility-types](https://github.com/piotrwitek/utility-types) - Collection of utility types, complementing TypeScript built-in mapped types and aliases

#### Eslint and Prettier for development
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Prettier](https://prettier.io/)


#### Project Folder Structure

![Folder structure](https://github.com/jeevasusej/react-redux-typescript-starter-kit/blob/master/docs/folder_structure.PNG)

Based on the redux dynamic modules, features splitted as module.
App inital configuration can be found inside the shared/config folder. 
- configureStore.ts - configuration for setup for the initial app
- rootModule.ts     - Root module (Redux-dynamic-module) for the redux store
- theme.ts          - Customized theme configuration for the application. It is based on the react material ui.
- types.ts          - Root type for redux pros and actions. This type intersect with the upcoming types for [static checking](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types)

Each feature module can contain the following default folders. 
- actions     - Actions for the react redux
- api         - All api related functionality goes here
- components  - Feature module components, which is not connected to the redux
- containers  - Redux HOC - all the containers goes here
- module      - Redux dynamic module file has been declared in this folder. Folder can be removed.
- reducers    - Feature module's reducers
- saga        - Side effects related to feature module
- types       - Types related to feature module
- styles      - Styles for current feature

#### Routes

Nested routes added to this started kit. Home represents routes after logged in. Landing represents - routes before login. 
This is useful and handy when we have different kind of layout for the landing pages and the dashboard pages.
The layout folder contains common components shared with Home and Landing.
These routes contain the common layout that can be shared with the feature module.

### Feature folder
All feature related develoment will goes here.

