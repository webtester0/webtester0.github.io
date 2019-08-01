import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cls from './Frienditem.module.scss';

const Frienditem = ({ first_name, last_name, photo_200 }) => {
  return (
    <div className={cls.container}>
      <img src={photo_200} alt="user_avatar" />
      <div className={cls.container_item}>
        <div className={cls.container_item_name}>
          {`${first_name} ${last_name}`}
        </div>
        <button type="button" className={`${cls.container_item_favorites}`}>
          <Link to="/friendpage">Узнать что подарить</Link>
        </button>
      </div>
    </div>
  );
};

Frienditem.propTypes = {
  first_name: propTypes.string.isRequired,
  last_name: propTypes.string.isRequired,
  photo_200: propTypes.string.isRequired,
};

export default Frienditem;
