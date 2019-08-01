import React from 'react';
import './Button.scss';
import propTypes from 'prop-types';

const Button = ({ func, arg, text, classStyle, emoji }) => {
  return (
    <button
      type="button"
      className={classStyle}
      onClick={func ? func.bind(this, arg) : () => {}}
    >
      {text} 
      {' '}
      {emoji ? <i className={emoji} /> : ''}
    </button>
  );
};

Button.propTypes = {
  func: propTypes.func,
  arg: propTypes.oneOfType([
    propTypes.string,
    propTypes.object,
    propTypes.number,
  ]),
  text: propTypes.string.isRequired,
  classStyle: propTypes.string.isRequired,
  emoji: propTypes.string,
};

Button.defaultProps = {
  func: () => {},
  arg: '',
  emoji: '',
};

export default Button;
