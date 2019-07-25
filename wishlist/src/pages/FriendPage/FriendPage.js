import React from 'react';

import FriendInfo from "./FriendInfo";
import FriendGiftList from "./FriendGifthList";
import {Route, Switch} from 'react-router-dom';
import FriendWishList from "./FriendWishList";
import HeaderFriendPage from "./HeaderFriendPage";

class FriendPage extends React.Component {
    render() {
        return (
            <div>
                < HeaderFriendPage myFio={'Alex Smith'}/>
                < FriendInfo myFio={'User'}/>
                {/*возвращает один из двух роутев в зависимости от full pathname*/}
                <Switch>
                    < Route exact path="/friendpage" component={FriendWishList} />
                    < Route path="/friendpage/:giftlist" component={FriendGiftList} />
                </Switch>
            </div>
        );
    }
}

export default FriendPage