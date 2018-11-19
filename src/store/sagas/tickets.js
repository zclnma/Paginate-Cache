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
    // if pages increase too fast
    if(currentPage <= totalPage){
        if (totalPage - currentPage === 2){
            yield put({
                type: actionTypes.PAGE_INCREMENT_START,
            })
            try {
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
                console.log("RESPONSE DATA:",responses);
                const newPages = responses.map(response => response.data).map(pages => pageTransformer(pages))
                //const newPages = tickets.map(pages => pageTransformer(pages));
                //console.log(newPages)
                yield put({
                    type: actionTypes.PAGE_INCREMENT_SUCCESS,
                    pages: newPages,
                    lengthIncrement: newPages.length
                })
            } catch(error) {
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