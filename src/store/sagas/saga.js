import {put} from 'redux-saga/effects';

export function* testSaga(action) {
    yield put({type: 'TEST_SAGA'})
}