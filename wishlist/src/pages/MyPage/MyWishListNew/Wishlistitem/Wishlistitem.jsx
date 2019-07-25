import React from 'react'
import PropTypes from 'prop-types'
import cls from './Wishlistitem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons/faGift";

class Wishlistitem extends React.Component {

    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        author: PropTypes.string
    };

    render() {
        const {image, title, price, author, removeWish, id} = this.props;

        return (
            < div className={cls.item}>
                <img src={image} alt="wishlist_item"/>
                <div className={cls.item_title}>{title}</div>
                <div className={cls.item_price}>{`${price} ₽`}</div>
                <div className={cls.item_author}>{author}</div>
                <button className={cls.item_favorites} onClick={removeWish.bind(this, id)}>
                    Удалить
                </button>
                <div className={cls.item_icon} data-tooltip="Кто-то хочет это тебе подарить">
                    <FontAwesomeIcon icon={faGift} className={cls.item_icon_gift}/>
                </div>
            </div>
        )
    }
}

export default Wishlistitem;