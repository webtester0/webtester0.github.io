import {connect} from 'react-redux'
import FriendsListNew from "../pages/FriendsPage/FriendsListNew";
import {getFriends} from "../actions/friends";

const searchFriends = (friends, searchQuery) => {
    if(searchQuery) {
        friends = friends.filter(friend =>
            ~friend.first_name.toLocaleLowerCase().indexOf(searchQuery.toLowerCase()) ||
            ~friend.last_name.toLocaleLowerCase().indexOf(searchQuery.toLowerCase()) ||
            ~(friend.first_name + ' ' + friend.last_name).toLocaleLowerCase().indexOf(searchQuery.toLowerCase()))
        return friends
    }
    return friends
};


const mapStateToProps = ({friends, friendsSearch}) => ({
    isLoading: friends.isLoading,
    friends: searchFriends(friends.friends, friendsSearch.searchQuery),
    error: friends.error
});

const mapDispatchToProps = dispatch => ({
    getFriends: () => dispatch(getFriends())
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListNew)