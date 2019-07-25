import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./pages/App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import createStore from './store'

//Получение access_token в index
// import connect from '@vkontakte/vkui-connect-promise';
// connect.send("VKWebAppInit", {});
//
// connect.send("VKWebAppGetAuthToken", {"app_id": 7065930, "scope": "friends,photos"})
//     .then(data => {
//         let access_token = data.data.access_token;
//         let res = connect.send("VKWebAppCallAPIMethod", {
//             "method": "friends.get",
//             "params": {"order":"hints", "v": "5.101", "access_token": "" + access_token + "",
//             "fields":"nickname,photo_200"}
//         });
//         return res
//     })
//     .then(response => console.log(response.data.response.items))
//     .catch(error => console.log(error));

const store = createStore();


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            < App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
