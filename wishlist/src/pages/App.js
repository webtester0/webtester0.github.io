import React from 'react';
import './App.css';
import WishList from "./WishListMain/WishList";
import MyPage from "./MyPage/MyPage";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import FriendsPage from "./FriendsPage/FriendsPage";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/me" component={MyPage}/>
                    <Route path="/wishlistmain" component={WishList}/>
                    <Route path="/friends" component={FriendsPage}/>
                    <Redirect to="/me"/>
                    {/*<Redirect to="/friends"/>*/}
                </Switch>
            </div>
        );
    }
}

export default App;
