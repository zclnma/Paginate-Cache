import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose} from 'redux'
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import pagerReducer from 'store/reducers/pager';
import ticketsReducer from 'store/reducers/tickets';
import {
    watchSaga
} from 'store/sagas/index'

import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    pager: pagerReducer,
    tickets: ticketsReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
