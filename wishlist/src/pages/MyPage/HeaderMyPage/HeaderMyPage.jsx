import React from 'react'
import propTypes from 'prop-types'
import cls from './HeaderMyPage.module.scss'
import avatar from '../../../img/me.png'

console.log(avatar);

class HeaderMyPage extends React.Component {

    render() {

        return (
            <div className={cls.header}>
                <div className={cls.header_back}>
                    <div className={cls.header_back_title}>Вернуться к списку</div>
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

export default HeaderMyPage;