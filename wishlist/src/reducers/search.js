const initialState = {
    searchQuery: ''
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state
    }
};

export default search