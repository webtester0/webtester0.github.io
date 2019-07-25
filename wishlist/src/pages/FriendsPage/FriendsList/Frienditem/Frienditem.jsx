import React from 'react'
import propTypes from 'prop-types'
import cls from './Frienditem.module.scss'
//все через props
import image from "../../../../img/friends.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGift} from "@fortawesome/free-solid-svg-icons/faGift";
import {Link} from "react-router-dom";

class Frienditem extends React.Component {
    static propTypes = {
        name: propTypes.string.isRequired,

    };

    render() {
        return (
            <div className={cls.container}>
                <img src={image} alt="wishlist_item"/>
                <div className={cls.container_item}>
                    <div className={cls.container_item_name}>{this.props.name}</div>
                    <button className={`${cls.container_item_favorites}`} >
                        <Link to="/friendpage">
                            Узнать что подарить
                        </Link>
                    </button>
                </div>
            </div>

        )
    }
}

export default Frienditem