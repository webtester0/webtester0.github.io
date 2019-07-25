import React from 'react';
import FriendsHeader from "./FriendsHeader";
import FriendsListNew from "../../containers/FriendListNew";
import FriendsSearch from '../../containers/FriendsSearch'


class FriendsPage extends React.Component {
    render() {
        return (
            <div>
                < FriendsHeader myFio="Alex Smith" />
                < FriendsSearch placeholder="Начните вводить имя друга" />
                {/*< FriendsList />*/}
                < FriendsListNew/>
            </div>
        );
    }
}

export default FriendsPage