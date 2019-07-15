import React from 'react'
import propTypes from 'prop-types'
import cls from './Frienditem.module.scss'
//все через props
import image from "../../../../img/friends.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons/faGift";

class Frienditem extends React.Component {
    static propTypes = {
        name: propTypes.string.isRequired,

    };

    onClick = () => {
        this.props.onClick(this.props.key)
    };

    render() {
        return (
            <div className={cls.container}>
                <img src={image} alt="wishlist_item"/>
                <div className={cls.container_item}>
                    <div className={cls.container_item_name}>{this.props.name}</div>
                    <button className={`${cls.container_item_favorites}`} onClick={this.onClick}>
                        Узнать что подарить
                    </button>
                </div>
            </div>

        )
    }
}

export default Frienditem