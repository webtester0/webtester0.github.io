import React from 'react'
import propTypes from 'prop-types'
import cls from './MyWishList.module.scss'
import PendingWishlist from "./PendingWishList";

class MyWishList extends React.Component {

    render() {

        return (
            <div className={cls.wishlist}>
                <PendingWishlist />
            </div>
        )
    }
}

export default MyWishList;