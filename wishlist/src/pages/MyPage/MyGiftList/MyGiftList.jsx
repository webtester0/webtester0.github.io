import React from 'react'
import propTypes from 'prop-types'
import cls from './MyGiftList.module.scss'
import PendingMyGiftList from "./PendingWishList";

class MyGiftList extends React.Component {

    render() {

        return (
            <div className={cls.wishlist}>
                <PendingMyGiftList />
            </div>
        )
    }
}

export default MyGiftList;