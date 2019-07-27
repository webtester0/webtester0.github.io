import connect from '@vkontakte/vkui-connect-promise'

export const setQuery = (value) => ({
    type: 'SET_QUERY',
    payload: value
});

export function searchFriendsByQuery(value) {
    return dispatch => {
        dispatch({
            type: 'FRIENDS_SEARCH'
        });
        connect.send("VKWebAppCallAPIMethod", {
            "method": "friends.search",
            "params": {"q":"" + value +"","fields":"photo_200","v": "5.101", "access_token": "" + window.access_token + ""}
        })
            .then(res => dispatch({
                type:'SUCCESS_SEARCH',
                payload: res.data.response.items
            }))
            .catch(error => dispatch({
                type: 'FAILED_SEARCH',
                payload: error
            }))
    }
}