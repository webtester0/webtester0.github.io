import React from 'react'
import propTypes from 'prop-types'
import cls from './Frienditem.module.scss'
import image from "../../../../img/friends.png";
import {Link} from "react-router-dom";

class Frienditem extends React.Component {


    render() {
        const {first_name, last_name, photo_200} = this.props;
        return (
            <div className={cls.container}>
                <img src={photo_200} alt="user_avatar"/>
                <div className={cls.container_item}>
                    <div className={cls.container_item_name}>{`${first_name} ${last_name}`}</div>
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