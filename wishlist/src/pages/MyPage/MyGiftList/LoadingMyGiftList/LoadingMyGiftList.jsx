import React from 'react'
import cls from './LoadingMyGiftList.scss'


class LoadingMyGiftList extends React.Component {

    render() {
        return (
            <div className={cls.pending}>
                LOADING GIFT_LIST
            </div>
        )
    }
}

export default LoadingMyGiftList