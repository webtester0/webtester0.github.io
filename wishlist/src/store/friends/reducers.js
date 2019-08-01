import actionTypes from '../actionTypes';

export const friends = (
  state = {
    friends: null,
    isLoading: false,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case actionTypes.FRIENDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
      };
    case actionTypes.FRIENDS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const friendsSearch = (
  state = {
    searchQuery: '',
    items: null,
    error: '',
  },
  action
) => {
  switch (action.type) {
    case actionTypes.FRIENDS_SET_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case actionTypes.FRIENDS_SUCCESS_SEARCH:
      return {
        ...state,
        items: action.payload,
      };
    case actionTypes.FRIENDS_FAILED_SEARCH:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};
