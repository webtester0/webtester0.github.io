import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';
import main from './SearchMain.module.scss';
import friends from './FriendsSearch.module.scss';

const Search = ({
  placeholder,
  searchQuery,
  title,
  emoji,
  name,
  searchSetQuery,
}) => {
  let cls;
  if (name === 'friends') {
    cls = friends;
  } else {
    cls = main;
  }
  return (
    <div className={cls.container}>
      <div className={cls.container_title}>
        {title}
        <i className={`${emoji}`} />
      </div>
      <DebounceInput
        type="text"
        placeholder={placeholder}
        className={cls.container_input}
        onChange={e => {
          searchSetQuery(e.target.value);
        }}
        value={searchQuery}
        minLength={1}
        debounceTimeout={300}
      />
    </div>
  );
};

Search.defaultProps = {
  searchSetQuery: () => {},
};

Search.propTypes = {
  placeholder: propTypes.string.isRequired,
  searchQuery: propTypes.string,
  title: propTypes.string.isRequired,
  emoji: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  searchSetQuery: propTypes.func.isRequired,
};

export default Search;
