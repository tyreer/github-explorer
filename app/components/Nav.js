import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Nav (props) {
  return (
    <div className='Nav-container'>
      {props.expanded !== true
        ?
        <ul className='Nav'>
           <li>
             <NavLink exact activeClassName='active' to='/'>
               Home
             </NavLink>
           </li>
         </ul>
        :
        <div className='Nav-container--expanded'>
          <ul className='Nav--options'>
            <li>
              <NavLink activeClassName='active' to='/followers'>
                Followers
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/battle'>
                Battle
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/famous'>
                Famous
              </NavLink>
            </li>
          </ul>
          <p className="Nav__footer">Good times with the GitHub API</p>
        </div>}
     </div>
  )
}

Nav.propTypes = {
  expanded: PropTypes.bool,
};

Nav.defaultProps = {
  expanded: true,
}
