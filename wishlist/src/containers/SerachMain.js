import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as searchActions from '../actions/search'
import SearchMain from '../components/Search'



const mapStateToProps = ({search}) => ({
    searchQuery: search.searchQuery
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(searchActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMain)