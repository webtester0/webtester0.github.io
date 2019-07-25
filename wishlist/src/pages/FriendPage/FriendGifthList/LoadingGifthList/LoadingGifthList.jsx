import React from 'react'
import cls from './LoadingGifthList.scss'


class LoadingGifthList extends React.Component {

    render() {
        return (
            <div className={cls.pending}>
                LOADING FRIEND_GIFT_LIST
            </div>
        )
    }
}

export default LoadingGifthList