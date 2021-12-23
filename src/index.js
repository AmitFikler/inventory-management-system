import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { workerReducer } from './reducers/workerReducers';
import { inventoryReducer } from './reducers/inventoryReducer';

const rootReducer = combineReducers({
  workerReducer,
  inventoryReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
