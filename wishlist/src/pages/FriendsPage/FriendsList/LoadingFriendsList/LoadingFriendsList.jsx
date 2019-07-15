import React from 'react'
import cls from './LoadingFriendsList.module.scss'


class LoadingFriendsList extends React.Component {

    render() {
        return (
            <div className={cls.pending}>
                LOADING YOUR_FRIENDS_LIST
            </div>
        )
    }
}

export default LoadingFriendsList