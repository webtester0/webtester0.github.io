import React from 'react'
import propTypes from 'prop-types'
import cls from './FriendsList.module.scss'
import PendingFriendsList from "./PendingFriendsList"


class FriendsList extends React.Component {

    render() {

        return (
            <div>
                <div className={cls.wishlist}>
                    < PendingFriendsList/>
                </div>
            </div>
        )
    }
}

export default FriendsList;