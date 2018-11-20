import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    isError: false,
    currentPage: 0,
    totalPage: 0,
    isLoading: true,
    tickets: []
}

const pageDecrement = (state,action) => {
    return {
        ...state,
        isFetching: false,
        currentPage: state.currentPage - 1,
    }
}

const pageIncrement = (state,action) => {
    return {
        ...state,
        currentPage: state.currentPage + 1,
    }
}

const pageIncrementQuick = (state, action) => {
    return {
        ...state,
        isFetching: true,
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
    console.log('pageIncrementSuccess');
    return {
        ...state,
        isLoading: false,
        isFetching: false,
        totalPage: state.totalPage + action.lengthIncrement,
        tickets: state.tickets.concat(action.pages)
    }
}

const pageIncrementFail = (state,action) => {
    return {
        ...state,
        isError: true
    }
}

const initialFetchSuccess = (state, action) => {

    return {
        ...state,
        isLoading: false,
        isError: false,
        totalPage: state.totalPage + action.lengthIncrement,
        currentPage: 1,
        tickets: state.tickets.concat(action.pages)
    }
}

const initialFetchStart = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const initialFetchFail = (state, action) => {
    console.log('enter reducer')
    return {
        ...state,
        isLoading: false,
        isError: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Back button clicked
        case actionTypes.PAGE_DECREMENT: return pageDecrement(state,action);

        // Next button clicked and no need to fetch data
        case actionTypes.PAGE_INCREMENT_NORMAL: return pageIncrement(state,action);

        // Next button clicked and isFetching new data
        case actionTypes.PAGE_INCREMENT_START: return pageIncrementStart(state,action);
        case actionTypes.PAGE_INCREMENT_SUCCESS: return pageIncrementSuccess(state,action);
        case actionTypes.PAGE_INCREMENT_FAIL: return pageIncrementFail(state,action);

        // Next button clicked too quick while isFetching data
        case actionTypes.PAGE_INCREMENT_QUICK: return pageIncrementQuick(state,action);

        // Initial data isFetching
        case actionTypes.INITIAL_FETCH_START: return initialFetchStart(state,action);
        case actionTypes.INITIAL_FETCH_SUCCESS: return initialFetchSuccess(state,action);
        case actionTypes.INITIAL_FETCH_FAIL: return initialFetchFail(state,action);

        default: return state
    }
}

export default reducer;