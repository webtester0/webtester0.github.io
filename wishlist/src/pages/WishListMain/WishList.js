import React from 'react';
import HeaderMain from "./HeaderMain";
import SearchMain from "./SearchMain";
import WishlistMain from "./WishlistMain";


class WishList extends React.Component {
    render() {
        return (
            <div>
                < HeaderMain />
                < SearchMain placeholder="Введите название товара"/>
                < WishlistMain/>
            </div>
        );
    }
}

export default WishList