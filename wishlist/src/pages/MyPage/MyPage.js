import React from 'react';
import HeaderMyPage from "./HeaderMyPage";
import MyInfo from "./MyInfo";
import MyWishList from "./MyWishList";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class MyPage extends React.Component {
    render() {
        return (
            <div>
                < HeaderMyPage />
                < MyInfo myFio={'Alex Smith'} />
                < MyWishList />
            </div>
        );
    }
}

export default MyPage