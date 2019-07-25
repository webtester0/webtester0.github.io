import React from 'react'
import propTypes from 'prop-types'
import cls from './FriendWishList.module.scss'
import PendingFriendWishList from "./PendingWishList";

class FriendWishList extends React.Component {

    render() {

        return (
            <div className={cls.wishlist}>
                <PendingFriendWishList />
            </div>
        )
    }
}

export default FriendWishList;