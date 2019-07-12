import React from 'react'
import propTypes from 'prop-types'
import cls from './MyInfo.module.scss'
import avatar from '../../../img/me.png'

console.log(avatar);

class MyInfo extends React.Component {

    render() {

        return (
            <div className={cls.container}>
                <div className={cls.container_me}>
                    <img src={avatar} alt="my_avatar"/>
                    <div className={cls.container_me_info}>
                        <div className={cls.container_me_info_title}>
                            Антон Чащин
                        </div>
                        <div className={cls.container_me_info_want}>
                            Хочу получить <i className="em em-smiley"></i>
                        </div>
                        <div className={cls.container_me_info_gift}>
                            Хочу подарить <i className="em em-smiley_cat"></i>
                        </div>
                        <button className={cls.container_me_info_share}>Поделиться</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyInfo;