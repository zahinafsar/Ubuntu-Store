import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";
import storeCreator from "./store";
import { Provider } from 'react-redux';
const store = createStore(storeCreator, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

serviceWorker.unregister();
