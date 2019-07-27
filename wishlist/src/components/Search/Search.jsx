import React from 'react'
import main from '../../pages/WishListMain/SearchMain/SearchMain.module.scss'
import friends from '../../pages/FriendsPage/FriendsSearch/FriendsSearch.module.scss'
import {DebounceInput} from "react-debounce-input";
import propTypes from 'prop-types'


class Search extends React.Component{
    static propTypes = {
        placeholder: propTypes.string.isRequired
    };

    handlerOnChange = (e) => {
        this.props.setQuery(e.target.value)
    };

    render() {
        let cls
        const {placeholder, searchQuery, title, emoji, name} = this.props;
        name === 'friends' ? cls = friends : cls = main;
        return (
            <div className={cls.container}>
                <div className={cls.container_title}>{title}<i className={`${emoji}`}/>
                </div>
                <DebounceInput type="text" placeholder={placeholder} className={cls.container_input}
                               onChange={this.handlerOnChange} value={searchQuery} minLength={1} debounceTimeout={300}/>
            </div>
        )
    }
}

export default Search