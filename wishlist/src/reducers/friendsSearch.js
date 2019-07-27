const initialState = {
    searchQuery: '',
    items: null,
    error: ''
};

const friendsSearch = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        case 'SUCCESS_SEARCH':
            return {
                ...state,
                items: action.payload
            };
        case 'FAILED_SEARCH':
            return {
                ...state,
                error: action.payload.data
            };
        default:
            return state;
    }
};

export default friendsSearch

