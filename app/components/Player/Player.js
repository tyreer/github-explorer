import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile/Profile';

export default function Player(props) {
  return (
    <div>
      <Profile info={props.profile}>
        <h2 className="Player__header">{props.label}</h2>
        <h3 className="Player__score">Score: {props.score}</h3>
      </Profile>
    </div>
  );
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
};
