import React from 'react'
import propTypes from 'prop-types'
import cls from './FriendsHeader.module.scss'
import {Link} from "react-router-dom";
//как прокинуть через props?
import avatar from '../../../img/me.png';

class FriendsHeader extends React.Component {
    static propTypes = {
        myFio: propTypes.string.isRequired
    };

    render() {

        return (
            <div className={cls.header}>
                <div className={cls.header_me}>
                    <img src={avatar} alt="my_avatar"/>
                    <div className={cls.header_me_nickname}>
                        <Link to="/me">
                            {this.props.myFio}
                        </Link>
                    </div>
                </div>
                <div className={cls.header_back}>
                    <Link to="/wishlistmain">
                        Вернуться к поиску
                    </Link>
                </div>
            </div>
        )
    }
}

export default FriendsHeader;