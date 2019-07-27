import React from 'react';
import HeaderMain from "../../containers/HeaderMain";
import SearchMain from "../../containers/SerachMain";
import WishlistMain from "../../containers/WishlistMain";


class WishList extends React.Component {
    render() {
        return (
            <div>
                < HeaderMain myFio={'Alex Smith'} />
                < SearchMain placeholder="Введите название товара" name="main" emoji="em em-heart_eyes_cat" title="Wishlist"/>
                < WishlistMain/>
            </div>
        );
    }
}

export default WishList