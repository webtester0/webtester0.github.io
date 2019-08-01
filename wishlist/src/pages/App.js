import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import WishList from './WishListMain/WishList';
import MyPage from './MyPage/MyPage';
import FriendsPage from './FriendsPage/FriendsPage';
import FriendPage from './FriendPage/FriendPage';
import { applicationInit } from '../store/authApp';

class App extends React.Component {
  static propTypes = {
    appInit: propTypes.func.isRequired,
    isLoading: propTypes.bool.isRequired,
  };

  componentDidMount() {
    const { appInit } = this.props;
    appInit();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div className="App">
        {isLoading ? (
          <div className="loader">Loading app</div>
        ) : (
          <Switch>
            <Route path="/wishlistmain" component={WishList} />
            <Route path="/me" component={MyPage} />
            <Route path="/friends" component={FriendsPage} />
            <Route path="/friendpage" component={FriendPage} />
            <Redirect to="/wishlistmain" />
          </Switch>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authApp }) => ({
  isLoading: authApp.isLoading,
  error: authApp.error,
  authToken: authApp.authToken,
});

const mapDispatchToProps = {
  appInit: applicationInit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
