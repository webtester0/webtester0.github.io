import React from 'react'
import propTypes from 'prop-types'
import cls from './WishlistMain.module.scss'
import Wishlistitem from "./Wishlistitem";
import Masonry from 'react-masonry-component';


class WishlistMain extends React.Component {

    render() {

        return (
            <div className={cls.container}>
                <div className={cls.container_title}>Популярное <i className="em em-star-struck"></i></div>
                <div className={cls.container_wishlist}>
                    < Wishlistitem />
                    < Wishlistitem />
                    < Wishlistitem />
                </div>
            </div>
        )
    }
}

export default WishlistMain;