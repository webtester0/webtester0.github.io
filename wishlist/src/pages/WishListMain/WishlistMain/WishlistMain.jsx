import React from 'react'
import PropTypes from 'prop-types'
import cls from './WishlistMain.module.scss'
import Wishlistitem from "./Wishlistitem";


class WishlistMain extends React.Component {

    static propTypes = {
        setBooks: PropTypes.func.isRequired,
        items: PropTypes.arrayOf(PropTypes.object),
        isLoading: PropTypes.bool.isRequired
    };

    renderTemplate = () => {
        const {items, isLoading, setBooks, error, addToWish} = this.props;

        if (isLoading) {
            return <h1 className={cls.load}>LOADING BOOKS ...</h1>
        }

        if (error) {
            return <h1 className={cls.load}>Во время загрузки произошла ошибка</h1>
        }

        if (!items) {
            setBooks();
            return <h1 className={cls.load}>Данных нет</h1>
        } else {
            return items.map(item => < Wishlistitem
                key={item.id} {...item} addToWish={addToWish}/>)
        }

    };

    render() {
        return (
            <div className={cls.box}>

                <div className={cls.title}>Популярное <i className="em em-star-struck"></i></div>
                <div className={cls.container}>
                    <div className={cls.container_wishlist}>
                        {this.renderTemplate()}
                    </div>
                </div>
            </div>
        )
    }
}

export default WishlistMain;

