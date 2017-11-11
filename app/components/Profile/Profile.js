import React from 'react';
import PropTypes from 'prop-types';
import PlayerPreview from '../PlayerPreview/PlayerPreview';

export default function Profile (props) {
  const info = props.info;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      {props.children}
      <ul className='Profile__list'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired,
}
