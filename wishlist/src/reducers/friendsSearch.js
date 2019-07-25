const initialState = {
    searchQuery: ''
};

const friendsSearch = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
};

export default friendsSearch

