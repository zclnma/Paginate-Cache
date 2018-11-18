import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentPage: 0,
    totalPage: 3,
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

const initialFetchSaga = (state, action) => {
    return {
        ...state,
        loading: false,
        tickets: {
            ...state,
            ...action.pages
        }
    }
}

const initialFetchSagaStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PAGE_INCREMENT: return pageIncrement(state,action);
        case actionTypes.PAGE_DECREMENT: return pageDecrement(state,action);
        case actionTypes.INITIAL_FETCH_SAGA: return initialFetchSaga(state,action);
        case actionTypes.INITIAL_FETCH_SAGA_START: return initialFetchSagaStart(state,action);
        default: return state
    }
}

export default reducer;