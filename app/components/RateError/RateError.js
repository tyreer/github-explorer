import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RateError() {
  return (
    <div>
      <div className="RateError__container">
        <h2 className="RateError__h2">
          UH OH
        </h2>
        <h2 className="RateError__h2">
          GitHub API rate limit exceeded
        </h2>
        <NavLink
          to="/"
          className="Nav__a--blue"
        >
          Try again after a few minutes, or from any other IP address
        </NavLink>
      </div>
      <div className="RateError__bottomDiv" />
    </div>
  );
}
