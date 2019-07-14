import React from 'react';
import './App.css';
import WishList from "./WishListMain/WishList";
import MyPage from "./MyPage/MyPage";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path="/me" component={MyPage}/>
                    <Route path="/wishlist" component={WishList}/>
                    <Redirect to="/me"/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
