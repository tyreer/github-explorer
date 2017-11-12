import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Nav(props) {
  return (
    <div className="Nav__container">

      {props.expanded === false
        ?
          <ul className="Nav">
            <li>
              <NavLink exact to="/">
               Home
              </NavLink>
            </li>
          </ul>
        :
          <div className="Nav__container--expanded">
            <ul className="Nav--options">
              <li>
                <NavLink to="/followers">
                Followers
                </NavLink>
              </li>
              <li>
                <NavLink to="/battle">
                Battle
                </NavLink>
              </li>
              <li>
                <NavLink to="/famous">
                Famous
                </NavLink>
              </li>
            </ul>
            <p className="Nav__footer">Good times with the GitHub API</p>
          </div>
      }

    </div>
  );
}

Nav.propTypes = {
  expanded: PropTypes.bool,
};

Nav.defaultProps = {
  expanded: true,
};
