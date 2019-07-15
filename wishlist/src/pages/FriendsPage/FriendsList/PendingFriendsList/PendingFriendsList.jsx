import React from 'react'
import LoadingFriendsList from "../LoadingFriendsList";
import Frienditem from "../Frienditem";
import cls from './PendingFriendsList.module.scss'


const items = [
    {
        id: 1,
        name: 'Stephen Curry'

    },
    {
        id: 2,
        name: 'Klay Thompson'

    }, {
        id: 3,
        name: 'Omari Spellman'

    }, {
        id: 4,
        name: 'Draymond Green'

    }, {
        id: 5,
        name: 'Jacob Evans'
    }
];

class PendingFriendsList extends React.Component {
    //можно ли так объявлять событие, до state ?
    handlerDelItem = (id) => {
        let wishItems = this.state.wishItems.slice();
        wishItems.splice(id, 1);
        this.setState({wishItems});
    };

    state = {
        isLoading: false,
        wishItems: items.map(item => {
           return < Frienditem key={item.id} name={item.name} price={item.price} description={item.description}
                               onClick={this.handlerDelItem}/>
        })
    };

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 1000)
    }

    render() {
        const {isLoading} = this.state;
        let wishlist;

        if (isLoading) {
            wishlist = <div className={cls.load}><LoadingFriendsList/></div>
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

export default PendingFriendsList