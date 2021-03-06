import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const navOptionsProps = {
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
  description: 'Good times with the GitHub API',
};

export const navHomeProps = {
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
      <div className={props.links.length > 1 ? 'Nav__container--options' : ''}>
        <ul className={props.links.length > 1 ? 'Nav--options' : 'Nav'}>
          {props.links.map(item => (
            <li key={item.title}>
              <NavLink to={item.link}>
                {item.title}
              </NavLink>
            </li>))}
        </ul>
        {props.description.length > 1 &&
          <p className="Nav__footer">{props.description}</p>
        }
      </div>
    </div>
  );
}

Nav.propTypes = {
  links: PropTypes.array.isRequired,
  description: PropTypes.string,
};

Nav.defaultProps = {
  description: '',
};
