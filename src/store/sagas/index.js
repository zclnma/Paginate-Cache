import { takeEvery, all} from 'redux-saga/effects';

import * as actionsTypes from '../actions/actionTypes';

import {
    initialFetchSaga,
    pageIncrementSaga,
    pageReloadSaga
} from './tickets'

export function* watchTickets() {
    yield all([
        takeEvery(actionsTypes.INITIAL_FETCH, initialFetchSaga),
        takeEvery(actionsTypes.PAGE_INCREMENT, pageIncrementSaga),
        takeEvery(actionsTypes.PAGE_RELOAD, pageReloadSaga)
    ])
}