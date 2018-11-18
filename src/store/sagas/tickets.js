import {call, put} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import axios from 'service/axios';
import {pageTransformer} from '../../utils/utils'


export function* initialFetchSaga(action){
    const paramString = '/tickets?ticketType=incident&sortDirection=DESC&perPage=12&page='
    const params = [
        `${paramString}0`,
        `${paramString}1`,
        `${paramString}2`,
        `${paramString}3`
    ]
    let responses  = yield params.map(param => call(axios, param)) 
    let tickets = yield responses.map(response => response.data)
    const newPages = tickets.map(pages => pageTransformer(pages));
    console.log(tickets)
    yield put({
        type: actionTypes.INITIAL_FETCH_SAGA,
        pages: newPages
    });
}