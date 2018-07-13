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