import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons/faGift';
import propTypes from 'prop-types';
import cls from './ListItem.module.scss';
import avatar from '../../img/friends.png';
import Button from '../Button';

class ListItem extends React.Component {
  static propTypes = {
    image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    author: propTypes.string.isRequired,
    inherent: propTypes.string,
    fio: propTypes.string,
    button: propTypes.string,
    addToWish: propTypes.func,
    removeWish: propTypes.func,
    id: propTypes.number,
    userAvatar: propTypes.string,
  };

  static defaultProps = {
    inherent: '',
    fio: '',
    button: '',
    addToWish: () => {},
    removeWish: () => {},
    id: 0,
    userAvatar: avatar,
  };

  renderTemplateCircle = () => {
    const { inherent, fio, userAvatar } = this.props;

    if (inherent) {
      if (inherent === 'wish') {
        return (
          <div
            className={cls.item_icon}
            data-tooltip="Кто-то хочет это тебе подарить"
          >
            <FontAwesomeIcon icon={faGift} className={cls.item_icon_gift} />
          </div>
        );
      }
      if (inherent === 'gift') {
        return (
          <div
            className={cls.item_user}
            data-tooltip-friend={`Этот подарок для пользователя ${fio}`}
          >
            {/* аватарка пользователя */}
            <img src={userAvatar} alt="user_avatar" />
          </div>
        );
      }
    }
    return null
  };

  renderTemplateButton = () => {
    const { button, addToWish, removeWish, id } = this.props;

    if (button === 'main') {
      const item = this.props;
      return (
        <Button
          func={addToWish}
          arg={item}
          text="Добавить в избранное"
          classStyle="main"
        />
      );
    }

    if (button === 'wishList') {
      return (
        <Button func={removeWish} arg={id} text="Удалить" classStyle="list" />
      );
    }

    if (button === 'giftList') {
      return (
        <Button
          arg={id}
          text="Не подарю"
          classStyle="list"
          emoji="em em-disappointed_relieved"
        />
      );
    }

    if (button === 'share') {
      return <Button text="Поделиться" classStyle="share" />;
    }

    return null;
  };

  render() {
    const { image, title, price, author } = this.props;

    return (
      <div className={cls.item}>
        <img src={image} alt="wishlist_item" />
        <div className={cls.item_title}>{title}</div>
        <div className={cls.item_price}>{`${price} ₽`}</div>
        <div className={cls.item_author}>{author}</div>
        {this.renderTemplateButton()}
        {this.renderTemplateCircle()}
      </div>
    );
  }
}

export default ListItem;
