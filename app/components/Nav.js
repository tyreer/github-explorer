import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <div className='Nav-container--expanded'>
       <ul className='Nav'>
         <li>
           <NavLink exact activeClassName='active' to='/'>
             Home
           </NavLink>
         </li>
       </ul>
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
     </div>
  )
}
