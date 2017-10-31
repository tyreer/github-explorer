import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/github-logo.png';

export default function PlayerPreview (props) {

  return (
    <div className={props.containerClass}>
      <div className={props.backdropClass}>
        <img className="PlayerPreview__GitHub" src={logo} alt="Github logo"/>
      </div>
      <img
        className='avatar'
        src={props.avatar}
        alt={'Avatar for ' + props.username}
      />
      <h2 className='PlayerPreview__username'>{props.username}</h2>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  backdropClass: PropTypes.string,
};

PlayerPreview.defaultProps = {
  containerClass: 'PlayerPreview__container',
  backdropClass: 'PlayerPreview__backdrop',
}
