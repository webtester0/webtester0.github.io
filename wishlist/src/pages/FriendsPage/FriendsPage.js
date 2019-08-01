import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import FriendsListNew from '../../containers/FriendListNew';
import Search from '../../components/Search';
import Header from '../../components/Header';
import { searchSetQuery } from '../../store/friends';
import { getFriendsInfo, getInfo } from '../../store/userInfo';

const FriendsPage = props => {
  const {fio, myPhoto, info, friendsInfo, search} = props
  return (
    <div>
      <Header
        fio={fio}
        myPhoto={myPhoto}
        titleFriends="Вернуться к поиску"
        linkMe="/me"
        linkFriends="/wishlistmain"
        getInfo={info}
        getFriendsInfo={friendsInfo}
        name="friends"
      />
      <Search
        placeholder="Начните вводить имя друга"
        title="Мои друзья"
        emoji="em em-stuck_out_tongue_winking_eye"
        name="friends"
        searchSetQuery={search}
      />
      <FriendsListNew />
    </div>
  )
};

FriendsPage.propTypes = {
  search: propTypes.func.isRequired,
  fio: propTypes.string.isRequired,
  myPhoto: propTypes.string.isRequired,
  info: propTypes.func.isRequired,
  friendsInfo: propTypes.func.isRequired,
};

const mapStateToProps = ({ friendsSearch, userInfo }) => ({
  searchQuery: friendsSearch.searchQuery,
  fio: userInfo.fio,
  myPhoto: userInfo.myPhoto,
});

const mapDispatchToProps = {
  search:searchSetQuery,
  info:getInfo,
  friendsInfo:getFriendsInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsPage);
