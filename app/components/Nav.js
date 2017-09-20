import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <table className='Nav' >
      <tr className='Nav-tr'>
        <td>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr className='Nav-tr'>
        <td>
          <NavLink activeClassName='active' to='/followers'>
            Followers
          </NavLink>
        </td>
        <td>
          <NavLink activeClassName='active' to='/battle'>
            Battle
          </NavLink>
        </td>
        <td>
          <NavLink activeClassName='active' to='/famous'>
            Famous
          </NavLink>
        </td>
      </tr>
    </table>
  )
}
