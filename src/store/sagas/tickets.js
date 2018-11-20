import {call, put, select} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import axios from 'service/axios/axiosTickets';
import {responseTransformer} from '../../utils/utils';

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
        const newPages = yield responseTransformer(responses);
        console.log(newPages);
        //localStorage.setItem('tickets',JSON.stringify(newPages))
        yield put({
            type: actionTypes.INITIAL_FETCH_SUCCESS,
            pages: newPages,
            lengthIncrement: newPages.length
        });
    } catch(error){
        console.log(error)
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
    // if pages increase too fast
    if(currentPage < totalPage){
        if (totalPage - currentPage === 1){
            yield put({
                type: actionTypes.PAGE_INCREMENT_START,
            })
            try {
                console.log('ENTER axios')
                const paramString = '/tickets?ticketType=incident&sortDirection=DESC&perPage=12&page='
                const params = [
                    `${paramString}${totalPage}`,
                    `${paramString}${totalPage + 1}`,
                    `${paramString}${totalPage + 2}`,
                    `${paramString}${totalPage + 3}`,
                    `${paramString}${totalPage + 4}`,
                    `${paramString}${totalPage + 5}`,
                    `${paramString}${totalPage + 6}`,
                    `${paramString}${totalPage + 7}`,
                ]
                let responses  = yield params.map(param => call(axios, param)) 
                const newPages = responseTransformer(responses);
                console.log(newPages);
                yield put({
                    type: actionTypes.PAGE_INCREMENT_SUCCESS,
                    pages: newPages,
                    lengthIncrement: newPages.length
                })
            } catch(error) {
                console.log(error)
                yield put({
                    type: actionTypes.PAGE_INCREMENT_FAIL,
                })
            }
        } else {
            // if page
            yield put({
                type: actionTypes.PAGE_INCREMENT_NORMAL,
            })
        }
    } else {
        yield put({
            type: actionTypes.PAGE_INCREMENT_QUICK
        })
    }
}

export function* pageReloadSaga(action) {
    console.log('enter saga');
    const totalPage = yield select(state => state.totalPage);
    if (totalPage === 0) {
        console.log('page = 0');
        yield initialFetchSaga(action);
    } else{
        yield pageIncrementSaga(action);
    }
}