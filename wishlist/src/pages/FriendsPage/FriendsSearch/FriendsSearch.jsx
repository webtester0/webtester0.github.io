import React from 'react'
import cls from './FriendsSearch.module.scss'
import propTypes from 'prop-types'
import {DebounceInput} from "react-debounce-input"


class FriendsSearch extends React.Component {
    static propTypes = {
        placeholder: propTypes.string.isRequired
    };

    handlerOnChange = (e) => {
        this.props.setQuery(e.target.value)
    };

    render() {

        const {placeholder, searchQuery} = this.props;

        return (
            <div className={cls.container}>
                <div className={cls.container_title}>Мои друзья <i className="em em-stuck_out_tongue_winking_eye"/>
                </div>
                <DebounceInput type="text" placeholder={placeholder} className={cls.container_input}
                       onChange={this.handlerOnChange} value={searchQuery} minLength={1} debounceTimeout={300}/>
            </div>
        )
    }
}

export default FriendsSearch