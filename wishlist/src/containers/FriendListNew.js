import {connect} from 'react-redux'
import FriendsListNew from "../pages/FriendsPage/FriendsListNew";
import {getFriends} from "../actions/friends";
import {searchFriendsByQuery} from "../actions/friendsSearch";

//Другой вариант
// const searchFriends = (friends, searchQuery) => {
//     if(searchQuery) {
//         friends = friends.filter(friend =>
//             ~friend.first_name.toLocaleLowerCase().indexOf(searchQuery.toLowerCase()) ||
//             ~friend.last_name.toLocaleLowerCase().indexOf(searchQuery.toLowerCase()) ||
//             ~(friend.first_name + ' ' + friend.last_name).toLocaleLowerCase().indexOf(searchQuery.toLowerCase()))
//         return friends
//     }
//     return friends
// };


const mapStateToProps = ({friends, friendsSearch}) => ({
    isLoading: friends.isLoading,
    friendsSearch: friendsSearch.items,
    friends: friends.friends,
    error: friends.error,
    searchQuery: friendsSearch.searchQuery
});

const mapDispatchToProps = dispatch => ({
    getFriends: () => dispatch(getFriends()),
    searchFriendsByQuery: (value) => dispatch(searchFriendsByQuery(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListNew)