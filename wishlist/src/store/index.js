import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { books } from './books';
import { friends, friendsSearch } from './friends';
import { search } from './search';
import { userInfo } from './userInfo';
import { authApp } from './authApp';

const mainReducer = combineReducers({
  books,
  friends,
  friendsSearch,
  search,
  userInfo,
  authApp,
});

export default () => {
  const store = createStore(mainReducer, applyMiddleware(thunk, logger));
  return store;
};
