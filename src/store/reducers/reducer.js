const initialState = {
    counter: 1
}

const reducer = (state = initialState, action) => {
    if (action.type === 'TEST_SAGA') {
        return {
            counter: state.counter + 1
        }
    }
    return state;
};

export default reducer;