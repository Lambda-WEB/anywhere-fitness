import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk"

import { appReducer } from './store/appReducer'
import { accountReducer } from './store/accountReducer';
import { instructorReducer } from './store/instructorReducer';
import { classesReducer } from './store/classesReducer';
// Components
import App from './App';

import './styles/style.scss';
import { Provider } from 'react-redux';

const logger = createLogger();
const rootReducer = combineReducers({
  app: appReducer,
  account: accountReducer, 
  instructor: instructorReducer, 
  classes: classesReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);