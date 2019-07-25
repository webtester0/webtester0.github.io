import React from 'react'
import PropTypes from 'prop-types'
import cls from './Wishlistitem.module.scss'

class Wishlistitem extends React.Component {

    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        author: PropTypes.string
    };

    render() {
        const {image, title, price, author, addToWish} = this.props;

        return (
            < div className={cls.item} >
                    <img src={image} alt="wishlist_item"/>
                    <div className={cls.item_title}>{title}</div>
                    <div className={cls.item_price}>{`${price} ₽`}</div>
                    <div className={cls.item_author}>{author}</div>
                    <button className={cls.item_favorites} onClick={addToWish.bind(this, this.props)}>
                        Добавить в избранное
                    </button>
             </div>
        )
    }
}

export default Wishlistitem;