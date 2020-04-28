import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'

import App from './App';

import './styles/style.scss';

// const store = createStore()


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
