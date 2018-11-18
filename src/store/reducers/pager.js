import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentPage: 1,
    totalPage: 4,
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PAGE_INCREMENT: return pageIncrement(state,action);
        case actionTypes.PAGE_DECREMENT: return pageDecrement(state,action);
        default: return state
    }
}

export default reducer;