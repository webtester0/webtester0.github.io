import React from 'react'
import cls from './SearchMain.module.scss'
import propTypes from 'prop-types'

class SearchMain extends React.Component {
    static propTypes = {
        placeholder: propTypes.string.isRequired
    };
    render() {
        let {placeholder} = this.props;
      return (
          <div className={cls.container}>
              <div className={cls.container_title}>Wishlist <i className="em em-heart_eyes_cat"></i></div>
              <input type="text" placeholder={placeholder} className={cls.container_input}/>
          </div>
      )
    }
}

export default SearchMain