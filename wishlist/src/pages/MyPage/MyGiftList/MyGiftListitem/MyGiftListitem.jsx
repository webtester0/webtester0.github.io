import React from 'react'
import propTypes from 'prop-types'
import cls from './MyGiftListitem.module.scss'
//все через props
import image from "../../../../img/macpro.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons/faGift";

class Wishlistitem extends React.Component {
    static propTypes = {
        name: propTypes.string.isRequired,
        price: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
    }
    onClick = () => {

        this.props.onClick(this.props.key)
    };

    render() {
        return (
            <div className={cls.item}>
                <img src={image} alt="wishlist_item"/>
                <div className={cls.item_name}>{this.props.name}</div>
                <div className={cls.item_price}>{this.props.price}</div>
                <div className={cls.item_description}>{this.props.description}</div>
                <button className={`${cls.item_favorites}`} onClick={this.onClick}>
                    Удалить
                </button>
                <div className={cls.item_icon} data-tooltip="Кто-то хочет это тебе подарить">
                    <FontAwesomeIcon icon={faGift} className={cls.item_icon_gift} />
                </div>
            </div>
        )
    }
}

export default Wishlistitem