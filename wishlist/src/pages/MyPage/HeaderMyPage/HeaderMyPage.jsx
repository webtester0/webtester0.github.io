import React from 'react'
import cls from './HeaderMyPage.module.scss'
import avatar from '../../../img/me.png'
import {Link} from 'react-router-dom'


class HeaderMyPage extends React.Component {

    render() {

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
                    <img className={`${cls.first_img} ${cls.header_friends_avatar}`} src={avatar} alt="my_avatar"/>
                    <img className={`${cls.second_img} ${cls.header_friends_avatar}`} src={avatar} alt="my_avatar"/>
                    <img className={`${cls.third_img} ${cls.header_friends_avatar}`} src={avatar} alt="my_avatar"/>
                </div>
            </div>
        )
    }
}

export default HeaderMyPage;