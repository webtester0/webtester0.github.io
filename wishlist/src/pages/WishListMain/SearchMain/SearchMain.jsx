import React from 'react'
import cls from './SearchMain.module.scss'
import propTypes from 'prop-types'

class SearchMain extends React.Component {
    static propTypes = {
        placeholder: propTypes.string.isRequired
    };

    render() {
        const {placeholder, searchQuery, setQuery} = this.props;
        return (
            <div className={cls.container}>
                <div className={cls.container_title}>Wishlist <i className="em em-heart_eyes_cat"></i></div>
                <input type="text"  value={searchQuery} placeholder={placeholder} className={cls.container_input} onChange={e => setQuery(e.target.value)}/>
            </div>
        )
    }
}

export default SearchMain