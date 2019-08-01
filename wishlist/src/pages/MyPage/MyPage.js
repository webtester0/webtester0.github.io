import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../../components/Header';
import List from '../../components/List';
import { getFriendsInfo, getInfo } from '../../store/userInfo';
import { removeWish } from '../../store/books';
import UserInfo from '../../components/UserInfo';

const MyPage = props => {
  const {
    friendOne,
    friendTwo,
    friendThree,
    fio,
    myPhoto,
    wishList,
    remove,
    info,
    friendsInfo,
  } = props;
  return (
    <div>
      <Header
        friendOne={friendOne}
        friendTwo={friendTwo}
        friendThree={friendThree}
        titleMe="Вернуться к поиску"
        titleFriends="Мои друзья"
        linkMe="/wishlistmain"
        linkFriends="/friends"
        getInfo={info}
        getFriendsInfo={friendsInfo}
        name="myPage"
      />
      <UserInfo
        fio={fio}
        photo={myPhoto}
        linkWish="/me"
        linkGift="/me/giftlist"
      />
      {/* возвращает один из двух роутев в зависимости от full pathname */}
      <Switch>
        <Route
          exact
          path="/me"
          render={() => (
            <List listName="wish" wishList={wishList} removeWish={remove} />
          )}
        />
        <Route
          path="/me/:giftlist"
          render={() => <List listName="gift" wishList={wishList} />}
        />
      </Switch>
    </div>
  );
};

MyPage.propTypes = {
  info: propTypes.func.isRequired,
  friendsInfo: propTypes.func.isRequired,
  remove: propTypes.func.isRequired,
  friendOne: propTypes.string.isRequired,
  friendTwo: propTypes.string.isRequired,
  friendThree: propTypes.string.isRequired,
  fio: propTypes.string.isRequired,
  myPhoto: propTypes.string.isRequired,
  wishList: propTypes.arrayOf(propTypes.object).isRequired,
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
  info: getInfo,
  friendsInfo: getFriendsInfo,
  remove: removeWish,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPage);
