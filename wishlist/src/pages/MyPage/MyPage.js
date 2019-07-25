import React from 'react';
import HeaderMyPage from "./HeaderMyPage";
import MyInfo from "./MyInfo";
//старый WishList
// import MyWishList from "./MyWishList";
import MyWishListNew from './MyWishListNew'
import {Route, Switch} from 'react-router-dom';
import MyGiftList from "./MyGiftList";

class MyPage extends React.Component {
    render() {
        return (
            <div>
                < HeaderMyPage/>
                < MyInfo myFio={'Alex Smith'}/>
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