import {combineReducers} from "redux";
import books from './books'
import search from './search'
import friends from './friends'
import friendsSearch from "./friendsSearch";
import userInfo from "./userInfo";


const rootReducer = combineReducers({
    books,
    search,
    friends,
    friendsSearch,
    userInfo
});

export default rootReducer