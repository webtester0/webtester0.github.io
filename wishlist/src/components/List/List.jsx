import React from 'react';
import propTypes from 'prop-types';
import cls from './List.module.scss';
import ListItem from '../ListItem';

class List extends React.Component {
  static propTypes = {
    items: propTypes.oneOfType([
      propTypes.arrayOf(propTypes.object).isRequired,
      propTypes.oneOf([null]).isRequired,
    ]),
    isLoading: propTypes.bool,
    setBooks: propTypes.func,
    error: propTypes.string,
    addToWish: propTypes.func,
    title: propTypes.string,
    wishList: propTypes.arrayOf(propTypes.object),
    removeWish: propTypes.func,
    listName: propTypes.string.isRequired,
  };

  static defaultProps = {
    items: [],
    isLoading: false,
    setBooks: () => {},
    error: '',
    title: '',
    wishList: [],
    removeWish: () => {},
    addToWish: () => {},
  };

  renderTitle = () => {
    const { title } = this.props;
    if (title) {
      return (
        <div className={cls.title}>
          {title} 
          {' '}
          <i className="em em-star-struck" />
        </div>
      );
    }
    return null;
  };

  renderPopular = () => {
    const { items, isLoading, setBooks, error, addToWish } = this.props;

    if (isLoading) {
      return <h1 className={cls.load}>LOADING BOOKS ...</h1>;
    }

    if (error) {
      return <h1 className={cls.load}>Во время загрузки произошла ошибка</h1>;
    }

    if (!items.length) {
      setBooks();
      return <h1 className={cls.load}>Данных нет</h1>;
    }
    return items.map(item => (
      <ListItem key={item.id} {...item} addToWish={addToWish} button="main" />
    ));
  };

  renderWish = () => {
    const { wishList, removeWish } = this.props;

    if (!wishList.length) {
      return <h1 className={cls.wishlist_empty}>WishList is empty</h1>;
    }
    return wishList.map(item => (
      <ListItem
        key={item.id}
        {...item}
        removeWish={removeWish}
        inherent="wish"
        button="wishList"
      />
    ));
  };

  renderGift = () => {
    const { wishList } = this.props;

    if (!wishList.length) {
      return <h1 className={cls.wishlist_empty}>WishList is empty</h1>;
    }
    return wishList.map(item => (
      <ListItem
        key={item.id}
        {...item}
        inherent="gift"
        fio="User"
        button="giftList"
      />
    ));
  };

  renderList = () => {
    const { listName } = this.props;

    if (listName === 'main') {
      return this.renderPopular();
    }
    if (listName === 'wish') {
      return this.renderWish();
    }
    if (listName === 'gift') {
      return this.renderGift();
    }
    return null;
  };

  render() {
    return (
      <div className={cls.container}>
        {this.renderTitle()}
        <div className={cls.container_wishlist}>{this.renderList()}</div>
      </div>
    );
  }
}

export default List;
