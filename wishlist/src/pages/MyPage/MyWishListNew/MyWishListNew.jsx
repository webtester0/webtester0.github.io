import React from 'react'
import cls from './MyWishListNew.module.scss'
import Wishlistitem from './Wishlistitem/Wishlistitem'
import {connect} from 'react-redux'
import * as booksActions from '../../../actions/books'
import {bindActionCreators} from "redux";

class MyWishListNew extends React.Component {

    render() {
        const {wishList, removeWish} = this.props;

        return (
            <div className={cls.container}>
                <div className={cls.container_wishlist}>
                    {wishList.length === 0 ? <h1 className={cls.wishlist_empty}>WishList is empty</h1>
                    : wishList.map(item => <Wishlistitem key={item.id} {...item} removeWish={removeWish}/>)
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({books}) => ({
    wishList: books.wishList
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyWishListNew)
