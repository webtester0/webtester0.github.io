import React from 'react'
import propTypes from 'prop-types'
import cls from './FriendGiftList.module.scss'
import PendingGiftList from "./PendingGiftList"


class FriendGiftList extends React.Component {

    render() {

        return (
            <div className={cls.wishlist}>
                < PendingGiftList/>
            </div>
        )
    }
}

export default FriendGiftList;