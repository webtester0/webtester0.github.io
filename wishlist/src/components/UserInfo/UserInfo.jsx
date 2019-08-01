import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cls from './UserInfo.module.scss';
import Button from '../Button';

const UserInfo = ({ fio, photo, linkWish, linkGift }) => {
  return (
    <div className={cls.container}>
      <div className={cls.container_me}>
        <img src={photo} alt="my_avatar" />
        <div className={cls.container_me_info}>
          <div className={cls.container_me_info_title}>{fio}</div>
          <div className={cls.container_me_info_want}>
            <Link to={linkWish} className={cls.container_me_info_want_link}>
              Хочу получить 
              {' '}
              <i className="em em-smiley" />
            </Link>
          </div>
          <div className={cls.container_me_info_gift}>
            <Link
              to={linkGift}
              className={`${cls.container_me_info_gift_link}`}
            >
              Хочу подарить 
              {' '}
              <i className="em em-smiley_cat" />
            </Link>
          </div>
          <Button text="Поделиться" classStyle="share" />
        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  fio: propTypes.string.isRequired,
  photo: propTypes.string.isRequired,
  linkWish: propTypes.string.isRequired,
  linkGift: propTypes.string.isRequired,
};

export default UserInfo;
