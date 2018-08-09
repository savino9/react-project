### React + Redux

My first App using React.js + Redux;
Simple App that grab data from jsonplaceholder, input text area that filter the array of robots by name. 

- Debugger: 
Install debugger with the command -> npm install redux-logger.
In your index.js -> import { createLogger } from 'redux-logger';

How to use it?
1. 
```
<!-- create Debugger -->
const logger = createLogger();
```
2.
```
Use the applyMiddleware(logger) function to specify wich actions has to be debugged
```

#### Asyncronous Redux 
npm install redux-thunk then import in the index file thunkMiddleware from redux-thunk;
create constants -> import them in the constants file, after that write the actions

The function called combineReducers allows us to combine different reducers into a root reducer.

#### Resources
Library
- https://reacttraining.com/
- https://ramdajs.com/
- https://lodash.com/
Styling
- https://glamorous.rocks/
- https://www.styled-components.com/
- https://github.com/css-modules/css-modules
Static websites in React
- https://www.gatsbyjs.org/
Server side rendered apps
- https://nextjs.org/
Reusable components
- https://material-ui.com/
- https://semantic-ui.com/
Redux
- https://github.com/reduxjs/reselect
Redux async
- https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html

