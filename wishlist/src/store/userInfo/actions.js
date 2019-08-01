import connect from '@vkontakte/vkui-connect-promise';
import actionTypes from '../actionTypes';

export const getInfo = () => dispatch => {
  (async () => {
    try {
      const result = await connect.send('VKWebAppCallAPIMethod', {
        method: 'users.get',
        params: {
          fields: 'photo_200',
          v: '5.101',
          access_token: `${window.access_token}`,
        },
      });
      dispatch({
        type: actionTypes.INFO_SUCCESS,
        payload: result.data.response,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.INFO_FAILED,
        payload: e,
      });
    }
  })();
};

export const getFriendsInfo = () => dispatch => {
  (async () => {
    try {
      const result = await connect.send('VKWebAppCallAPIMethod', {
        method: 'friends.get',
        params: {
          count: '3',
          hints: 'random',
          fields: 'photo_200',
          v: '5.101',
          access_token: `${window.access_token}`,
        },
      });
      dispatch({
        type: actionTypes.FRIENDS_INFO_SUCCESS,
        payload: result.data.response.items,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.FRIENDS_INFO_FAILED,
        payload: e,
      });
    }
  })();
};
