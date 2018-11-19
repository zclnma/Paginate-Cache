import * as actionTypes from './actionTypes';

export const pageIncrement = () => {
    return {
        type: actionTypes.PAGE_INCREMENT,
    }
}

export const pageDecrement = () => {
    return {
        type: actionTypes.PAGE_DECREMENT
    }
}

export const initialFetch = () => {
    return {
        type: actionTypes.INITIAL_FETCH
    }
}