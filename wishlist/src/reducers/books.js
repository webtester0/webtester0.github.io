const initialState = {
    isLoading: false,
    items: null,
    wishList: [],
    error: ''
};

const books = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case 'BOOKS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                items: action.payload.data
            };
        case 'BOOKS_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        case 'ADD_TO_WISH_LIST':
            return {
                ...state,
                wishList: [
                    ...state.wishList,
                    action.payload
                ]
            };
        case 'DELETE_FROM_WISH':
            return {
                ...state,
                wishList: state.wishList.filter(item => item.id !== action.payload)
            };
        default:
            return state
    }
};

export default books