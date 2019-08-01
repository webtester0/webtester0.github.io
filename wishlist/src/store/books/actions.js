import axios from 'axios';
import actionTypes from '../actionTypes';

export const addToWish = obj => ({
  type: actionTypes.ADD_TO_WISH_LIST,
  payload: obj,
});

export const removeWish = id => ({
  type: actionTypes.DELETE_FROM_WISH,
  payload: id,
});

export const setBooks = () => dispatch => {
  dispatch({
    type: actionTypes.BOOKS_REQUEST,
  });

  axios
    .get('/books.json')
    .then(data =>
      dispatch({
        type: actionTypes.BOOKS_SUCCESS,
        payload: data,
      })
    )
    .catch(error =>
      dispatch({
        type: actionTypes.BOOKS_ERROR,
        payload: error,
      })
    );
};
