import actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  items: [],
  wishList: [],
  error: '',
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload.data,
      };
    case actionTypes.BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actionTypes.SEARCH_SET_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case actionTypes.ADD_TO_WISH_LIST:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    case actionTypes.DELETE_FROM_WISH:
      return {
        ...state,
        wishList: state.wishList.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default books;
