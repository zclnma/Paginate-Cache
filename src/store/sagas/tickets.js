import {put} from 'redux-saga/effects';
import axios from 'service/axios';


export function* testSaga(action) {
    yield put({type: 'TEST_SAGA'})
}

export function* initialFetchSaga(action){
    yield put({
        type: 'INITIAL_FETCH_SAGA_START'
    })
    const response = yield axios.get();
    console.log(response.data);
    yield put({
        type: 'INITIAL_FETCH_SAGA',
        data: response.data
    });
}