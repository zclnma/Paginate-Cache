import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import {
    testSaga
} from './saga'

export function* watchSaga() {
    yield all([
        takeEvery('TEST_ACTION', testSaga),
    ])
}