import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <div>
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
        </li>
        <li>
        </li>
      </ul>
      <ul className='nav--sub'>
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
    </div>
  )
}
