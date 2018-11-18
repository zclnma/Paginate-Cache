import { takeEvery, all} from 'redux-saga/effects';

import {
    initialFetchSaga
} from './tickets'

export function* watchSaga() {
    yield all([
        takeEvery('INITIAL_FETCH', initialFetchSaga)
    ])
}