import React from 'react';
import './App.css';
import WishList from "./WishListMain/WishList";
import MyPage from "./MyPage/MyPage";
import {Route, Redirect, Switch} from 'react-router-dom'
import FriendsPage from "./FriendsPage/FriendsPage";
import FriendPage from "./FriendPage/FriendPage";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/me" component={MyPage}/>
                    <Route path="/wishlistmain" component={WishList}/>
                    <Route path="/friends" component={FriendsPage}/>
                    <Route path="/friendpage" component={FriendPage}/>
                    <Redirect to="/me"/>
                    {/*<Redirect to="/friendpage"/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;
