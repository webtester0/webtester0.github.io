import React from 'react';
import FriendsHeader from "./FriendsHeader";
import FriendsListNew from "../../containers/FriendListNew";
import FriendsSearch from '../../containers/FriendsSearch'


class FriendsPage extends React.Component {
    render() {
        return (
            <div>
                < FriendsHeader myFio="Alex Smith" />
                < FriendsSearch placeholder="Начните вводить имя друга" title="Мои друзья" emoji="em em-stuck_out_tongue_winking_eye" name="friends"/>
                {/*< FriendsList />*/}
                < FriendsListNew/>
            </div>
        );
    }
}

export default FriendsPage