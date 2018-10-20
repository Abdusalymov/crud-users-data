import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dataOfUsers from './reducers/combine'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { save, load } from "redux-localstorage-simple"
import App from './components/App'

const createStoreWithMiddleware = applyMiddleware( //save data in localStorage
	save() 
)(createStore);

const store = createStoreWithMiddleware( //load data from localStorage
  dataOfUsers,    
  load() 
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
