const initialState = {
    friends: [],
    isLoading: false,
    error: ''
};

const friends = (state = initialState, action) => {
    switch(action.type) {
        case 'FRIENDS_REQUEST':
            return {
                ...state,
                isLoading: true
            };
        case 'FRIENDS_SUCCESS':
            return {
                ...state,
                friends: action.payload,
                isLoading: false
            };
        case 'FRIENDS_FAILED':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default friends