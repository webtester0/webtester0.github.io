import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as booksActions from '../actions/books'
import WishlistMain from '../pages/WishListMain/WishlistMain/WishlistMain'

const searchBooks = (items, searchQuery) => {
    if (searchQuery) {
        items = items.filter(item =>
            ~item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) ||
            ~item.author.toLowerCase().indexOf(searchQuery.toLowerCase()))
            return items;
    }
        return items;
};

const mapStateToProps = ({books, search}) => ({
    isLoading: books.isLoading,
    items: searchBooks(books.items, search.searchQuery),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistMain)