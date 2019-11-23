import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore(reducers, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));