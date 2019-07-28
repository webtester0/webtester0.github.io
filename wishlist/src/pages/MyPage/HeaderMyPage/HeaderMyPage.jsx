import React from 'react'
import cls from './HeaderMyPage.module.scss'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'

class HeaderMyPage extends React.Component {

    static propTypes = {
        friendOne: propTypes.string.isRequired,
        friendTwo: propTypes.string.isRequired,
        friendThree: propTypes.string.isRequired,
    };

    render() {

        const {friendOne, friendTwo, friendThree, getFriendsInfo, getInfo} = this.props;

        getInfo();
        getFriendsInfo();

        return (
            <div className={cls.header}>
                <div className={cls.header_back}>
                    <div className={cls.header_back_title}>
                        <Link to="/wishlistmain" className="link">Вернуться к списку</Link>
                    </div>
                </div>
                <div className={cls.header_friends}>
                    <div className={cls.nickname}>
                        <Link to="/friends" className="link">Мои друзья</Link>
                    </div>
                    <img className={`${cls.first_img} ${cls.header_friends_avatar}`} src={friendOne} alt="avatar"/>
                    <img className={`${cls.second_img} ${cls.header_friends_avatar}`} src={friendTwo} alt="avatar"/>
                    <img className={`${cls.third_img} ${cls.header_friends_avatar}`} src={friendThree} alt="avatar"/>
                </div>
            </div>
        )
    }
}

export default HeaderMyPage;