import connect from '@vkontakte/vkui-connect-promise'

export function getFriends() {
    return (dispatch) => {
        dispatch({
            type: 'FRIENDS_REQUEST'
        });

        connect.send("VKWebAppInit", {});

        connect.send("VKWebAppGetAuthToken", {"app_id": 7065930, "scope": "friends,photos"})
            .then(data => {
                let access_token = data.data.access_token;
                let res = connect.send("VKWebAppCallAPIMethod", {
                    "method": "friends.get",
                    "params": {"fields":"nickname,photo_200", "v": "5.101", "access_token": "" + access_token + ""}
                });
                return res
            })
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