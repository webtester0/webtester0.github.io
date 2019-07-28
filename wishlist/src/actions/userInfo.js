import connect from '@vkontakte/vkui-connect-promise'

export function getInfo() {
    return dispatch => {
        dispatch({
            type: 'GET_INFO'
        });
        connect.send("VKWebAppCallAPIMethod", {
            "method": "users.get",
            "params": {
                "fields": "photo_200",
                "v": "5.101",
                "access_token": "" + window.access_token + ""
            }
        })
            .then(res => res)
            .then(res => dispatch({
                type: 'INFO_SUCCESS',
                payload: res.data.response
            }))
            .catch(error => dispatch({
                type: 'INFO_FAILED',
                payload: error
            }));
    }
}

export function getFriendsInfo() {
    return dispatch => {
        dispatch({
            type: 'GET_FRIENDS_INFO'
        });
        connect.send("VKWebAppCallAPIMethod", {
            "method": "friends.get",
            "params": {
                "count": "3",
                "hints": "random",
                "fields": "photo_200",
                "v": "5.101",
                "access_token": "" + window.access_token + ""
            }
        })
            .then(res => res)
            .then(res => dispatch({
                type: 'FRIENDS_INFO_SUCCESS',
                payload: res.data.response.items
            }))
            .catch(error => dispatch({
                type: 'FRIENDS_INFO_FAILED',
                payload: error
            }));
    }
}