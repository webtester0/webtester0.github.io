import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../../components/Header';
import Search from '../../components/Search';
import List from '../../components/List';
import { searchSetQuery } from '../../store/search';
import { getFriendsInfo, getInfo } from '../../store/userInfo';
import { addToWish, setBooks } from '../../store/books';

const WishList = props => {
  const {
    fio,
    myPhoto,
    friendOne,
    friendTwo,
    friendThree,
    items,
    isLoading,
    search,
    info,
    friendsInfo,
    add,
    set,
  } = props;
  return (
    <div>
      <Header
        fio={fio}
        myPhoto={myPhoto}
        friendOne={friendOne}
        friendTwo={friendTwo}
        friendThree={friendThree}
        titleFriends="Мои друзья"
        linkMe="/me"
        linkFriends="/friends"
        getInfo={info}
        getFriendsInfo={friendsInfo}
        name="main"
      />
      <Search
        placeholder="Введите название товара"
        name="main"
        emoji="em em-heart_eyes_cat"
        title="Wishlist"
        // searchSetQuery={search}
      />
      <List
        listName="main"
        title="Популярное"
        items={items}
        isLoading={isLoading}
        setBooks={set}
        addToWish={add}
      />
    </div>
  );
};

WishList.propTypes = {
  search: propTypes.func.isRequired,
  info: propTypes.func.isRequired,
  friendsInfo: propTypes.func.isRequired,
  add: propTypes.func.isRequired,
  set: propTypes.func.isRequired,
  fio: propTypes.string.isRequired,
  myPhoto: propTypes.string.isRequired,
  friendOne: propTypes.string.isRequired,
  friendTwo: propTypes.string.isRequired,
  friendThree: propTypes.string.isRequired,
  items: propTypes.oneOfType([
    propTypes.oneOf([]).isRequired,
    propTypes.arrayOf(propTypes.object).isRequired,
  ]).isRequired,
  isLoading: propTypes.bool.isRequired,
};

// временно - функция поиска
const searchBooks = (items, searchQuery) => {
  let newItems = items;
  if (searchQuery) {
    newItems = items.filter(
      item =>
        ~item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) ||
        ~item.author.toLowerCase().indexOf(searchQuery.toLowerCase())
    );
    return newItems;
  }
  return newItems;
};

const mapStateToProps = ({ search, userInfo, books }) => ({
  searchQuery: search.searchQuery,
  fio: userInfo.fio,
  myPhoto: userInfo.myPhoto,
  friendOne: userInfo.friendOne,
  friendTwo: userInfo.friendTwo,
  friendThree: userInfo.friendThree,
  items: searchBooks(books.items, search.searchQuery),
  isLoading: books.isLoading,
});

const mapDispatchToProps = {
  search: searchSetQuery,
  info: getInfo,
  friendsInfo: getFriendsInfo,
  add: addToWish,
  set: setBooks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishList);
