import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from "redux-thunk"

import { accountReducer } from './store/accountReducer';
import { instructorReducer } from './store/instructorReducer';
import { classesReducer } from './store/classesReducer';
// Components
import App from './App';

import './styles/style.scss';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
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
