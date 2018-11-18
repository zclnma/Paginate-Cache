import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose} from 'redux'
import createSagaMiddleware from 'redux-saga';

import {
    watchSaga
} from 'store/sagas/index'

import './index.css';
import App from './App';
import reducer from 'store/reducers/reducer';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
