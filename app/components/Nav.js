import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Nav (props) {
  return (
    <div>
      {props.expanded !== 'true'
        ?
        <div className='Nav-container'>
          <ul className='Nav'>
             <li>
               <NavLink exact activeClassName='active' to='/'>
                 Home
               </NavLink>
             </li>
           </ul>
        </div>
        :
        <div className='Nav-container--expanded'>
          <ul className='Nav--sub'>
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
        </div>}
     </div>
  )
}

Nav.propTypes = {
  expanded: PropTypes.string,
};

Nav.defaultProps = {
  expanded: 'true',
}
