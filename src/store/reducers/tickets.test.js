import reducer from './tickets';
import * as actionTypes from '../actions/actionTypes';

let initialState = {
    isLoading: true,
    isFetching: false,
    isError: false,
    isAllLoaded: false,
    currentPage: 1,
    totalPage: 1,
    tickets: []
}

describe('Tickets reducer', () => {
    beforeEach(() => {
        initialState = {
            isLoading: true,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        }
    })
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual({
            isLoading: true,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        })
    })

    it('should return currentPage 0', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_DECREMENT
        })).toEqual({
            isLoading: true,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 0,
            totalPage: 1,
            tickets: []
        })
    })

    it('should return currentPage 2', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_INCREMENT_NORMAL
        })).toEqual({
            isLoading: true,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 2,
            totalPage: 1,
            tickets: []
        })
    })

    it('should return currentPage 2', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_INCREMENT_START
        })).toEqual({
            isLoading: true,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 2,
            totalPage: 1,
            tickets: []
        })
    })
    
    it('should return totalPage 7 ticket[2,3]', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_INCREMENT_SUCCESS,
            lengthIncrement: 6,
            pages:[2,3]
        })).toEqual({
            isLoading: false,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 7,
            tickets: [2,3]
        })
    })

    it('should return isError', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_INCREMENT_FAIL
        })).toEqual({
            isLoading: true,
            isFetching: false,
            isError: true,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        })
    })
    it('should return isLoading', () => {
        expect(reducer(initialState, {
            type: actionTypes.INITIAL_FETCH_START
        })).toEqual({
            isLoading: true,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        })
    })
    it('should return currentPage totalPage 7 ticket[2,3]', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_INCREMENT_SUCCESS,
            lengthIncrement: 6,
            pages:[2,3]
        })).toEqual({
            isLoading: false,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 7,
            tickets: [2,3]
        })
    })
    it('should return isError', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_INCREMENT_FAIL
        })).toEqual({
            isLoading: true,
            isFetching: false,
            isError: true,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        })
    })
    it('should return isLoading', () => {
        expect(reducer(initialState, {
            type: actionTypes.INITIAL_FETCH_START
        })).toEqual({
            isLoading: true,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        })
    })
    it('should return totalPage: 7, tickets: [2,3]', () => {
        expect(reducer(initialState, {
            type: actionTypes.INITIAL_FETCH_SUCCESS,
            lengthIncrement: 6,
            pages:[2,3]
        })).toEqual({
            isLoading: false,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 7,
            tickets: [2,3]
        })
    })
    it('should return isError', () => {
        expect(reducer(initialState, {
            type: actionTypes.INITIAL_FETCH_FAIL
        })).toEqual({
            isLoading: false,
            isFetching: false,
            isError: true,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        })
    })
    it('should return isLoading', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_RELOAD_START
        })).toEqual({
            isLoading: true,
            isFetching: true,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        })
    })
    it('should return isError', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_INCREMENT_FAIL
        })).toEqual({
            isLoading: true,
            isFetching: false,
            isError: true,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 1,
            tickets: []
        })
    })
    it('should return totalPage: 7, tickets: [2,3]', () => {
        expect(reducer(initialState, {
            type: actionTypes.PAGE_RELOAD_SUCCESS,
            lengthIncrement: 6,
            pages:[2,3]
        })).toEqual({
            isLoading: false,
            isFetching: false,
            isError: false,
            isAllLoaded: false,
            currentPage: 1,
            totalPage: 7,
            tickets: [2,3]
        })
    })

    it('should return isAllLoaded: true totalPage: 7, tickets: [2,3]', () => {
        expect(reducer(initialState, {
            type: actionTypes.TICKETS_LOADED,
            lengthIncrement: 6,
            pages:[2,3]
        })).toEqual({
            isLoading: false,
            isFetching: false,
            isError: false,
            isAllLoaded: true,
            currentPage: 1,
            totalPage: 7,
            tickets: [2,3]
        })
    })
    
})
