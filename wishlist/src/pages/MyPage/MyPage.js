import React from 'react';
import HeaderMyPage from "../../containers/HeaderMyPage";
import MyInfo from "./MyInfo";
import MyWishListNew from './MyWishListNew'
import {Route, Switch} from 'react-router-dom';
import MyGiftList from "./MyGiftList";

class MyPage extends React.Component {
    render() {
        return (
            <div>
                < HeaderMyPage/>
                < MyInfo />
                {/*возвращает один из двух роутев в зависимости от full pathname*/}
                <Switch>
                    < Route exact path="/me" component={MyWishListNew} />
                    < Route path="/me/:giftlist" component={MyGiftList} />
                </Switch>
            </div>
        );
    }
}

export default MyPage