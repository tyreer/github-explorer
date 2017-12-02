import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const navOptionLinks = {
  links: [
    {
      link: '/followers',
      title: 'Followers',
    },
    {
      link: '/battle',
      title: 'Battle',
    },
    {
      link: '/famous',
      title: 'Famous',
    },
  ],
};

export const navHomeLink = {
  links: [
    {
      link: '/',
      title: 'Home',
    },
  ],
};

export default function Nav(props) {
  return (
    <div className="Nav__container">
      <div className={props.addedProps.links.length > 1
        ? 'Nav__container--expanded'
        : ''}
      >
        <ul className={props.addedProps.links.length > 1
          ? 'Nav--options'
          : 'Nav'}
        >
          {props.addedProps.links.map(item =>
                (<li
                  key={item.title}
                >
                  <NavLink to={item.link}>
                    {item.title}
                  </NavLink>
                </li>))}
        </ul>
        <p className="Nav__footer">Good times with the GitHub API</p>
      </div>
    </div>
  );
}

Nav.propTypes = {
  addedProps: PropTypes.object.isRequired,
};
