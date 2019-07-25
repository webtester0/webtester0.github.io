import React from 'react'
import propTypes from 'prop-types'
import cls from './HeaderMain.module.scss'
import {Link} from "react-router-dom";
import avatar from '../../../img/me.png';

class HeaderMain extends React.Component {
    static propTypes = {
        myFio: propTypes.string.isRequired
    };

    render() {

        return (
            <div className={cls.header}>
                <div className={cls.header_me}>
                    <img src={avatar} alt="my_avatar"/>
                    <div className={cls.nickname}>
                        <Link to="/me">
                            {this.props.myFio}
                        </Link>
                    </div>
                </div>
                <div className={cls.header_friends}>
                    <div className={cls.nickname}>Мои друзья</div>
                    <img className={`${cls.first_img} ${cls.header_friends_avatar}`} src={avatar} alt="my_avatar"/>
                    <img className={`${cls.second_img} ${cls.header_friends_avatar}`} src={avatar} alt="my_avatar"/>
                    <img className={`${cls.third_img} ${cls.header_friends_avatar}`} src={avatar} alt="my_avatar"/>
                </div>
            </div>
        )
    }
}

export default HeaderMain;