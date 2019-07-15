import React from 'react';

import FriendsSearch from "./FriendsSearch";
import FriendsList from "./FriendsList";
import FriendsHeader from "./FriendsHeader";


class FriendsPage extends React.Component {
    render() {
        return (
            <div>
                < FriendsHeader myFio="Alex Smith" />
                < FriendsSearch placeholder="Начните вводить имя друга" />
                < FriendsList />
            </div>
        );
    }
}

export default FriendsPage