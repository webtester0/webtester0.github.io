import {connect} from 'react-redux'
import FriendsSearch from "../pages/FriendsPage/FriendsSearch";
import {setQuery} from "../actions/friendsSearch";

const mapStateToProps = ({friendsSearch}) => ({
    searchQuery: friendsSearch.searchQuery
});

const mapDispatchToProps = dispatch => ({
    setQuery: (value) => dispatch(setQuery(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsSearch);

