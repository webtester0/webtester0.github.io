import actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  error: '',
};

const authApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.SUCCESS_INIT:
      return {
        ...state,
        isLoading: false,
        authToken: action.payload,
      };
    case actionTypes.FAILED_INIT:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authApp;
