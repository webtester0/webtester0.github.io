import connect from '@vkontakte/vkui-connect-promise';
import actionTypes from '../actionTypes';

export const searchSetQuery = value => ({
  type: actionTypes.FRIENDS_SET_QUERY,
  payload: value,
});

export const searchFriendsByQuery = value => dispatch => {
  (async () => {
    try {
      const result = await connect.send('VKWebAppCallAPIMethod', {
        method: 'friends.search',
        params: {
          q: `${value}`,
          fields: 'photo_200',
          v: '5.101',
          access_token: `${window.access_token}`,
        },
      });
      dispatch({
        type: actionTypes.FRIENDS_SUCCESS_SEARCH,
        payload: result.data.response.items,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.FRIENDS_FAILED_SEARCH,
        payload: e,
      });
    }
  })();
};

export const getFriends = () => dispatch => {
  dispatch({
    type: actionTypes.FRIENDS_REQUEST,
  });
  (async () => {
    try {
      const result = await connect.send('VKWebAppCallAPIMethod', {
        method: 'friends.get',
        params: {
          order: 'hints',
          fields: 'nickname,photo_200',
          v: '5.101',
          access_token: `${window.access_token}`,
        },
      });
      dispatch({
        type: actionTypes.FRIENDS_SUCCESS,
        payload: result.data.response.items,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.FRIENDS_FAILED,
        payload: e,
      });
    }
  })();
};
