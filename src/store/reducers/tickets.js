const initialState = {
    counter: 1,
    loading: true,
    tickets: {}
}

const reducer = (state = initialState, action) => {
    if (action.type === 'TEST_SAGA') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'INITIAL_FETCH_SAGA_START'){
        return {
            ...state,
            loading: true,
        }
    }
    if (action.type === 'INITIAL_FETCH_SAGA'){
        return {
            ...state,
            loading: false,
            tickets: {
                test: action.data
            }
        }
    }
    return state;
};

export default reducer;