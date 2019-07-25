import React from 'react';
import HeaderMain from "./HeaderMain";
import SearchMain from "../../containers/SerachMain";
import WishlistMain from "../../containers/WishlistMain";


class WishList extends React.Component {
    render() {
        return (
            <div>
                < HeaderMain myFio={'Alex Smith'} />
                < SearchMain placeholder="Введите название товара"/>
                < WishlistMain/>
            </div>
        );
    }
}

export default WishList