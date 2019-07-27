import connect from '@vkontakte/vkui-connect-promise'

export function getFriends() {
    return (dispatch) => {
        dispatch({
            type: 'FRIENDS_REQUEST'
        });
        connect.send("VKWebAppCallAPIMethod", {"method": "friends.get",
            "params": {
                "order": "hints",
                "fields": "nickname,photo_200",
                "v": "5.101",
                "access_token": "" + window.access_token + ""
            }
        })
            .then(res => res)
            .then(res => dispatch({
                type: 'FRIENDS_SUCCESS',
                payload: res.data.response.items
            }))
            .catch(error => dispatch({
                type: 'FRIENDS_FAILED',
                payload: error
            }));
    }
}