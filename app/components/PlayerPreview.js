import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerPreview (props) {
  return (
    <div>
      <div className={props.className}>
        <img
          className='avatar'
          src={props.avatar}
          alt={'Avatar for ' + props.username}
        />
        <h2 className='username'>@{props.username}</h2>
      </div>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PlayerPreview.defaultProps = {
  className: 'column',
}
