import React from 'react'
import propTypes from 'prop-types'
import cls from './MyInfo.module.scss'
import avatar from '../../../img/me.png'
import {Link} from 'react-router-dom'

console.log(avatar);

class MyInfo extends React.Component {
    static propTypes = {
        myFio: propTypes.string.isRequired
    };
    render() {

        return (
            <div className={cls.container}>
                <div className={cls.container_me}>
                    <img src={avatar} alt="my_avatar"/>
                    <div className={cls.container_me_info}>
                        <div className={cls.container_me_info_title}>
                            {this.props.myFio}
                        </div>
                        <div className={cls.container_me_info_want}>
                            <Link to='/me' className={cls.container_me_info_want_link}>
                                Хочу получить <i className="em em-smiley"></i>
                            </Link>
                        </div>
                        <div className={cls.container_me_info_gift}>
                            <Link to='/me/giftlist' className={cls.container_me_info_gift_link}>
                                Хочу подарить <i className="em em-smiley_cat"></i>
                            </Link>
                        </div>
                        <button className={cls.container_me_info_share}>Поделиться</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyInfo;