import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: '',
    currentPage: 0,
    totalPage: 0,
    loading: true,
    tickets: {}
}

const pageIncrement = (state,action) => {
    return {
        ...state,
        currentPage: state.currentPage + 1,
    }
}

const pageDecrement = (state,action) => {
    return {
        ...state,
        currentPage: state.currentPage - 1,
    }
}

const initialFetchSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        totalPage: state.totalPage + action.lengthIncrement,
        currentPage: 1,
        tickets: {
            ...state,
            ...action.pages
        }
    }
}

const initialFetchStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const initialFetchFail = (state, action) => {
    console.log('enter reducer')
    return {
        ...state,
        error: 'error'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PAGE_INCREMENT_NORMAL: return pageIncrement(state,action);
        case actionTypes.PAGE_DECREMENT: return pageDecrement(state,action);
        case actionTypes.INITIAL_FETCH_SUCCESS: return initialFetchSuccess(state,action);
        case actionTypes.INITIAL_FETCH_START: return initialFetchStart(state,action);
        case actionTypes.INITIAL_FETCH_FAIL: return initialFetchFail(state,action);
        default: return state
    }
}

export default reducer;