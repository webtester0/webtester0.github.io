import {combineReducers} from "redux";
import books from './books'
import search from './search'
import friends from './friends'
import friendsSearch from "./friendsSearch";


const rootReducer = combineReducers({
    books,
    search,
    friends,
    friendsSearch
});

export default rootReducer