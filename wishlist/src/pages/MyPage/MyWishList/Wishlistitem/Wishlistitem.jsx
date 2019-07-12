import React from 'react'
import propTypes from 'prop-types'
import cls from './Wishlistitem.module.scss'
import image from "../../../../img/macpro.png";

class Wishlistitem extends React.Component {
    render() {
        return (
            <div className={cls.item}>
                <img src={image} alt="wishlist_item"/>
                <div className={cls.item_name}>MacBook Pro 2018 256GB</div>
                <div className={cls.item_price}>120 000 ₽</div>
                <div className={cls.item_description}>Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256
                    ГБ SSD, Iris Plus 655, Touch Bar (серый космос)
                </div>
                <button className={cls.item_favorites}>
                    Удалить
                </button>
                <div className={cls.item_icon}>
                    <span tooltip="Кто-то хочет это тебе подарить"><i className="fal fa-gift"></i></span>
                </div>
            </div>
        )
    }
}

export default Wishlistitem