import React from 'react'
import propTypes from 'prop-types'
import cls from './MyInfo.module.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class MyInfo extends React.Component {

    static propTypes = {
        fio: propTypes.string.isRequired
    };

    handlerOnClick = () => {

    };

    render() {
        const {fio, myPhoto} = this.props;
        return (
            <div className={cls.container}>
                <div className={cls.container_me}>
                    <img src={myPhoto} alt="my_avatar"/>
                    <div className={cls.container_me_info}>
                        <div className={cls.container_me_info_title}>
                            {fio}
                        </div>
                        <div className={cls.container_me_info_want}>
                            <Link to='/me' className={cls.container_me_info_want_link}>
                                Хочу получить <i className="em em-smiley"></i>
                            </Link>
                        </div>
                        <div className={cls.container_me_info_gift}>
                            <Link to='/me/giftlist' className={`${cls.container_me_info_gift_link}`}>
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

const mapStateToProps = ({userInfo}) => ({
    fio: userInfo.fio,
    myPhoto: userInfo.myPhoto,
});

export default connect(mapStateToProps)(MyInfo);