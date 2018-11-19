import {call, put, select} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import axios from 'service/axios';
import {pageTransformer} from '../../utils/utils'


export function* initialFetchSaga(action){
    yield put({
        type: actionTypes.INITIAL_FETCH_START,
    })

    try{
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
        //console.log(tickets)
        yield put({
            type: actionTypes.INITIAL_FETCH_SUCCESS,
            pages: newPages,
            lengthIncrement: newPages.length
        });
    } catch(error){
        //console.log(error.error)
        yield put({
            type: actionTypes.INITIAL_FETCH_FAIL,
            //error: error
        })
    }
}

export function* pageIncrementSaga(action){
    const currentPage = yield select(state => state.currentPage);
    const totalPage = yield select(state => state.totalPage);
    console.log(currentPage,totalPage);
    if (totalPage - currentPage === 2){
        yield put({
            type: actionTypes.PAGE_INCREMENT_NORMAL,
        })
    } else {
        yield put({
            type: actionTypes.PAGE_INCREMENT_NORMAL,
        })
    }
}