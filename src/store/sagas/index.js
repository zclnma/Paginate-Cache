import { takeEvery, all} from 'redux-saga/effects';

import {
    testSaga,
    initialFetchSaga
} from './tickets'

export function* watchSaga() {
    yield all([
        takeEvery('TEST_ACTION', testSaga),
        takeEvery('INITIAL_FETCH', initialFetchSaga)
    ])
}