/*
    index.js imports dependencies, sets up Redux store, sets up middleware, and renders
    the App component to start the program. It also exports functions that are not 
    specific to any React component.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';

// create Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// toTitleCase() function titlecases a string
export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

// urlSafeString() function returns a string that can safely be used in a url
export function urlSafeString(str) {
  return str.replace(/\s/g, '-').replace(/[^a-zA-Z\-]/g, '').toLowerCase()
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
