import actionTypes from '../actionTypes';

const searchSetQuery = string => ({
  type: actionTypes.SEARCH_SET_QUERY,
  payload: string,
});

export default searchSetQuery;
