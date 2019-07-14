import React from 'react'
import propTypes from 'prop-types'
import cls from './WishlistMain.module.scss'
import Wishlistitem from "./Wishlistitem";

let wishListItems = [];
const axios = require('axios');
const searchParam = 'batman';
const getImg = async(films) => {
    try {
        await axios.get(`http://www.omdbapi.com/?apikey=6ca773de&s=${films}`)
            .then (res => {
                console.log(res.data);
                return res.data
            })
            .then(res => {

            })
    } catch (e) {
        console.log(e);
    }
};


class WishlistMain extends React.Component {
    render() {
        return (
            <div className={cls.box}>
                <div className={cls.title}>Популярное <i className="em em-star-struck"></i></div>
                <div className={cls.container}>
                    <div className={cls.container_wishlist}>
                        <Wishlistitem/>
                        <Wishlistitem/>
                        <Wishlistitem/>
                        <Wishlistitem/>
                        <Wishlistitem/>
                    </div>
                </div>
            </div>
        )
    }
}

export default WishlistMain;