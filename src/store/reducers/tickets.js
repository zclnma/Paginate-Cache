import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: '',
    currentPage: 0,
    totalPage: 0,
    loading: true,
    tickets: {}
}

const pageDecrement = (state,action) => {
    return {
        ...state,
        currentPage: state.currentPage - 1,
    }
}

const pageIncrement = (state,action) => {
    return {
        ...state,
        currentPage: state.currentPage + 1,
    }
}

const pageIncrementStart = (state,action) => {
    return {
        ...state,
        currentPage: state.currentPage + 1,
    }
}

const pageIncrementSuccess = (state,action) => {
    return {
        ...state,
        loading: false,
        totalPage: state.totalPage + action.lengthIncrement,
        tickets: {
            ...state.tickets,
            ...action.pages
        }
    }
}

const pageIncrementFail = (state,action) => {
    return {
        ...state,
        error: 'error'
    }
}

const initialFetchSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        totalPage: state.totalPage + action.lengthIncrement,
        currentPage: 1,
        tickets: {
            ...state.tickets,
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
        // Back 
        case actionTypes.PAGE_DECREMENT: return pageDecrement(state,action);

        // Next
        case actionTypes.PAGE_INCREMENT_NORMAL: return pageIncrement(state,action);
        case actionTypes.PAGE_INCREMENT_START: return pageIncrementStart(state,action);
        case actionTypes.PAGE_INCREMENT_SUCCESS: return pageIncrementSuccess(state,action);
        case actionTypes.PAGE_INCREMENT_FAIL: return pageIncrementFail(state,action);

        //Initial Fetch
        case actionTypes.INITIAL_FETCH_START: return initialFetchStart(state,action);
        case actionTypes.INITIAL_FETCH_SUCCESS: return initialFetchSuccess(state,action);
        case actionTypes.INITIAL_FETCH_FAIL: return initialFetchFail(state,action);
        default: return state
    }
}

export default reducer;