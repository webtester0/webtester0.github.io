import actionTypes from '../actionTypes';

const initialState = {
  fio: '',
  myPhoto: '',
  friendOne: '',
  friendTwo: '',
  friendThree: '',
  error: '',
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INFO_SUCCESS:
      return {
        ...state,
        fio: `${action.payload[0].first_name} ${action.payload[0].last_name}`,
        myPhoto: action.payload[0].photo_200,
      };
    case actionTypes.INFO_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.FRIENDS_INFO_SUCCESS:
      return {
        ...state,
        friendOne: action.payload[0].photo_200,
        friendTwo: action.payload[1].photo_200,
        friendThree: action.payload[2].photo_200,
      };
    case actionTypes.FRIENDS_INFO_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userInfo;
