import {call, put, select} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import axios from '../../service/axios/axiosTickets';
//import {responseTransformer} from '../../utils/utils';

function* responseTransformer (responses){
    // Transform response from API to array with only serveiceData and coreData
    let pages = yield responses.map(response => response.data);
    let lastPage = null;

    const newPages = yield pages.map((page,index) => {
        console.log(page);
        if(page.length < 11 && page.length > 0){
            lastPage = index + 1;
            console.log('Last Page',lastPage);
        }
        return page.map(ticket => {
            Object.keys(ticket.serviceData).forEach(service => (
                !ticket.serviceData[service] && ticket.serviceData[service] !== undefined) 
                && delete ticket.serviceData[service]
            );
            return {
                coreData: ticket.coreData,
                serviceData: ticket.serviceData
            }
        })      
    })

    if(lastPage){ newPages.splice(lastPage) }

    return {newPages, lastPage};
}

// Fetch data from the API endpoint
function* fetchData (totalPage){
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

    //return transformed data
    return yield responseTransformer(responses);
}

export function* initialFetchSaga(action){
    //Initial Fetch
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
        const {newPages} = yield responseTransformer(responses);
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
        })
    }
}

export function* pageIncrementSaga(action){
    //Page Increment
    const currentPage = yield select(state => state.currentPage);
    const totalPage = yield select(state => state.totalPage);
    const isError = yield select(state => state.isError);
    const isAllLoaded = yield select(state => state.isAllLoaded);
    console.log(currentPage,totalPage);
    // if pages increase too fast show Spinner
    if((currentPage < totalPage) || isError ){
        // if user is looking at the last page, reach out to the server to fetch more data
        if (totalPage - currentPage === 1 && !isAllLoaded){
            yield put({
                type: actionTypes.PAGE_INCREMENT_START,
            })
            try{
                let {newPages, lastPage}  = yield fetchData (totalPage);
                //console.log('fetch data successful')

                //if it is the last page, dispatch TICKETS_LOADED, else deal with it as normal pages
                if(lastPage){
                    yield put({
                        type: actionTypes.TICKETS_LOADED,
                        pages: newPages,
                        lengthIncrement: newPages.length
                    })
                } else {
                    yield put({
                        type: actionTypes.PAGE_INCREMENT_SUCCESS,
                        pages: newPages,
                        lengthIncrement: newPages.length
                    }) 
                }                             
            } catch(error) {
                
                //console.log(error)
                yield put({
                    type: actionTypes.PAGE_INCREMENT_FAIL,
                })
            }
        } else {
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
    //Page Reload
    const totalPage = yield select(state => state.totalPage);
    const currentPage = yield select(state => state.currentPage);
    console.log(currentPage);
    if (totalPage === 0) {
        console.log('page = 0');
        yield initialFetchSaga(action);
    } else{
        yield put({
            type: actionTypes.PAGE_RELOAD_START,
        })
        try{
            let {newPages, lastPage} = yield fetchData (totalPage);
            if(lastPage){
                yield put({
                    type: actionTypes.TICKETS_LOADED,
                    pages: newPages,
                    lengthIncrement: newPages.length
                })
            } else {
                yield put({
                type: actionTypes.PAGE_RELOAD_SUCCESS,
                pages: newPages,
                lengthIncrement: newPages.length
                })
            }
        } catch(error){
            yield put({
                type: actionTypes.PAGE_RELOAD_FAIL,
            })
        }
    }
}