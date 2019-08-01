import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../../components/Header';
import List from '../../components/List';
import { getInfo, getFriendsInfo } from '../../store/userInfo';
import { removeWish } from '../../store/books';
import UserInfo from '../../components/UserInfo';
import avatar from '../../img/friends.png';

const FriendPage = props => {
  const {
    fio,
    myPhoto,
    friendOne,
    friendTwo,
    friendThree,
    info,
    friendsInfo,
  } = props;
  return (
    <div>
      <Header
        fio={fio}
        myPhoto={myPhoto}
        friendOne={friendOne}
        friendTwo={friendTwo}
        friendThree={friendThree}
        titleBack="Вернуться к поиску"
        titleFriends="Мои друзья"
        linkMe="/me"
        linkBack="/wishlistmain"
        linkFriends="/friends"
        getInfo={info}
        getFriendsInfo={friendsInfo}
        name="user"
      />
      <UserInfo
        fio="User"
        photo={avatar}
        linkWish="/friendpage"
        linkGift="/friendpage/:giftlist"
      />
      {/* возвращает один из двух роутев в зависимости от full pathname */}
      <Switch>
        <Route
          exact
          path="/friendpage"
          render={() => (
            <List
              listName="wish"
              wishList={props.wishList}
              removeWish={props.removeWish}
            />
          )}
        />
        <Route
          path="/friendpage/:giftlist"
          render={() => <List listName="gift" wishList={props.wishList} />}
        />
      </Switch>
    </div>
  );
};

FriendPage.propTypes = {
  fio: propTypes.string.isRequired,
  myPhoto: propTypes.string.isRequired,
  friendOne: propTypes.string.isRequired,
  friendTwo: propTypes.string.isRequired,
  friendThree: propTypes.string.isRequired,
  wishList: propTypes.arrayOf(propTypes.object).isRequired,
  info: propTypes.func.isRequired,
  friendsInfo: propTypes.func.isRequired,
  removeWish: propTypes.func.isRequired,
};

const mapStateToProps = ({ userInfo, books }) => ({
  fio: userInfo.fio,
  myPhoto: userInfo.myPhoto,
  friendOne: userInfo.friendOne,
  friendTwo: userInfo.friendTwo,
  friendThree: userInfo.friendThree,
  wishList: books.wishList,
});

const mapDispatchToProps = {
  info:getInfo,
  friendsInfo:getFriendsInfo,
  removeWish,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendPage);
