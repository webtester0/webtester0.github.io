import React from 'react'
import cls from './LoadingWishList.scss'


class LoadingWishList extends React.Component {

    render() {
        return (
            <div className={cls.pending}>
                LOADING
            </div>
        )
    }
}

export default LoadingWishList