import React from 'react'
import cls from './FriendsSearch.module.scss'
import propTypes from 'prop-types'

class FriendsSearch extends React.Component {
    static propTypes = {
        placeholder: propTypes.string.isRequired
    };

    render() {
        const {placeholder, searchQuery, setQuery} = this.props;

        return (
            <div className={cls.container}>
                <div className={cls.container_title}>Мои друзья <i className="em em-stuck_out_tongue_winking_eye"></i>
                </div>
                <input type="text" placeholder={placeholder} className={cls.container_input}
                       onChange={e => setQuery(e.target.value)} value={searchQuery}/>
            </div>
        )
    }
}

export default FriendsSearch