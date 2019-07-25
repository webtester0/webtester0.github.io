import React from 'react'
import cls from './LoadingWishList.scss'


class LoadingWishList extends React.Component {

    render() {
        return (
            <div className={cls.pending}>
                LOADING MY_WISH_LIST
            </div>
        )
    }
}

export default LoadingWishList