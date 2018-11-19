import { takeEvery, all} from 'redux-saga/effects';

import * as actionsTypes from '../actions/actionTypes';

import {
    initialFetchSaga,
    pageIncrementSaga
} from './tickets'

export function* watchSaga() {
    yield all([
        takeEvery(actionsTypes.INITIAL_FETCH, initialFetchSaga),
        takeEvery(actionsTypes.PAGE_INCREMENT, pageIncrementSaga),
    ])
}