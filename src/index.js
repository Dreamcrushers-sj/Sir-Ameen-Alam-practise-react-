import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './Routers';
import * as serviceWorker from './serviceWorker';

// import Reducer
import Reducers from './Store/Reducers'

// Import React Redux Provider
import { Provider } from 'react-redux'

// import Store and Create Store
import { createStore } from 'redux'

// import middleware
import Middleware from './store/Middleware'

// passs Redecer in store
const store = createStore(Reducers, Middleware)

ReactDOM.render(
   <Provider store={store}>
    <Routers />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
