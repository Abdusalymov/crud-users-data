import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dataOfUsers from './reducers/combine'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App'

let store = createStore(dataOfUsers);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
