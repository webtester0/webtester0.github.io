import React from 'react'
import propTypes from 'prop-types'
import cls from './MyWishList.module.scss'
import avatar from '../../../img/me.png'
import Wishlistitem from "./Wishlistitem";

console.log(avatar);

class MyWishList extends React.Component {

    render() {

        return (
            <div className={cls.wishlist}>
                < Wishlistitem />
                < Wishlistitem />
                < Wishlistitem />
            </div>
        )
    }
}

export default MyWishList;