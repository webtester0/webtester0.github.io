import React from 'react'
import propTypes from 'prop-types'
import cls from './HeaderMain.module.scss'
import {Link} from "react-router-dom";
import avatar from '../../../img/me.png';

class HeaderMain extends React.Component {
    static propTypes = {
        fio: propTypes.string,
        myPhoto: propTypes.string,
        friendOne: propTypes.string,
        friendTwo: propTypes.string,
        friendThree: propTypes.string,
    };

    render() {

        const {fio, myPhoto, friendOne, friendTwo, friendThree,getInfo,getFriendsInfo} = this.props;

        getInfo();
        getFriendsInfo();

        return (
            <div className={cls.header}>
                <div className={cls.header_me}>
                    <img src={myPhoto} alt="my_avatar"/>
                    <div className={cls.nickname}>
                        <Link to="/me">
                            {fio}
                        </Link>
                    </div>
                </div>
                <div className={cls.header_friends}>
                    <div className={cls.nickname}>
                        <Link to="/friends">
                            Мои друзья
                        </Link>
                    </div>
                    <img className={`${cls.first_img} ${cls.header_friends_avatar}`} src={friendOne} alt="avatar"/>
                    <img className={`${cls.second_img} ${cls.header_friends_avatar}`} src={friendTwo} alt="avatar"/>
                    <img className={`${cls.third_img} ${cls.header_friends_avatar}`} src={friendThree} alt="avatar"/>
                </div>
            </div>
        )
    }
}

export default HeaderMain;