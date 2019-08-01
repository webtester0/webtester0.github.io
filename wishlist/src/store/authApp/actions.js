import connect from '@vkontakte/vkui-connect-promise';
import actionTypes from '../actionTypes';

const applicationInit = () => dispatch => {
  dispatch({
    type: actionTypes.INIT_START,
  });
  (async () => {
    try {
      const data = await connect.send('VKWebAppGetAuthToken', {
        app_id: 7065930,
        scope: 'friends,photos',
      });
      window.access_token = data.data.access_token;
      dispatch({
        type: actionTypes.SUCCESS_INIT,
        payload: data.data.access_token,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.FAILED_INIT,
        payload: e,
      });
    }
  })();
};

export default applicationInit;
