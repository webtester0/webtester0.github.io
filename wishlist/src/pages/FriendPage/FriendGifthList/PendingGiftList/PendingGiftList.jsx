import React from 'react'
import LoadingGifthList from "../LoadingGifthList";
import Giftlistitem from "../Giftlistitem";
import cls from './PendingGiftList.module.scss'


const items = [
    {
        id: 1,
        name: 'MacBook Pro 2018 256GB',
        price: '120 000 ₽',
        description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256\n' +
            '                    ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',

    },
    {
        id: 2,
        name: 'MacBook Pro 2018 256GB',
        price: '120 000 ₽',
        description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256\n' +
            '                    ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',

    }, {
        id: 3,
        name: 'MacBook Pro 2018 256GB',
        price: '120 000 ₽',
        description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256\n' +
            '                    ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',

    }, {
        id: 4,
        name: 'MacBook Pro 2018 256GB',
        price: '120 000 ₽',
        description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256\n' +
            '                    ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',

    }, {
        id: 5,
        name: 'MacBook Pro 2018 256GB',
        price: '120 000 ₽',
        description: 'Ноутбук Apple MacBook Pro 13.3" Core i5 2,4 ГГц, 8 ГБ, 256\n' +
            '                    ГБ SSD, Iris Plus 655, Touch Bar (серый космос)',

    }
];

class PendingGiftList extends React.Component {
    //можно ли так объявлять событие, до state ?
    handlerDelItem = (id) => {
        let wishItems = this.state.wishItems.slice();
        wishItems.splice(id, 1);
        this.setState({wishItems});
    };

    state = {
        isLoading: false,
        wishItems: items.map(item => {
           return < Giftlistitem key={item.id} name={item.name} price={item.price} description={item.description}
                                 onClick={this.handlerDelItem}/>
        })
    };

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000)
    }

    render() {
        const {isLoading} = this.state;
        let wishlist;

        if (isLoading) {
            wishlist = <div className={cls.load}><LoadingGifthList/></div>
        } else {
            wishlist = this.state.wishItems
        }
        return (
            <div className={cls.container}>
                {wishlist}
            </div>
        );
    }
}

export default PendingGiftList