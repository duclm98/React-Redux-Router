import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from "redux-thunk";

import rootReducer from './reducers/rootReducer';
import App from './App';
import reportWebVitals from './reportWebVitals';

// initialState
const initialState = {}

// Create store
const store = createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
